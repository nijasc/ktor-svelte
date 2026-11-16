import { ApiError, apiConfig, request } from './client.ts';

type Outcome = number | Error;

function answer(status: number): Response {
    return new Response(JSON.stringify({ status }), { status, headers: { 'content-type': 'application/json' } });
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

console.log(JSON.stringify(results));
