import { ApiError, request, type RequestOptions } from './client.js';
import type { ActiveChange, Activity, Attachment, BoardStats, Comment, CommentInput, Greeting, Login, PasswordChange, Problem, ProfileInput, Registration, RoleChange, StatusChange, Task, TaskInput, User, UserRef, PublicConfig } from './types.js';

export const adminGetUsers = (options?: RequestOptions) => request<User[]>('GET', '/api/admin/users', { ...options, operation: 'admin.getUsers' });
export const adminPutUsersActive = (id: string | number, body: ActiveChange, options?: RequestOptions) => request<User>('PUT', `/api/admin/users/${encodeURIComponent(id)}/active`, { ...options, body, operation: 'admin.putUsersActive' });
export const adminPutUsersRole = (id: string | number, body: RoleChange, options?: RequestOptions) => request<User>('PUT', `/api/admin/users/${encodeURIComponent(id)}/role`, { ...options, body, operation: 'admin.putUsersRole' });

export const admin = {
    getUsers: adminGetUsers,
    putUsersActive: adminPutUsersActive,
    putUsersRole: adminPutUsersRole,
};

export const attachmentsGet = (id: string | number, options?: RequestOptions) => request<string>('GET', `/api/attachments/${encodeURIComponent(id)}`, { ...options, operation: 'attachments.get' });
export const attachmentsDelete = (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/attachments/${encodeURIComponent(id)}`, { ...options, operation: 'attachments.delete' });

export const attachments = {
    get: attachmentsGet,
    delete: attachmentsDelete,
};

export const greetingList = (query?: { name?: string }, options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, query, operation: 'greeting.list' });

export const greeting = {
    list: greetingList,
};

export const meList = (options?: RequestOptions) => request<User>('GET', '/api/me', { ...options, operation: 'me.list' });
export const meUpdate = (body: ProfileInput, options?: RequestOptions) => request<User>('PUT', '/api/me', { ...options, body, operation: 'me.update' });
export const mePutPassword = (body: PasswordChange, options?: RequestOptions) => request<void>('PUT', '/api/me/password', { ...options, body, operation: 'me.putPassword' });

export const me = {
    list: meList,
    update: meUpdate,
    putPassword: mePutPassword,
};

export const membersList = (options?: RequestOptions) => request<UserRef[]>('GET', '/api/members', { ...options, operation: 'members.list' });

export const members = {
    list: membersList,
};

export const sessionCreate = (body: Login, options?: RequestOptions) => request<User>('POST', '/api/session', { ...options, body, operation: 'session.create' });
export const sessionDelete = (options?: RequestOptions) => request<void>('DELETE', '/api/session', { ...options, operation: 'session.delete' });

export const session = {
    create: sessionCreate,
    delete: sessionDelete,
};

export const statsList = (options?: RequestOptions) => request<BoardStats>('GET', '/api/stats', { ...options, operation: 'stats.list' });

export const stats = {
    list: statsList,
};

export const tasksList = (query?: { search?: string; status?: string; label?: string; mine?: string; limit?: string; cursor?: string }, options?: RequestOptions) => request<{
    items: Task[];
    next?: string | null;
}>('GET', '/api/tasks', { ...options, query, operation: 'tasks.list' });
export const tasksCreate = (body: TaskInput, options?: RequestOptions) => request<Task>('POST', '/api/tasks', { ...options, body, operation: 'tasks.create' });
export const tasksGet = (id: string | number, options?: RequestOptions) => request<Task>('GET', `/api/tasks/${encodeURIComponent(id)}`, { ...options, operation: 'tasks.get' });
export const tasksUpdate = (id: string | number, body: TaskInput, options?: RequestOptions) => request<Task>('PUT', `/api/tasks/${encodeURIComponent(id)}`, { ...options, body, operation: 'tasks.update' });
export const tasksDelete = (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/tasks/${encodeURIComponent(id)}`, { ...options, operation: 'tasks.delete' });
export const tasksGetActivity = (id: string | number, options?: RequestOptions) => request<Activity[]>('GET', `/api/tasks/${encodeURIComponent(id)}/activity`, { ...options, operation: 'tasks.getActivity' });
export const tasksGetAttachments = (id: string | number, options?: RequestOptions) => request<Attachment[]>('GET', `/api/tasks/${encodeURIComponent(id)}/attachments`, { ...options, operation: 'tasks.getAttachments' });
/**
 * Uploads files to a task.
 *
 * Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted.
 */
export const tasksAttachments = (id: string | number, body: FormData, options?: RequestOptions) => request<Attachment[]>('POST', `/api/tasks/${encodeURIComponent(id)}/attachments`, { ...options, body, operation: 'tasks.attachments' });
export const tasksGetComments = (id: string | number, options?: RequestOptions) => request<Comment[]>('GET', `/api/tasks/${encodeURIComponent(id)}/comments`, { ...options, operation: 'tasks.getComments' });
export const tasksComments = (id: string | number, body: CommentInput, options?: RequestOptions) => request<Comment>('POST', `/api/tasks/${encodeURIComponent(id)}/comments`, { ...options, body, operation: 'tasks.comments' });
export const tasksStatus = (id: string | number, body: StatusChange, options?: RequestOptions) => request<Task>('POST', `/api/tasks/${encodeURIComponent(id)}/status`, { ...options, body, operation: 'tasks.status' });

export const tasks = {
    list: tasksList,
    create: tasksCreate,
    get: tasksGet,
    update: tasksUpdate,
    delete: tasksDelete,
    getActivity: tasksGetActivity,
    getAttachments: tasksGetAttachments,
    /**
     * Uploads files to a task.
     *
     * Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted.
     */
    attachments: tasksAttachments,
    getComments: tasksGetComments,
    comments: tasksComments,
    status: tasksStatus,
};

export const usersCreate = (body: Registration, options?: RequestOptions) => request<User>('POST', '/api/users', { ...options, body, operation: 'users.create' });

export const users = {
    create: usersCreate,
};

export interface ApiErrors {
    'admin.getUsers': Problem;
    'admin.putUsersActive': Problem;
    'admin.putUsersRole': Problem;
    'attachments.get': Problem;
    'attachments.delete': Problem;
    'greeting.list': Problem;
    'me.list': Problem;
    'me.update': Problem;
    'me.putPassword': Problem;
    'members.list': Problem;
    'session.create': Problem;
    'session.delete': Problem;
    'stats.list': Problem;
    'tasks.list': Problem;
    'tasks.create': Problem;
    'tasks.get': Problem;
    'tasks.update': Problem;
    'tasks.delete': Problem;
    'tasks.getActivity': Problem;
    'tasks.getAttachments': Problem;
    'tasks.attachments': Problem;
    'tasks.getComments': Problem;
    'tasks.comments': Problem;
    'tasks.status': Problem;
    'users.create': Problem;
}

const errorStatuses: Record<string, number[]> = {
    'admin.getUsers': [401, 403],
    'admin.putUsersActive': [401, 403, 404, 409],
    'admin.putUsersRole': [401, 403, 404, 409],
    'attachments.get': [401, 403, 404],
    'attachments.delete': [401, 403, 404],
    'greeting.list': [401, 403],
    'me.list': [401, 403],
    'me.update': [401, 403, 404],
    'me.putPassword': [401, 403],
    'members.list': [401, 403],
    'session.create': [401, 403],
    'session.delete': [401, 403],
    'stats.list': [401, 403],
    'tasks.list': [401, 403],
    'tasks.create': [401, 403],
    'tasks.get': [401, 403, 404],
    'tasks.update': [401, 403, 404],
    'tasks.delete': [401, 403, 404],
    'tasks.getActivity': [401, 403, 404],
    'tasks.getAttachments': [401, 403, 404],
    'tasks.attachments': [401, 403, 404, 422],
    'tasks.getComments': [401, 403, 404],
    'tasks.comments': [401, 403, 404],
    'tasks.status': [401, 403, 404],
    'users.create': [401, 403, 409],
};

export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

let publicConfig: Promise<PublicConfig> | undefined;

export function readPublicConfig(): PublicConfig | undefined {
    if (typeof document === 'undefined') return undefined;
    const element = document.getElementById('ktor-svelte-config');
    if (!element?.textContent) return undefined;
    return JSON.parse(element.textContent) as PublicConfig;
}

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    const inline = readPublicConfig();
    if (inline) return Promise.resolve(inline);
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

export const api = { admin, attachments, greeting, me, members, session, stats, tasks, users };

function bindFetch<T extends object>(target: T, fetch: typeof globalThis.fetch): T {
    const bound: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(target)) {
        if (typeof value !== 'function') {
            bound[key] = bindFetch(value as object, fetch);
            continue;
        }
        const arity = value.length;
        bound[key] = (...args: unknown[]) => {
            const padded = args.slice(0, arity);
            padded.length = arity;
            padded[arity - 1] = { fetch, ...(padded[arity - 1] as RequestOptions | undefined) };
            return value(...padded);
        };
    }
    return bound as T;
}

export function apiWith(event: { fetch: typeof globalThis.fetch }): typeof api {
    return bindFetch(api, event.fetch);
}
