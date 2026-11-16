export interface UploadProgress {
    loaded: number;
    total?: number;
}

export interface RetryConfig {
    attempts?: number;
    delay?: number;
    maxDelay?: number;
}

export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
    fetch?: typeof fetch;
    onUploadProgress?: (progress: UploadProgress) => void;
    timeout?: number;
    silent?: boolean;
    retry?: boolean | RetryConfig;
    refresh?: boolean;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
    fetch?: typeof fetch;
    onUnauthorized?: (response: Response) => void;
    dedupeGets?: boolean;
    timeout?: number;
    onNewBuild?: (build: string) => void;
    onError?: (error: unknown) => void;
    retry?: boolean | RetryConfig;
    sendTimeZone?: boolean;
    onWrite?: () => void;
    onToast?: (message: string, kind: ServerToastKind) => void;
    onNavigate?: (path: string) => void;
}

export type ServerToastKind = 'info' | 'success' | 'warning' | 'error';

export function isTimeoutError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'TimeoutError';
}

export const apiConfig: ApiConfig = { baseUrl: '', headers: {} };

export class ApiError<E = unknown> extends Error {
    constructor(
        readonly status: number,
        readonly body: E,
        readonly url: string,
        readonly operation?: string,
        readonly requestId?: string,
        readonly retryAfter?: number
    ) {
        super(`Request to ${url} failed with status ${status}`);
        this.name = 'ApiError';
    }
}

export function isRateLimitError(error: unknown): error is ApiError {
    return error instanceof ApiError && error.status === 429;
}

export interface ValidationProblem {
    message: string;
    fields: Record<string, string[]>;
}

export function isValidationError(error: unknown): error is ApiError<ValidationProblem> {
    return (
        error instanceof ApiError &&
        error.status === 422 &&
        typeof error.body === 'object' &&
        error.body !== null &&
        'fields' in error.body
    );
}

export const errorMessages = {
    network: 'Could not reach the server. Check your connection and try again.',
    timeout: 'The server took too long to answer. Please try again.',
    failed: 'Something went wrong. Please try again.'
};

export function errorMessage(error: unknown): string {
    if (isTimeoutError(error)) return errorMessages.timeout;
    if (error instanceof TypeError) return errorMessages.network;
    if (!(error instanceof ApiError)) return errorMessages.failed;
    const body = error.body as { message?: unknown } | null | undefined;
    const message = typeof body === 'object' && body !== null ? body.message : undefined;
    return typeof message === 'string' && message !== '' ? message : errorMessages.failed;
}

interface InternalOptions extends RequestOptions {
    query?: Record<string, unknown>;
    body?: unknown;
    operation?: string;
    upload?: UploadRules;
}

export interface UploadRules {
    readonly maxBytes?: number;
    readonly types?: readonly string[];
    readonly maxFiles?: number;
}

export interface UploadProblem {
    message: string;
    code: 'upload.tooLarge' | 'upload.type' | 'upload.tooMany';
    file?: string;
}

export function isUploadError(error: unknown): error is ApiError<UploadProblem> {
    if (!(error instanceof ApiError) || typeof error.body !== 'object' || error.body === null) return false;
    const code = (error.body as { code?: unknown }).code;
    return typeof code === 'string' && code.startsWith('upload.');
}

function readableSize(bytes: number): string {
    const [value, unit] = bytes >= 1024 * 1024 ? [bytes / (1024 * 1024), 'MiB'] : bytes >= 1024 ? [bytes / 1024, 'KiB'] : [bytes, 'bytes'];
    return unit === 'bytes' ? `${value} bytes` : `${value.toFixed(1).replace(/\.0$/, '')} ${unit}`;
}

function acceptsFile(types: readonly string[], file: File): boolean {
    if (types.length === 0) return true;
    const type = file.type.split(';')[0].trim().toLowerCase();
    const name = file.name.toLowerCase();
    return types.some((accepted) => {
        const wanted = accepted.trim().toLowerCase();
        if (wanted.startsWith('.')) return name.endsWith(wanted);
        return wanted.endsWith('/*') ? type.startsWith(wanted.slice(0, -1)) : type === wanted;
    });
}

export function uploadProblem(rules: UploadRules, files: Iterable<File>): (UploadProblem & { status: number }) | undefined {
    let count = 0;
    for (const file of files) {
        count++;
        if (rules.maxFiles !== undefined && count > rules.maxFiles) {
            const message = rules.maxFiles === 1 ? 'Only one file can be sent at once.' : `At most ${rules.maxFiles} files can be sent at once.`;
            return { status: 400, code: 'upload.tooMany', message };
        }
        if (!acceptsFile(rules.types ?? [], file)) {
            return { status: 415, code: 'upload.type', message: `${file.name} is not an accepted file type.`, file: file.name };
        }
        if (rules.maxBytes !== undefined && file.size > rules.maxBytes) {
            const message = `${file.name} is larger than ${readableSize(rules.maxBytes)}.`;
            return { status: 413, code: 'upload.tooLarge', message, file: file.name };
        }
    }
    return undefined;
}

function checkUpload(rules: UploadRules | undefined, body: unknown, url: string, operation: string | undefined) {
    if (!rules || typeof FormData === 'undefined' || !(body instanceof FormData)) return;
    const files = [...body.values()].filter((value): value is File => typeof value !== 'string');
    const problem = uploadProblem(rules, files);
    if (!problem) return;
    const { status, ...refusal } = problem;
    throw new ApiError(status, refusal, url, operation);
}

function queryString(query: Record<string, unknown> | undefined): string {
    if (!query) return '';
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) params.append(key, String(item));
    }
    const text = params.toString();
    return text ? `?${text}` : '';
}

function isRawBody(body: unknown): body is BodyInit {
    return typeof body === 'string' || body instanceof FormData || body instanceof Blob || body instanceof URLSearchParams;
}

async function parseResponse(response: Response): Promise<unknown> {
    if (response.status === 204 || response.status === 205) return undefined;
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) return response.json();
    const text = await response.text();
    return text === '' ? undefined : text;
}

function responseHeaders(raw: string): Headers {
    const headers = new Headers();
    for (const line of raw.trim().split(/[\r\n]+/)) {
        const separator = line.indexOf(':');
        if (separator > 0) headers.append(line.slice(0, separator).trim(), line.slice(separator + 1).trim());
    }
    return headers;
}

function sendWithProgress(onProgress: (progress: UploadProgress) => void): typeof fetch {
    return (input, init = {}) =>
        new Promise<Response>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(init.method ?? 'GET', String(input));
            new Headers(init.headers).forEach((value, key) => xhr.setRequestHeader(key, value));
            xhr.withCredentials = init.credentials === 'include';
            xhr.responseType = 'blob';
            xhr.upload.onprogress = (event) => onProgress({ loaded: event.loaded, total: event.lengthComputable ? event.total : undefined });
            xhr.onload = () => {
                const empty = [101, 204, 205, 304].includes(xhr.status);
                const headers = responseHeaders(xhr.getAllResponseHeaders());
                resolve(new Response(empty ? null : xhr.response, { status: xhr.status, statusText: xhr.statusText, headers }));
            };
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.onabort = () => reject(new DOMException('The upload was aborted.', 'AbortError'));
            init.signal?.addEventListener('abort', () => xhr.abort());
            xhr.send((init.body ?? null) as XMLHttpRequestBodyInit | null);
        });
}

function isSameOrigin(url: string): boolean {
    if (typeof location === 'undefined') return !/^[a-z][a-z0-9+.-]*:/i.test(url);
    return new URL(url, location.href).origin === location.origin;
}

function newRequestId(): string {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function withTimeout(signal: AbortSignal | null | undefined, timeout: number | undefined): AbortSignal | undefined {
    if (!timeout || timeout <= 0) return signal ?? undefined;
    const timer = AbortSignal.timeout(timeout);
    return signal ? AbortSignal.any([signal, timer]) : timer;
}

const RETRIED_STATUSES = [502, 503, 504];

function retryPlan(method: string, own: boolean | RetryConfig | undefined): Required<RetryConfig> | undefined {
    const chosen = own ?? apiConfig.retry;
    if (method !== 'GET' || !chosen) return undefined;
    const config = chosen === true ? {} : chosen;
    return { attempts: config.attempts ?? 3, delay: config.delay ?? 300, maxDelay: config.maxDelay ?? 5000 };
}

function isRetryable(error: unknown): boolean {
    if (isTimeoutError(error) || error instanceof TypeError) return true;
    return error instanceof ApiError && RETRIED_STATUSES.includes(error.status);
}

function pause(milliseconds: number, signal: AbortSignal | null | undefined): Promise<void> {
    return new Promise((resolve, reject) => {
        const aborted = () => signal?.reason ?? new DOMException('The request was aborted.', 'AbortError');
        if (signal?.aborted) return reject(aborted());
        const stop = () => {
            clearTimeout(timer);
            reject(aborted());
        };
        const timer = setTimeout(() => {
            signal?.removeEventListener('abort', stop);
            resolve();
        }, milliseconds);
        signal?.addEventListener('abort', stop, { once: true });
    });
}

function retryAfter(response: Response): number | undefined {
    const value = response.headers.get('retry-after')?.trim();
    if (!value) return undefined;
    if (/^\d+$/.test(value)) return Number(value) * 1000;
    const date = Date.parse(value);
    return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
}

async function withRetry<T>(
    call: () => Promise<T>,
    plan: Required<RetryConfig> | undefined,
    longestLimitWait: number | undefined,
    signal: AbortSignal | null | undefined
): Promise<T> {
    let waitedForLimit = false;
    for (let tried = 1; ; tried++) {
        try {
            return await call();
        } catch (error) {
            const wait = isRateLimitError(error) ? error.retryAfter : undefined;
            if (!waitedForLimit && wait !== undefined && longestLimitWait !== undefined && wait <= longestLimitWait) {
                waitedForLimit = true;
                tried--;
                await pause(wait, signal);
                continue;
            }
            if (!plan || tried >= plan.attempts || !isRetryable(error)) throw error;
            await pause(Math.min(plan.delay * 2 ** (tried - 1), plan.maxDelay), signal);
        }
    }
}

let ownTimeZone: string | undefined | null = null;

function timeZone(): string | undefined {
    if (ownTimeZone === null) {
        try {
            ownTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
        } catch {
            ownTimeZone = undefined;
        }
    }
    return ownTimeZone;
}

function prepare(method: string, path: string, options: InternalOptions, accept: string, streaming = false) {
    const { query, body, operation, upload, fetch: customFetch, headers, onUploadProgress, timeout, signal, silent, retry, refresh, ...init } =
        options;
    const plan = streaming ? undefined : retryPlan(method, retry);
    const chosenRetry = retry ?? apiConfig.retry;
    const longestLimitWait = streaming || !chosenRetry ? undefined : ((chosenRetry === true ? undefined : chosenRetry.maxDelay) ?? 5000);
    const limit = timeout ?? (streaming ? undefined : apiConfig.timeout);
    const send = onUploadProgress ? sendWithProgress(onUploadProgress) : (customFetch ?? apiConfig.fetch ?? fetch);
    const url = apiConfig.baseUrl + path + queryString(query);
    const merged = new Headers(apiConfig.headers);
    merged.set('Accept', accept);
    if (!merged.has('X-Request-Id') && isSameOrigin(url)) merged.set('X-Request-Id', newRequestId());
    const zone = apiConfig.sendTimeZone === false || !isSameOrigin(url) ? undefined : timeZone();
    if (zone && !merged.has('X-Time-Zone')) merged.set('X-Time-Zone', zone);
    new Headers(headers).forEach((value, key) => merged.set(key, value));
    let payload: BodyInit | undefined;
    if (body !== undefined) {
        payload = isRawBody(body) ? body : JSON.stringify(body);
        if (!isRawBody(body) && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
    }
    return {
        url,
        operation,
        send: async () => {
            checkUpload(upload, body, url, operation);
            return send(url, { ...init, method, headers: merged, body: payload, signal: withTimeout(signal, limit) });
        },
        attempt: <T>(call: () => Promise<T>) => withRetry(call, plan, longestLimitWait, signal)
    };
}

let knownBuild: string | undefined;

function noticeBuild(response: Response) {
    const build = response.headers.get('x-ktor-svelte-build');
    if (!build) return;
    if (knownBuild !== undefined && build !== knownBuild) apiConfig.onNewBuild?.(build);
    knownBuild = build;
}

const toastKinds: readonly string[] = ['info', 'success', 'warning', 'error'];

function noticeToasts(response: Response, url: string) {
    const sent = response.headers.get('x-ktor-svelte-toast');
    if (!sent || !apiConfig.onToast || typeof document === 'undefined' || !isSameOrigin(url)) return;
    for (const part of sent.split(',')) {
        const at = part.indexOf(':');
        const kind = part.slice(0, at).trim();
        if (at < 0 || !toastKinds.includes(kind)) continue;
        try {
            apiConfig.onToast(decodeURIComponent(part.slice(at + 1).trim()), kind as ServerToastKind);
        } catch {
            continue;
        }
    }
}

function noticeNavigation(response: Response, url: string) {
    const path = response.headers.get('x-ktor-svelte-navigate');
    if (!path || !apiConfig.onNavigate || typeof document === 'undefined' || !isSameOrigin(url)) return;
    if (!/^\/(?![/\\])/.test(path)) return;
    setTimeout(() => apiConfig.onNavigate?.(path), 0);
}

async function checked(response: Response, url: string, operation: string | undefined): Promise<Response> {
    noticeBuild(response);
    noticeToasts(response, url);
    if (response.ok) noticeNavigation(response, url);
    if (response.status === 401) apiConfig.onUnauthorized?.(response);
    if (!response.ok) {
        const requestId = response.headers.get('x-request-id') ?? undefined;
        throw new ApiError(response.status, await parseResponse(response), url, operation, requestId, retryAfter(response));
    }
    return response;
}

function report(error: unknown, silent: boolean | undefined) {
    if (silent || isAbortError(error)) return;
    try {
        apiConfig.onError?.(error);
    } catch {
        return;
    }
}

let writeNoticed = false;

function noticeWrite(method: string, options: InternalOptions) {
    if (method === 'GET' || method === 'HEAD' || options.refresh === false || !apiConfig.onWrite || writeNoticed) return;
    writeNoticed = true;
    setTimeout(() => {
        writeNoticed = false;
        try {
            apiConfig.onWrite?.();
        } catch {
            return;
        }
    }, 0);
}

const inFlight = new Map<string, Promise<unknown>>();

function isShareable(method: string, options: InternalOptions): boolean {
    return apiConfig.dedupeGets === true && method === 'GET' && !options.signal && !options.fetch && !options.headers;
}

const prefetched = new Map<string, { response: Promise<unknown>; expires: number }>();
let prefetchUntil: number | undefined;

function fromPrefetch<T>(url: string, run: (silent?: boolean) => Promise<T>): Promise<T> | undefined {
    const until = prefetchUntil;
    prefetchUntil = undefined;
    const hit = prefetched.get(url);
    const fresh = hit !== undefined && hit.expires > Date.now();
    if (hit && !fresh) prefetched.delete(url);
    if (until === undefined) {
        if (!fresh) return undefined;
        prefetched.delete(url);
        return hit.response as Promise<T>;
    }
    if (fresh) return hit.response as Promise<T>;
    const response = run(true);
    prefetched.set(url, { response, expires: until });
    response.catch(() => prefetched.delete(url));
    return response;
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    const { url, operation, send, attempt } = prepare(method, path, options, 'application/json');
    const run = async (silent = options.silent) => {
        try {
            const result = (await attempt(async () => parseResponse(await checked(await send(), url, operation)))) as T;
            noticeWrite(method, options);
            return result;
        } catch (error) {
            report(error, silent);
            throw error;
        }
    };
    if (method === 'GET' && !options.signal && !options.headers) {
        const early = fromPrefetch(url, run);
        if (early) return early;
    } else {
        prefetchUntil = undefined;
    }
    if (!isShareable(method, options)) return run();
    const pending = inFlight.get(url) ?? run().finally(() => inFlight.delete(url));
    inFlight.set(url, pending);
    return pending as Promise<T>;
}

function eventData<T>(data: string): T {
    try {
        return JSON.parse(data) as T;
    } catch {
        return data as T;
    }
}

export async function* stream<T>(method: string, path: string, options: InternalOptions = {}): AsyncGenerator<T, void, undefined> {
    const { url, operation, send } = prepare(method, path, options, 'text/event-stream', true);
    let response: Response;
    try {
        response = await checked(await send(), url, operation);
    } catch (error) {
        report(error, options.silent);
        throw error;
    }
    if (!response.body) return;
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = '';
    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            const frames = buffer.split(/\r?\n\r?\n/);
            buffer = frames.pop() ?? '';
            for (const frame of frames) {
                const data = frame
                    .split(/\r?\n/)
                    .filter((line) => line.startsWith('data:'))
                    .map((line) => line.slice(5).replace(/^ /, ''))
                    .join('\n');
                if (data !== '') yield eventData<T>(data);
            }
        }
    } finally {
        reader.cancel().catch(() => undefined);
    }
}

export interface PageOf<T> {
    items: T[];
    next?: string | null;
}

export async function* pages<Q extends { cursor?: string }, T>(
    load: (query: Q, options?: RequestOptions) => Promise<PageOf<T>>,
    query?: Omit<Q, 'cursor'>,
    options?: RequestOptions
): AsyncGenerator<T[], void, undefined> {
    let cursor: string | undefined;
    do {
        const page = await load({ ...query, cursor } as Q, options);
        yield page.items;
        cursor = page.next ?? undefined;
    } while (cursor !== undefined);
}

export interface BuildInfo {
    version?: string;
    commit?: string;
    time?: string;
}

let buildInfo: Promise<BuildInfo> | undefined;

export function loadBuildInfo(options?: RequestOptions): Promise<BuildInfo> {
    buildInfo ??= request<BuildInfo>('GET', '/_ktor-svelte/build.json', { ...options }).catch((error: unknown) => {
        buildInfo = undefined;
        throw error;
    });
    return buildInfo;
}

export function isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'AbortError';
}

export function latest<A extends unknown[], R>(call: (...args: A) => Promise<R>): (...args: A) => Promise<R> {
    let previous: AbortController | undefined;
    return (...args: A) => {
        previous?.abort();
        const current = new AbortController();
        previous = current;
        const arity = call.length;
        const padded = args.slice(0, arity);
        padded.length = arity;
        const options = (padded[arity - 1] ?? {}) as RequestOptions;
        const signal = options.signal ? AbortSignal.any([options.signal, current.signal]) : current.signal;
        padded[arity - 1] = { ...options, signal };
        return call(...(padded as A)).catch((error: unknown) => {
            if (signal.aborted && !isAbortError(error)) throw new DOMException('The request was superseded.', 'AbortError');
            throw error;
        });
    };
}

export async function prefetch(call: () => Promise<unknown>, ttl = 10_000): Promise<void> {
    prefetchUntil = Date.now() + ttl;
    let pending: Promise<unknown>;
    try {
        pending = call();
    } finally {
        prefetchUntil = undefined;
    }
    await pending.catch(() => undefined);
}

export function prefetchOnHover(node: HTMLElement, call: () => Promise<unknown>) {
    let current = call;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const now = () => {
        clearTimeout(timer);
        void prefetch(current);
    };
    const soon = () => {
        clearTimeout(timer);
        timer = setTimeout(now, 50);
    };
    const cancel = () => clearTimeout(timer);
    node.addEventListener('mouseenter', soon);
    node.addEventListener('mouseleave', cancel);
    node.addEventListener('focus', now);
    node.addEventListener('touchstart', now, { passive: true });
    return {
        update: (next: () => Promise<unknown>) => {
            current = next;
        },
        destroy: () => {
            cancel();
            node.removeEventListener('mouseenter', soon);
            node.removeEventListener('mouseleave', cancel);
            node.removeEventListener('focus', now);
            node.removeEventListener('touchstart', now);
        }
    };
}

export interface ApiFixture {
    method: string;
    path: string;
    status: number;
    request?: unknown;
    response?: unknown;
}

export interface ApiFixtures {
    recorded?: string;
    calls: ApiFixture[];
}

export function fixtureFetch(fixtures: ApiFixtures): typeof fetch {
    const answered = new Map<string, number>();
    return (async (input: RequestInfo | URL, init?: RequestInit) => {
        const address = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
        const url = new URL(address, 'http://fixtures.invalid');
        const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const wanted = `${method} ${url.pathname}${url.search}`;
        const recorded = fixtures.calls.filter((call) => `${call.method.toUpperCase()} ${call.path}` === wanted);
        if (recorded.length === 0) {
            throw new Error(`No fixture for ${wanted}. Make that call in the app, then save the fixtures from the dev panel again.`);
        }
        const turn = answered.get(wanted) ?? 0;
        answered.set(wanted, turn + 1);
        const call = recorded[Math.min(turn, recorded.length - 1)];
        const empty = call.response === undefined || call.status === 204;
        const text = typeof call.response === 'string';
        return new Response(empty ? null : text ? (call.response as string) : JSON.stringify(call.response), {
            status: call.status,
            headers: empty ? {} : { 'content-type': text ? 'text/plain' : 'application/json' }
        });
    }) as typeof fetch;
}
