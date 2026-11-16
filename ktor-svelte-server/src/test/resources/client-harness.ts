import { ApiError, apiConfig, fixtureFetch, isRateLimitError, request, type ApiFixtures } from './client.ts';

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
const patientTimeout = globalThis.setTimeout;
globalThis.setTimeout = ((run: () => void) => patientTimeout(run, 0)) as typeof setTimeout;
await scenario('trueUsesTheDefaults', [network(), 200], () => request('GET', '/api/notes', { retry: true }));
globalThis.setTimeout = patientTimeout;

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

async function sentHeaders(path: string, setup: () => void = () => {}): Promise<Headers> {
    apiConfig.retry = undefined;
    apiConfig.sendTimeZone = undefined;
    apiConfig.baseUrl = '';
    setup();
    let sent = new Headers();
    apiConfig.fetch = (async (_input: RequestInfo | URL, init?: RequestInit) => {
        sent = new Headers(init?.headers);
        return answer(200);
    }) as typeof fetch;
    await request('GET', path);
    apiConfig.baseUrl = '';
    return sent;
}

const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
results.zoneIsSent = (await sentHeaders('/api/notes')).get('x-time-zone') === browserZone && browserZone.length > 0;
results.zoneCanBeTurnedOff = (await sentHeaders('/api/notes', () => (apiConfig.sendTimeZone = false))).has('x-time-zone');
results.zoneStaysHome = (await sentHeaders('/api/notes', () => (apiConfig.baseUrl = 'https://other.example'))).has('x-time-zone');
results.ownZoneHeaderWins = (await sentHeaders('/api/notes', () => (apiConfig.headers = { 'X-Time-Zone': 'Asia/Tokyo' }))).get('x-time-zone');
apiConfig.headers = {};

async function writesNoticedAfter(calls: () => Promise<unknown>, outcomes: Outcome[] = [200]): Promise<number> {
    apiConfig.retry = undefined;
    let noticed = 0;
    apiConfig.onWrite = () => noticed++;
    server(outcomes);
    await calls().catch(() => undefined);
    await new Promise((resolve) => realTimeout(resolve, 20));
    apiConfig.onWrite = undefined;
    return noticed;
}

results.writeIsNoticed = await writesNoticedAfter(() => request('POST', '/api/notes', { body: {} }));
results.readIsNotNoticed = await writesNoticedAfter(() => request('GET', '/api/notes'));
results.failedWriteIsNotNoticed = await writesNoticedAfter(() => request('DELETE', '/api/notes/1'), [500]);
results.oneCallCanStayQuiet = await writesNoticedAfter(() => request('PUT', '/api/notes/1', { body: {}, refresh: false }));
results.writesTogetherAreNoticedOnce = await writesNoticedAfter(() =>
    Promise.all([request('POST', '/api/notes', { body: {} }), request('POST', '/api/tags', { body: {} }), request('DELETE', '/api/notes/2')])
);
apiConfig.onWrite = () => {
    throw new Error('broken handler');
};
server([200]);
results.brokenHandlerDoesNotFailTheCall = await outcomeOf(() => request('POST', '/api/notes', { body: {} }));
await new Promise((resolve) => realTimeout(resolve, 20));
apiConfig.onWrite = undefined;

const recordedCalls: ApiFixtures = {
    recorded: '2026-11-16T12:00:00.000Z',
    calls: [
        { method: 'GET', path: '/api/notes?page=1', status: 200, response: { items: ['first'] } },
        { method: 'POST', path: '/api/notes', status: 201, request: { title: 'New' }, response: { id: 7 } },
        { method: 'GET', path: '/api/notes?page=1', status: 200, response: { items: ['first', 'New'] } },
        { method: 'delete', path: '/api/notes/7', status: 204 },
        { method: 'GET', path: '/api/notes/9', status: 404, response: { message: 'That note does not exist.' } },
        { method: 'GET', path: '/api/greeting', status: 200, response: 'hello' }
    ]
};
apiConfig.retry = undefined;
apiConfig.onError = undefined;
apiConfig.baseUrl = '';
apiConfig.headers = {};
apiConfig.fetch = fixtureFetch(recordedCalls);
results.fixtures = [
    await outcomeOf(() => request('GET', '/api/notes', { query: { page: 1 } })),
    await outcomeOf(() => request('POST', '/api/notes', { body: { title: 'New' } })),
    await outcomeOf(() => request('GET', '/api/notes', { query: { page: 1 } })),
    await outcomeOf(() => request('GET', '/api/notes', { query: { page: 1 } })),
    await outcomeOf(() => request('DELETE', '/api/notes/7')),
    await outcomeOf(() => request('GET', '/api/notes/9')),
    await outcomeOf(() => request('GET', '/api/greeting'))
];
results.missingFixture = await request('GET', '/api/other').catch((error: Error) => error.message);
apiConfig.fetch = fixtureFetch(recordedCalls);
results.eachFetchStartsOver = await outcomeOf(() => request('GET', '/api/notes', { query: { page: 1 } }));

async function toastsShownFor(headers: Record<string, string>, path: string, status = 200, setup: () => void = () => {}): Promise<string[]> {
    const shown: string[] = [];
    apiConfig.retry = undefined;
    apiConfig.onError = undefined;
    apiConfig.baseUrl = '';
    apiConfig.onToast = (message, kind) => shown.push(`${kind}: ${message}`);
    setup();
    apiConfig.fetch = (async () => new Response(status === 204 ? null : '{}', { status, headers })) as typeof fetch;
    await request('POST', path, { body: {} }).catch(() => undefined);
    apiConfig.onToast = undefined;
    apiConfig.baseUrl = '';
    return shown;
}

Object.assign(globalThis, { document: {}, location: { href: 'http://app.test/', origin: 'http://app.test' } });
results.serverToast = await toastsShownFor({ 'x-ktor-svelte-toast': 'success:Note%20saved' }, '/api/notes');
results.severalToasts = await toastsShownFor(
    { 'x-ktor-svelte-toast': 'info:Gr%C3%BC%C3%9Fe%2C%20Ada, warning:Almost%20full, shout:ignored, broken, error:%E0%A4%A' },
    '/api/notes'
);
results.toastOnAFailedCall = await toastsShownFor({ 'x-ktor-svelte-toast': 'error:Quota%20reached' }, '/api/notes', 409);
results.toastFromAnotherOrigin = await toastsShownFor({ 'x-ktor-svelte-toast': 'info:Hello' }, '/api/notes', 200, () => {
    apiConfig.baseUrl = 'https://other.example';
});
results.noToastHeader = await toastsShownFor({}, '/api/notes');
async function navigatedAfter(header: string | undefined, status = 200, setup: () => void = () => {}): Promise<string[]> {
    const visited: string[] = [];
    apiConfig.retry = undefined;
    apiConfig.onError = undefined;
    apiConfig.baseUrl = '';
    apiConfig.onNavigate = (path) => visited.push(path);
    setup();
    const headers: Record<string, string> = header === undefined ? {} : { 'x-ktor-svelte-navigate': header };
    apiConfig.fetch = (async () => new Response('{}', { status, headers })) as typeof fetch;
    await request('POST', '/api/notes', { body: {} }).catch(() => undefined);
    visited.push('the call returned');
    await new Promise((resolve) => realTimeout(resolve, 20));
    apiConfig.onNavigate = undefined;
    apiConfig.baseUrl = '';
    return visited;
}

results.navigates = await navigatedAfter('/notes/7?tab=files');
results.noNavigationHeader = await navigatedAfter(undefined);
results.noNavigationAfterAFailure = await navigatedAfter('/notes/7', 409);
results.otherSitesAreNotFollowed = [
    ...(await navigatedAfter('https://other.example/notes')),
    ...(await navigatedAfter('//other.example/notes')),
    ...(await navigatedAfter('/\\other.example')),
    ...(await navigatedAfter('notes/7'))
];
results.noNavigationFromAnotherOrigin = await navigatedAfter('/notes/7', 200, () => {
    apiConfig.baseUrl = 'https://other.example';
});
Reflect.deleteProperty(globalThis, 'document');
Reflect.deleteProperty(globalThis, 'location');

console.log(JSON.stringify(results));
