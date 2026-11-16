import { ApiError, apiConfig, isRateLimitError, request } from './client.ts';

type Outcome = number | Error | { status: number; retryAfter: string };

function answer(outcome: number | { status: number; retryAfter: string }): Response {
    const status = typeof outcome === 'number' ? outcome : outcome.status;
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (typeof outcome !== 'number') headers['retry-after'] = outcome.retryAfter;
    return new Response(JSON.stringify({ status }), { status, headers });
}

function server(outcomes: Outcome[]) {
    let calls = 0;
    apiConfig.fetch = (async () => {
        const outcome = outcomes[Math.min(calls, outcomes.length - 1)];
        calls++;
        if (outcome instanceof Error) throw outcome;
        return answer(outcome);
    }) as typeof fetch;
    return () => calls;
}

async function outcomeOf(call: () => Promise<unknown>): Promise<string> {
    try {
        return `ok ${JSON.stringify(await call())}`;
    } catch (error) {
        if (error instanceof ApiError) return `ApiError ${error.status}`;
        return error instanceof Error ? error.name : String(error);
    }
}

const network = () => new TypeError('Network request failed');
const timedOut = () => new DOMException('Timed out', 'TimeoutError');
const quick = { delay: 1, maxDelay: 2 };
const results: Record<string, unknown> = {};

async function scenario(name: string, outcomes: Outcome[], call: () => Promise<unknown>, setup: () => void = () => {}) {
    apiConfig.retry = undefined;
    apiConfig.onError = undefined;
    setup();
    const calls = server(outcomes);
    results[name] = `${await outcomeOf(call)} after ${calls()} call(s)`;
}

await scenario('offByDefault', [network()], () => request('GET', '/api/notes'));
await scenario('recovers', [network(), 503, 200], () => request('GET', '/api/notes'), () => (apiConfig.retry = quick));
await scenario('timeoutsAreRetried', [timedOut(), 200], () => request('GET', '/api/notes'), () => (apiConfig.retry = quick));
await scenario('givesUp', [503], () => request('GET', '/api/notes'), () => (apiConfig.retry = quick));
await scenario('writesAreNeverRetried', [503], () => request('POST', '/api/notes', { body: {} }), () => (apiConfig.retry = quick));
await scenario('otherStatusesAreNotRetried', [500], () => request('GET', '/api/notes'), () => (apiConfig.retry = quick));
await scenario('notFoundIsNotRetried', [404], () => request('GET', '/api/notes/1'), () => (apiConfig.retry = quick));
await scenario('oneCallCanOptOut', [503], () => request('GET', '/api/notes', { retry: false }), () => (apiConfig.retry = quick));
await scenario('oneCallCanOptIn', [503, 200], () => request('GET', '/api/notes', { retry: { attempts: 2, delay: 1 } }));
await scenario('trueUsesTheDefaults', [network(), 200], () => request('GET', '/api/notes', { retry: true }), () => {
    const original = globalThis.setTimeout;
    globalThis.setTimeout = ((run: () => void) => original(run, 0)) as typeof setTimeout;
    queueMicrotask(() => original(() => (globalThis.setTimeout = original), 20));
});

let reported = 0;
await scenario('reportsOnlyTheLastFailure', [503], () => request('GET', '/api/notes'), () => {
    apiConfig.retry = quick;
    apiConfig.onError = () => reported++;
});
results.reported = reported;

const waits: number[] = [];
const realTimeout = globalThis.setTimeout;
globalThis.setTimeout = ((run: () => void, milliseconds?: number) => {
    waits.push(milliseconds ?? 0);
    return realTimeout(run, 0);
}) as typeof setTimeout;
await scenario('backsOff', [503], () => request('GET', '/api/notes', { retry: { attempts: 5, delay: 100, maxDelay: 250 } }));
globalThis.setTimeout = realTimeout;
results.waits = waits;

const controller = new AbortController();
realTimeout(() => controller.abort(), 10);
await scenario('stopsWhenAborted', [503], () => request('GET', '/api/notes', { retry: { delay: 5000 }, signal: controller.signal }));

const limited = (retryAfter: string) => ({ status: 429, retryAfter });

server([limited('2')]);
apiConfig.retry = undefined;
const refused = await request('POST', '/api/notes', { body: {} }).catch((error: unknown) => error);
results.limitError = isRateLimitError(refused) ? `wait ${refused.retryAfter}` : 'not a rate limit error';
results.otherErrorIsNotALimit = isRateLimitError(new ApiError(500, undefined, '/x'));

await scenario('limitIsNotWaitedForByDefault', [limited('0'), 200], () => request('POST', '/api/notes', { body: {} }));
await scenario('limitWaitsAndResendsWrites', [limited('0'), 201], () => request('POST', '/api/notes', { body: {} }), () => (apiConfig.retry = quick));
await scenario('limitResendsOnlyOnce', [limited('0')], () => request('POST', '/api/notes', { body: {} }), () => (apiConfig.retry = quick));
await scenario('longLimitIsNotWaitedFor', [limited('60'), 201], () => request('POST', '/api/notes', { body: {} }), () => (apiConfig.retry = true));
await scenario('limitDoesNotUseUpGetAttempts', [limited('0'), 503, 503, 200], () => request('GET', '/api/notes'), () => (apiConfig.retry = quick));

server([limited(new Date(Date.now() + 1500).toUTCString())]);
apiConfig.retry = undefined;
const dated = await request('GET', '/api/notes').catch((error: unknown) => error);
const datedWait = isRateLimitError(dated) ? (dated.retryAfter ?? -1) : -1;
results.limitFromDate = datedWait >= 0 && datedWait <= 1500;

server([limited('soon')]);
const unreadable = await request('GET', '/api/notes').catch((error: unknown) => error);
results.unreadableLimit = isRateLimitError(unreadable) && unreadable.retryAfter === undefined;

console.log(JSON.stringify(results));
