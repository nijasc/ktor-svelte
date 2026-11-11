export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
    fetch?: typeof fetch;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
    fetch?: typeof fetch;
    onUnauthorized?: (response: Response) => void;
}

export const apiConfig: ApiConfig = { baseUrl: '', headers: {} };

export class ApiError<E = unknown> extends Error {
    constructor(
        readonly status: number,
        readonly body: E,
        readonly url: string,
        readonly operation?: string
    ) {
        super(`Request to ${url} failed with status ${status}`);
        this.name = 'ApiError';
    }
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

interface InternalOptions extends RequestOptions {
    query?: Record<string, unknown>;
    body?: unknown;
    operation?: string;
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

function prepare(method: string, path: string, options: InternalOptions, accept: string) {
    const { query, body, operation, fetch: customFetch, headers, ...init } = options;
    const send = customFetch ?? apiConfig.fetch ?? fetch;
    const url = apiConfig.baseUrl + path + queryString(query);
    const merged = new Headers(apiConfig.headers);
    merged.set('Accept', accept);
    new Headers(headers).forEach((value, key) => merged.set(key, value));
    let payload: BodyInit | undefined;
    if (body !== undefined) {
        payload = isRawBody(body) ? body : JSON.stringify(body);
        if (!isRawBody(body) && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
    }
    return { url, operation, send: () => send(url, { ...init, method, headers: merged, body: payload }) };
}

async function checked(response: Response, url: string, operation: string | undefined): Promise<Response> {
    if (response.status === 401) apiConfig.onUnauthorized?.(response);
    if (!response.ok) throw new ApiError(response.status, await parseResponse(response), url, operation);
    return response;
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    const { url, operation, send } = prepare(method, path, options, 'application/json');
    const response = await checked(await send(), url, operation);
    return (await parseResponse(response)) as T;
}

function eventData<T>(data: string): T {
    try {
        return JSON.parse(data) as T;
    } catch {
        return data as T;
    }
}

export async function* stream<T>(method: string, path: string, options: InternalOptions = {}): AsyncGenerator<T, void, undefined> {
    const { url, operation, send } = prepare(method, path, options, 'text/event-stream');
    const response = await checked(await send(), url, operation);
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
