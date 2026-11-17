import {
    ApiError,
    apiConfig,
    applyPatch,
    codeMessages,
    consentStore,
    errorCode,
    errorMessage,
    fixtureFetch,
    typedCookie,
    userStore,
    matchGuard,
    type PageGuard,
    loginPath,
    afterLogin,
    type UserState,
    isRateLimitError,
    isUploadError,
    isVersionConflict,
    patchOf,
    request,
    type ApiFixtures,
    type RequestOptions,
    type UploadRules
} from './client.ts';

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

async function uploadOutcome(files: File[], rules: UploadRules | undefined): Promise<string> {
    let sent = 0;
    apiConfig.retry = undefined;
    apiConfig.onError = undefined;
    apiConfig.baseUrl = '';
    apiConfig.fetch = (async () => {
        sent++;
        return new Response('{"stored":true}', { status: 201, headers: { 'content-type': 'application/json' } });
    }) as typeof fetch;
    const form = new FormData();
    form.append('note', 'just text');
    files.forEach((file) => form.append('file', file));
    try {
        await request('POST', '/api/files', { body: form, upload: rules } as RequestOptions);
        return `sent ${sent}`;
    } catch (error) {
        if (!isUploadError(error)) return `other ${String(error)}`;
        return `${error.status} ${error.body.code} ${error.body.message} file=${error.body.file ?? '-'} sent ${sent}`;
    }
}

const file = (name: string, type: string, size = 4) => new File([new Uint8Array(size)], name, { type });
const filesRules: UploadRules = { maxBytes: 10, types: ['text/*', '.csv'], maxFiles: 2 };
results.uploads = [
    await uploadOutcome([file('a.txt', 'text/plain;charset=utf-8'), file('b.csv', 'application/octet-stream', 10)], filesRules),
    await uploadOutcome([file('big.txt', 'text/plain', 11)], filesRules),
    await uploadOutcome([file('photo.png', 'image/png')], filesRules),
    await uploadOutcome([file('a.txt', 'text/plain'), file('b.txt', 'text/plain'), file('c.txt', 'text/plain')], filesRules),
    await uploadOutcome([file('photo.png', 'image/png', 2000)], undefined),
    await uploadOutcome([file('photo.png', 'image/png', 6 * 1024 * 1024)], { maxBytes: 5 * 1024 * 1024 }),
    await uploadOutcome([file('a.txt', 'text/plain'), file('b.txt', 'text/plain')], { maxFiles: 1 })
];

const noteBefore = { title: 'Shopping', dueOn: '2026-12-24' as string | null, tags: ['home'], stars: 3 as number | undefined };
results.patches = [
    patchOf(noteBefore, { ...noteBefore }),
    patchOf(noteBefore, { ...noteBefore, title: 'Groceries' }),
    patchOf(noteBefore, { ...noteBefore, dueOn: null }),
    patchOf(noteBefore, { ...noteBefore, tags: ['home', 'food'], stars: undefined }),
    patchOf({ ...noteBefore, dueOn: null }, { ...noteBefore, dueOn: null }),
    applyPatch(noteBefore, { dueOn: null, stars: 5 })
];
const sentForms: string[] = [];
apiConfig.fetch = (async (_url: RequestInfo | URL, init?: RequestInit) => {
    const sent = init?.body;
    const headers = new Headers(init?.headers);
    if (sent instanceof FormData) {
        const fields = [...sent.entries()].map(([name, value]) => (typeof value === 'string' ? `${name}=${value}` : `${name}=<${value.name}:${value.size}>`));
        sentForms.push(`${headers.has('content-type') ? 'typed' : 'untyped'} ${fields.join(' ')}`);
    } else {
        sentForms.push(`not a form: ${String(sent)}`);
    }
    return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } });
}) as typeof fetch;
const cover = new File(['abcd'], 'cover.txt', { type: 'text/plain' });
const pages = [new File(['a'], 'one.txt', { type: 'text/plain' }), new File(['bb'], 'two.txt', { type: 'text/plain' })];
await request('POST', '/api/documents', { body: { title: 'Report', note: undefined, count: 3, cover, pages }, multipart: true } as RequestOptions);
const ready = new FormData();
ready.append('title', 'Ready made');
await request('POST', '/api/documents', { body: ready, multipart: true } as RequestOptions);
const refusedForm = await request('POST', '/api/documents', {
    body: { cover, pages },
    multipart: true,
    upload: { maxFiles: 2 }
} as RequestOptions).then(
    () => 'sent',
    (error: unknown) => (isUploadError(error) ? error.body.code : String(error))
);
results.forms = { sent: sentForms, refused: refusedForm };
apiConfig.fetch = undefined;

const keysSeen: (string | null)[] = [];
let keyCalls = 0;
let keyOutcomes: number[] = [];
apiConfig.fetch = (async (_url: RequestInfo | URL, init?: RequestInit) => {
    keysSeen.push(new Headers(init?.headers).get('Idempotency-Key'));
    const status = keyOutcomes[Math.min(keyCalls++, keyOutcomes.length - 1)];
    const body = status === 409 ? { code: 'idempotency.inProgress', message: 'busy' } : {};
    return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}) as typeof fetch;
const keyRun = async (method: string, outcomes: number[], options: RequestOptions = {}) => {
    keysSeen.length = 0;
    keyCalls = 0;
    keyOutcomes = outcomes;
    const outcome = await request(method, '/api/orders', options).then(
        () => 'ok',
        (error: unknown) => (error instanceof ApiError ? String(error.status) : 'failed')
    );
    return { outcome, keys: [...keysSeen] };
};
const fast = { attempts: 3, delay: 1, maxDelay: 2 };
const plainWrite = await keyRun('POST', [200]);
const keyedRead = await keyRun('GET', [200]);
const retriedWrite = await keyRun('POST', [503, 409, 200], { retry: fast });
apiConfig.retry = fast;
const notRetriedByDefault = await keyRun('POST', [503, 200]);
apiConfig.retry = undefined;
const ownKey = await keyRun('PUT', [200], { headers: { 'Idempotency-Key': 'mine' } });
apiConfig.idempotencyKeys = false;
const switchedOff = await keyRun('POST', [503, 200], { retry: fast });
apiConfig.idempotencyKeys = undefined;
results.idempotency = {
    writeHasKey: plainWrite.keys.length === 1 && (plainWrite.keys[0]?.length ?? 0) >= 10,
    readHasNone: keyedRead.keys,
    retried: [retriedWrite.outcome, retriedWrite.keys.length, new Set(retriedWrite.keys).size],
    notRetriedByDefault: [notRetriedByDefault.outcome, notRetriedByDefault.keys.length],
    ownKey: ownKey.keys,
    switchedOff: [switchedOff.outcome, switchedOff.keys]
};
apiConfig.fetch = undefined;

results.conflicts = [
    isVersionConflict(new ApiError(409, { message: 'x', code: 'version.conflict', current: { version: 2 } }, '/api/n')),
    isVersionConflict(new ApiError(409, { message: 'x', code: 'EmailTaken' }, '/api/n')),
    isVersionConflict(new ApiError(412, { message: 'x', code: 'version.conflict', current: {} }, '/api/n')),
    isVersionConflict(new ApiError(409, 'plain text', '/api/n')),
    isVersionConflict(new TypeError('offline'))
];
const coded = (code: unknown, message?: string) => new ApiError(409, { message, code }, '/api/notes/1');
codeMessages.NoteLocked = 'This note is locked.';
codeMessages.QuotaReached = () => `Limit reached at ${new Date(0).getUTCFullYear()}.`;
results.codes = [
    errorCode(coded('NoteLocked')) ?? null,
    errorCode(coded(7)) ?? null,
    errorCode(new ApiError(500, 'plain text', '/api/x')) ?? null,
    errorCode(new TypeError('offline')) ?? null
];
results.codeMessages = [
    errorMessage(coded('NoteLocked', 'Server wording.')),
    errorMessage(coded('QuotaReached')),
    errorMessage(coded('Unlisted', 'Server wording.')),
    errorMessage(coded('Unlisted')),
    errorMessage(new TypeError('offline'))
];
Reflect.deleteProperty(codeMessages, 'NoteLocked');
Reflect.deleteProperty(codeMessages, 'QuotaReached');

const jar: string[] = [];
const hadDocument = 'document' in globalThis;
const cookieHost = globalThis as unknown as { document?: { cookie: string } };
const themeCookie = typedCookie<'Light' | 'Dark', 'Light' | 'Dark'>('theme', {
    kind: 'enum',
    values: ['Light', 'Dark'],
    default: 'Light',
    maxAge: 60,
    path: '/',
    sameSite: 'lax',
    secure: false
});
const sizeCookie = typedCookie<number>('page-size', { kind: 'int', path: '/app', sameSite: 'strict', secure: true });
const greetingCookie = typedCookie<string>('greeting', { kind: 'string', path: '/', sameSite: 'lax', secure: false });
const seenCookie = typedCookie<boolean, boolean>('seen', { kind: 'boolean', default: false, path: '/', sameSite: 'lax', secure: false });
const withoutDocument = hadDocument ? null : [themeCookie.get(), sizeCookie.get() ?? null];
let stored = 'other=1; theme=Dark; page-size=50; greeting=Gr%C3%BC%C3%9F%20dich%3B%20a%2Bb; seen=true';
cookieHost.document = {
    get cookie() {
        return stored;
    },
    set cookie(value: string) {
        jar.push(value);
    }
};
const read = [themeCookie.get(), sizeCookie.get(), greetingCookie.get() === 'Gr\u00fc\u00df dich; a+b', seenCookie.get()];
stored = 'theme=Purple; page-size=1.5; greeting=%E0%A4%A; seen=yes';
const broken = [themeCookie.get(), sizeCookie.get() ?? null, greetingCookie.get() ?? null, seenCookie.get()];
themeCookie.set('Dark');
sizeCookie.set(20);
greetingCookie.set('a b;c');
themeCookie.clear();
results.cookies = {
    withoutDocument,
    read,
    broken,
    fromHeader: [themeCookie.get('x=1; theme=Dark'), sizeCookie.get('theme=Dark') ?? null],
    jar
};
const kept = new Map<string, string>();
cookieHost.document = {
    get cookie() {
        return [...kept].map(([name, value]) => `${name}=${value}`).join('; ');
    },
    set cookie(text: string) {
        const [pair, ...attributes] = text.split('; ');
        const name = pair.slice(0, pair.indexOf('='));
        if (attributes.includes('max-age=0')) kept.delete(name);
        else kept.set(name, pair.slice(name.length + 1));
    }
};
const visits = typedCookie<number, number>('visits', { kind: 'int', default: 0, path: '/', sameSite: 'lax', secure: false, category: 'analytics' });
const layout = typedCookie<string>('layout', { kind: 'string', path: '/app', sameSite: 'lax', secure: false, category: 'preferences' });
const consent = consentStore(['analytics', 'marketing', 'preferences'] as const, [
    { name: 'layout', path: '/app', category: 'preferences' },
    { name: 'visits', path: '/', category: 'analytics' }
]);
const consentSeen: string[] = [];
const stopConsent = consent.subscribe((now) => consentSeen.push(`${now.decided}:${now.accepted.join('+')}`));
const consentSteps: unknown[] = [];
const consentStep = () => consentSteps.push([consent.decided(), consent.allows('analytics'), visits.get(), layout.get() ?? null, document.cookie]);
visits.set(1);
layout.set('wide');
consentStep();
consent.accept();
visits.set(2);
layout.set('wide');
consentStep();
consent.accept(['analytics']);
consentStep();
consent.refuse();
visits.set(3);
consentStep();
consent.accept(['preferences']);
layout.set('narrow');
consent.reset();
consentStep();
stopConsent();
consent.accept();
results.consent = {
    steps: consentSteps,
    seen: consentSeen,
    fromHeader: [visits.get('visits=9'), visits.get('visits=9; cookie-consent=analytics'), visits.get('visits=9; cookie-consent=none')]
};
if (!hadDocument) Reflect.deleteProperty(cookieHost, 'document');

interface HarnessMember {
    name: string;
}
apiConfig.retry = undefined;
apiConfig.onError = undefined;
apiConfig.onUnauthorized = undefined;
apiConfig.baseUrl = '';
let memberNow: HarnessMember | null = { name: 'Ada' };
let memberAsks = 0;
let memberFails = false;
let memberGate: Promise<void> | undefined;
apiConfig.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const address = String(input);
    if (address.endsWith('/api/current-user')) {
        memberAsks++;
        const answer = memberNow;
        if (memberGate) await memberGate;
        if (memberFails) throw new TypeError('offline');
        return new Response(JSON.stringify({ user: answer }), { headers: { 'content-type': 'application/json' } });
    }
    if (address.endsWith('/api/session')) {
        memberNow = init?.method === 'DELETE' ? null : { name: 'Grace' };
        return new Response(null, { status: 204, headers: { 'x-ktor-svelte-user': 'changed' } });
    }
    if (address.endsWith('/api/secret')) return new Response('{}', { status: 401 });
    return new Response('{}', { headers: { 'content-type': 'application/json' } });
}) as typeof fetch;
const memberState: UserState<HarnessMember> = { user: null, ready: false };
const members = userStore<HarnessMember>('/api/current-user', memberState);
const memberSteps: unknown[] = [];
const memberStep = (what: string) => memberSteps.push([what, members.user?.name ?? null, members.ready, members.signedIn, memberAsks]);
memberStep('before loading');
await request('POST', '/api/session');
memberStep('a change before the first load asks nothing');
memberNow = { name: 'Ada' };
const [firstMember, secondMember] = await Promise.all([members.load(), members.load()]);
memberStep(`loaded once for two callers: ${firstMember?.name} ${secondMember?.name}`);
await members.load();
memberStep('loading again asks nothing');
await request('POST', '/api/session');
const afterSignIn = await members.load();
memberStep(`the sign-in response reloads: ${afterSignIn?.name}`);
await request('GET', '/api/notes');
memberStep('other calls ask nothing');
await request('DELETE', '/api/session');
await members.load();
memberStep('the sign-out response reloads');
members.set({ name: 'Linus' });
memberStep('set by hand');
await request('GET', '/api/secret').catch(() => undefined);
memberStep('a 401 clears');
memberNow = { name: 'Ada' };
await members.reload();
memberStep('reload asks');
let openGate = () => {};
memberGate = new Promise((resolve) => (openGate = resolve));
const slowMember = members.reload();
members.clear();
openGate();
memberGate = undefined;
memberStep(`an answer that arrives after clear is dropped: ${(await slowMember)?.name ?? null}`);
memberFails = true;
await members.reload();
memberStep('a failed call keeps what was known');
memberFails = false;
await members.load();
memberStep('and the next load asks again');
results.currentUser = memberSteps;
members.clear();

let sessionLeft: number | null = 3;
let sessionHeader: string | undefined;
const sessionCalls: string[] = [];
apiConfig.sessionWarning = 2000;
apiConfig.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const address = String(input);
    const method = init?.method ?? 'GET';
    if (address.includes('/api/current-user')) {
        sessionCalls.push(`${method} ${address}`);
        if (address.endsWith('/extend')) sessionLeft = 600;
        const user = sessionLeft === null ? null : { name: 'Ada' };
        return new Response(JSON.stringify({ user, sessionSeconds: sessionLeft }), { headers: { 'content-type': 'application/json' } });
    }
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (sessionHeader !== undefined) headers['x-ktor-svelte-session'] = sessionHeader;
    return new Response('{}', { headers });
}) as typeof fetch;
const timedState: UserState<HarnessMember> = { user: null, ready: false, sessionEnds: null, sessionEnding: false };
const timed = userStore<HarnessMember>('/api/current-user', timedState);
const sessionSteps: unknown[] = [];
const sessionStep = (what: string) => {
    const left = timed.sessionEnds === null ? 'no end' : timed.sessionEnds.getTime() - Date.now() > 60_000 ? 'far' : 'near';
    sessionSteps.push([what, timed.user?.name ?? null, left, timed.sessionEnding, sessionCalls.length]);
};
sessionStep('before loading');
await timed.load();
sessionStep('loaded with three seconds left');
await new Promise((resolve) => realTimeout(resolve, 1500));
sessionStep('inside the warning time');
await timed.extend();
sessionStep('extended');
sessionHeader = '30';
await request('GET', '/api/notes');
sessionStep('another response says less is left');
sessionHeader = '900';
await request('GET', '/api/notes');
sessionStep('and a later one says more');
sessionHeader = '0.2';
await request('GET', '/api/notes');
sessionHeader = undefined;
sessionLeft = null;
await new Promise((resolve) => realTimeout(resolve, 1200));
sessionStep('the time ran out, so the store asked and the server said nobody');
await request('GET', '/api/notes');
sessionStep('nothing is planned for a visitor');
results.session = { steps: sessionSteps, calls: sessionCalls };

type HarnessPermission = 'NotesRead' | 'NotesDelete';
let grantedNow: HarnessPermission[] | null = ['NotesRead'];
apiConfig.fetch = (async (input: RequestInfo | URL) => {
    if (String(input).endsWith('/api/secret')) return new Response('{}', { status: 401 });
    const user = grantedNow === null ? null : { name: 'Ada' };
    return new Response(JSON.stringify({ user, permissions: grantedNow ?? ['NotesRead'] }), { headers: { 'content-type': 'application/json' } });
}) as typeof fetch;
const allowedState: UserState<HarnessMember, HarnessPermission> = { user: null, ready: false, permissions: [] };
const allowed = userStore<HarnessMember, HarnessPermission>('/api/current-user', allowedState);
const canSteps: unknown[] = [];
const canStep = (what: string) => canSteps.push([what, allowed.can('NotesRead'), allowed.can('NotesDelete')]);
canStep('before loading');
await allowed.load();
canStep('a member');
grantedNow = ['NotesRead', 'NotesDelete'];
await allowed.reload();
canStep('an admin');
await request('GET', '/api/secret').catch(() => undefined);
canStep('after a 401');
grantedNow = null;
await allowed.reload();
canStep('a visitor, whatever the answer lists');
results.permissions = canSteps;
const harnessGuards: PageGuard<'Manage'>[] = [{ page: '/admin', permission: 'Manage' }, { page: '/admin/help' }, { page: '/board' }];
results.guards = ['/admin', '/admin/', '/admin/users/4', '/admin/help', '/admin/help/x', '/administrators', '/board', '/', '/about'].map(
    (path) => {
        const found = matchGuard(harnessGuards, path);
        return `${path} -> ${found ? found.page + (found.permission ? ` (${found.permission})` : '') : 'open'}`;
    }
);
allowed.clear();
apiConfig.sessionWarning = undefined;
apiConfig.fetch = undefined;

const pageHost = globalThis as unknown as { location?: unknown };
const hadLocation = 'location' in pageHost;
const assigned: string[] = [];
function standOn(path: string) {
    const address = new URL(path, 'https://app.example');
    pageHost.location = {
        href: address.href,
        origin: address.origin,
        pathname: address.pathname,
        search: address.search,
        hash: address.hash,
        assign: (target: string) => assigned.push(`assign ${target}`)
    };
}
async function sentToLogin(path: string, setup: () => void = () => {}, options: { silent?: boolean } = {}, status = 401): Promise<string[]> {
    const went: string[] = [];
    assigned.length = 0;
    apiConfig.retry = undefined;
    apiConfig.onError = undefined;
    apiConfig.onUnauthorized = undefined;
    apiConfig.baseUrl = '';
    apiConfig.loginPage = '/login';
    apiConfig.onNavigate = (target) => went.push(target);
    standOn(path);
    setup();
    apiConfig.fetch = (async () => new Response('{}', { status })) as typeof fetch;
    await request('GET', '/api/notes', options).catch(() => undefined);
    went.push('the call failed first');
    await new Promise((resolve) => realTimeout(resolve, 20));
    went.push(...assigned);
    apiConfig.onNavigate = undefined;
    apiConfig.onUnauthorized = undefined;
    apiConfig.loginPage = undefined;
    apiConfig.baseUrl = '';
    return went;
}
const loginRedirects = {
    fromAPage: await sentToLogin('/notes/7?tab=files#top'),
    fromTheLoginPage: await sentToLogin('/login?next=%2Fboard'),
    silentCall: await sentToLogin('/notes', () => {}, { silent: true }),
    otherStatus: await sentToLogin('/notes', () => {}, {}, 403),
    ownHandler: await sentToLogin('/notes', () => {
        apiConfig.onUnauthorized = () => assigned.push('own handler');
    }),
    noLoginPage: await sentToLogin('/notes', () => {
        apiConfig.loginPage = undefined;
    }),
    withoutRouter: await sentToLogin('/notes', () => {
        apiConfig.onNavigate = undefined;
    }),
    otherOrigin: await sentToLogin('/notes', () => {
        apiConfig.baseUrl = 'https://other.example';
    })
};
apiConfig.fetch = undefined;
apiConfig.loginPage = '/login';
standOn('/board?mine=true');
const loginPaths = [
    loginPath(),
    loginPath('/tasks/4'),
    loginPath(new URL('https://app.example/tasks/4?tab=files')),
    loginPath('/login/'),
    loginPath('//other.example/x')
];
standOn('/login?next=%2Ftasks%2F4%3Ftab%3Dfiles');
const returns = [
    afterLogin('/board'),
    afterLogin('/board', '/login'),
    afterLogin('/board', '/login?next=https%3A%2F%2Fother.example'),
    afterLogin('/board', '/login?next=%2F%2Fother.example'),
    afterLogin('/board', new URL('https://app.example/login?next=%2Fsettings')),
    afterLogin()
];
apiConfig.loginPage = undefined;
let withoutLoginPage = 'no error';
try {
    loginPath('/tasks');
} catch (error) {
    withoutLoginPage = (error as Error).message;
}
results.login = { redirects: loginRedirects, paths: loginPaths, returns, withoutLoginPage };
if (hadLocation) Reflect.deleteProperty(pageHost, 'location');
else Reflect.deleteProperty(pageHost, 'location');

console.log(JSON.stringify(results));
