import { ApiError, request, codeMessages, errorCode, type RequestOptions } from './client.js';
import type { ActiveChange, Activity, Attachment, BoardStats, Comment, CommentInput, ErrorCode, FieldCheckAnswer, Greeting, Login, LucideIcon, PasswordChange, Priority, Problem, ProfileInput, PublicConfig, Registration, RoleChange, StatusChange, Task, TaskInput, User, UserRef } from './types.js';

/** @see showcase/Auth.kt */
export const adminGetUsers = (options?: RequestOptions) => request<User[]>('GET', '/api/admin/users', { ...options, operation: 'admin.getUsers' });
/** @see showcase/Auth.kt */
export const adminPutUsersActive = (id: string | number, body: ActiveChange, options?: RequestOptions) => request<User>('PUT', `/api/admin/users/${encodeURIComponent(id)}/active`, { ...options, body, operation: 'admin.putUsersActive' });
/** @see showcase/Auth.kt */
export const adminPutUsersRole = (id: string | number, body: RoleChange, options?: RequestOptions) => request<User>('PUT', `/api/admin/users/${encodeURIComponent(id)}/role`, { ...options, body, operation: 'admin.putUsersRole' });

export const admin = {
    /** @see showcase/Auth.kt */
    getUsers: adminGetUsers,
    /** @see showcase/Auth.kt */
    putUsersActive: adminPutUsersActive,
    /** @see showcase/Auth.kt */
    putUsersRole: adminPutUsersRole,
};

/** @see showcase/TaskRoutes.kt */
export const attachmentsGet = (id: string | number, options?: RequestOptions) => request<string>('GET', `/api/attachments/${encodeURIComponent(id)}`, { ...options, operation: 'attachments.get' });
/** @see showcase/TaskRoutes.kt */
export const attachmentsDelete = (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/attachments/${encodeURIComponent(id)}`, { ...options, operation: 'attachments.delete' });

export const attachments = {
    /** @see showcase/TaskRoutes.kt */
    get: attachmentsGet,
    /** @see showcase/TaskRoutes.kt */
    delete: attachmentsDelete,
};

/** @see showcase/Auth.kt */
export const checksGetEmail = (query: { value: string }, options?: RequestOptions) => request<FieldCheckAnswer>('GET', '/api/checks/email', { ...options, query, operation: 'checks.getEmail' });

export const checks = {
    /** @see showcase/Auth.kt */
    getEmail: checksGetEmail,
};

/** @see showcase/TaskRoutes.kt */
export const greetingList = (query?: { name?: string }, options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, query, operation: 'greeting.list' });

export const greeting = {
    /** @see showcase/TaskRoutes.kt */
    list: greetingList,
};

/** @see showcase/Auth.kt */
export const meList = (options?: RequestOptions) => request<User>('GET', '/api/me', { ...options, operation: 'me.list' });
/** @see showcase/Auth.kt */
export const meUpdate = (body: ProfileInput, options?: RequestOptions) => request<User>('PUT', '/api/me', { ...options, body, operation: 'me.update' });
/** @see showcase/Auth.kt */
export const mePutPassword = (body: PasswordChange, options?: RequestOptions) => request<void>('PUT', '/api/me/password', { ...options, body, operation: 'me.putPassword' });

export const me = {
    /** @see showcase/Auth.kt */
    list: meList,
    /** @see showcase/Auth.kt */
    update: meUpdate,
    /** @see showcase/Auth.kt */
    putPassword: mePutPassword,
};

/** @see showcase/TaskRoutes.kt */
export const membersList = (options?: RequestOptions) => request<UserRef[]>('GET', '/api/members', { ...options, operation: 'members.list' });

export const members = {
    /** @see showcase/TaskRoutes.kt */
    list: membersList,
};

/** @see showcase/Auth.kt */
export const sessionCreate = (body: Login, options?: RequestOptions) => request<User>('POST', '/api/session', { ...options, body, operation: 'session.create' });
/** @see showcase/Auth.kt */
export const sessionDelete = (options?: RequestOptions) => request<void>('DELETE', '/api/session', { ...options, operation: 'session.delete' });

export const session = {
    /** @see showcase/Auth.kt */
    create: sessionCreate,
    /** @see showcase/Auth.kt */
    delete: sessionDelete,
};

/** @see showcase/TaskRoutes.kt */
export const statsList = (options?: RequestOptions) => request<BoardStats>('GET', '/api/stats', { ...options, operation: 'stats.list' });

export const stats = {
    /** @see showcase/TaskRoutes.kt */
    list: statsList,
};

/** @see showcase/TaskRoutes.kt */
export const tasksList = (query?: { search?: string; status?: string; label?: string; mine?: string; limit?: string; cursor?: string }, options?: RequestOptions) => request<{
    items: Task[];
    next?: string | null;
}>('GET', '/api/tasks', { ...options, query, operation: 'tasks.list' });
/** @see showcase/TaskRoutes.kt */
export const tasksCreate = (body: TaskInput, options?: RequestOptions) => request<Task>('POST', '/api/tasks', { ...options, body, operation: 'tasks.create' });
/** @see showcase/TaskRoutes.kt */
export const tasksGet = (id: string | number, options?: RequestOptions) => request<Task>('GET', `/api/tasks/${encodeURIComponent(id)}`, { ...options, operation: 'tasks.get' });
/** @see showcase/TaskRoutes.kt */
export const tasksUpdate = (id: string | number, body: TaskInput, options?: RequestOptions) => request<Task>('PUT', `/api/tasks/${encodeURIComponent(id)}`, { ...options, body, operation: 'tasks.update' });
/** @see showcase/TaskRoutes.kt */
export const tasksPatch = (id: string | number, body: {
    title?: string;
    description?: string;
    priority?: Priority;
    labels?: string[];
    icon?: LucideIcon;
    assigneeId?: number | null;
    dueOn?: string | null;
    version?: number | null;
}, options?: RequestOptions) => request<Task>('PATCH', `/api/tasks/${encodeURIComponent(id)}`, { ...options, body, operation: 'tasks.patch' });
/** @see showcase/TaskRoutes.kt */
export const tasksDelete = (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/tasks/${encodeURIComponent(id)}`, { ...options, operation: 'tasks.delete' });
/** @see showcase/TaskRoutes.kt */
export const tasksGetActivity = (id: string | number, options?: RequestOptions) => request<Activity[]>('GET', `/api/tasks/${encodeURIComponent(id)}/activity`, { ...options, operation: 'tasks.getActivity' });
/** @see showcase/TaskRoutes.kt */
export const tasksGetAttachments = (id: string | number, options?: RequestOptions) => request<Attachment[]>('GET', `/api/tasks/${encodeURIComponent(id)}/attachments`, { ...options, operation: 'tasks.getAttachments' });
/**
 * Uploads files to a task.
 *
 * Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted.
 *
 * @see showcase/TaskRoutes.kt
 */
export const tasksAttachments = (id: string | number, body: FormData, options?: RequestOptions) => request<Attachment[]>('POST', `/api/tasks/${encodeURIComponent(id)}/attachments`, { ...options, body, upload: { maxBytes: 5242880, types: ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'text/csv', 'application/zip'] }, operation: 'tasks.attachments' });
/** @see showcase/TaskRoutes.kt */
export const tasksGetComments = (id: string | number, options?: RequestOptions) => request<Comment[]>('GET', `/api/tasks/${encodeURIComponent(id)}/comments`, { ...options, operation: 'tasks.getComments' });
/** @see showcase/TaskRoutes.kt */
export const tasksComments = (id: string | number, body: CommentInput, options?: RequestOptions) => request<Comment>('POST', `/api/tasks/${encodeURIComponent(id)}/comments`, { ...options, body, operation: 'tasks.comments' });
/** @see showcase/TaskRoutes.kt */
export const tasksStatus = (id: string | number, body: StatusChange, options?: RequestOptions) => request<Task>('POST', `/api/tasks/${encodeURIComponent(id)}/status`, { ...options, body, operation: 'tasks.status' });

export const tasks = {
    /** @see showcase/TaskRoutes.kt */
    list: tasksList,
    /** @see showcase/TaskRoutes.kt */
    create: tasksCreate,
    /** @see showcase/TaskRoutes.kt */
    get: tasksGet,
    /** @see showcase/TaskRoutes.kt */
    update: tasksUpdate,
    /** @see showcase/TaskRoutes.kt */
    patch: tasksPatch,
    /** @see showcase/TaskRoutes.kt */
    delete: tasksDelete,
    /** @see showcase/TaskRoutes.kt */
    getActivity: tasksGetActivity,
    /** @see showcase/TaskRoutes.kt */
    getAttachments: tasksGetAttachments,
    /**
     * Uploads files to a task.
     *
     * Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted.
     *
     * @see showcase/TaskRoutes.kt
     */
    attachments: tasksAttachments,
    /** @see showcase/TaskRoutes.kt */
    getComments: tasksGetComments,
    /** @see showcase/TaskRoutes.kt */
    comments: tasksComments,
    /** @see showcase/TaskRoutes.kt */
    status: tasksStatus,
};

/** @see showcase/Auth.kt */
export const usersCreate = (body: Registration, options?: RequestOptions) => request<User>('POST', '/api/users', { ...options, body, operation: 'users.create' });

export const users = {
    /** @see showcase/Auth.kt */
    create: usersCreate,
};

export interface ApiErrors {
    'admin.getUsers': Problem;
    'admin.putUsersActive': Problem;
    'admin.putUsersRole': Problem;
    'attachments.get': Problem;
    'attachments.delete': Problem;
    'checks.getEmail': Problem;
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
    'tasks.patch': Problem;
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
    'admin.putUsersActive': [401, 403, 404],
    'admin.putUsersRole': [401, 403, 404],
    'attachments.get': [401, 403, 404],
    'attachments.delete': [401, 403, 404],
    'checks.getEmail': [401, 403],
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
    'tasks.patch': [401, 403, 404],
    'tasks.delete': [401, 403, 404],
    'tasks.getActivity': [401, 403, 404],
    'tasks.getAttachments': [401, 403, 404],
    'tasks.attachments': [401, 403, 404],
    'tasks.getComments': [401, 403, 404],
    'tasks.comments': [401, 403, 404],
    'tasks.status': [401, 403, 404],
    'users.create': [401, 403],
};

export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

export const uploadRules = {
    'tasks.attachments': { maxBytes: 5242880, types: ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'text/csv', 'application/zip'] },
} as const;

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

export const api = { admin, attachments, checks, greeting, me, members, session, stats, tasks, users };

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
