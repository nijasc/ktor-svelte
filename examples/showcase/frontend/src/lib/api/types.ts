import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

declare const iso: unique symbol;

const pad = (value: number, width = 2) => String(value).padStart(width, '0');

export type IsoDate = string & { readonly [iso]: 'date' };

export const IsoDate = {
    parse: (value: IsoDate): Date => {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        date.setFullYear(year);
        return date;
    },
    from: (date: Date): IsoDate => `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` as IsoDate,
    today: (): IsoDate => IsoDate.from(new Date()),
};

export type IsoTime = string & { readonly [iso]: 'time' };

export const IsoTime = {
    from: (date: Date): IsoTime => `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` as IsoTime,
};

export type IsoDateTime = string & { readonly [iso]: 'date-time' };

export const IsoDateTime = {
    parse: (value: IsoDateTime): Date => new Date(value),
    from: (date: Date): IsoDateTime => date.toISOString() as IsoDateTime,
    fromLocal: (date: Date): IsoDateTime => `${IsoDate.from(date)}T${IsoTime.from(date)}` as IsoDateTime,
    now: (): IsoDateTime => IsoDateTime.from(new Date()),
};

export interface ActiveChange {
    active: boolean;
}

export const ActiveChange = {
    empty: (): ActiveChange => ({
        active: false,
    }),
};

export type Activity = TaskAttached | TaskCommented | TaskCreated;

export const Activity = {
    types: ['attached', 'commented', 'created'] as const,
    match: <R>(value: Activity, cases: { [K in Activity['type']]: (value: Extract<Activity, { type: K }>) => R }): R =>
        (cases[value['type']] as (value: Activity) => R)(value),
};

export interface Attachment {
    id: number;
    taskId: number;
    name: string;
    contentType: string;
    size: number;
    uploader: UserRef;
    createdAt: IsoDateTime;
}

export const Attachment = {
    empty: (): Attachment => ({
        id: 0,
        taskId: 0,
        name: '',
        contentType: '',
        size: 0,
        uploader: UserRef.empty(),
        createdAt: '' as IsoDateTime,
    }),
    bounds: {
        id: { required: true },
        taskId: { required: true },
        size: { required: true },
    },
};

export interface BoardStats {
    todo: number;
    doing: number;
    done: number;
    mine: number;
    labels: Record<string, number>;
}

export const BoardStats = {
    empty: (): BoardStats => ({
        todo: 0,
        doing: 0,
        done: 0,
        mine: 0,
        labels: {},
    }),
    bounds: {
        todo: { required: true },
        doing: { required: true },
        done: { required: true },
        mine: { required: true },
    },
};

export interface Comment {
    id: number;
    author: UserRef;
    body: string;
    createdAt: IsoDateTime;
}

export const Comment = {
    empty: (): Comment => ({
        id: 0,
        author: UserRef.empty(),
        body: '',
        createdAt: '' as IsoDateTime,
    }),
    bounds: {
        id: { required: true },
    },
};

export interface CommentInput {
    body: string;
}

export const CommentInput = {
    empty: (): CommentInput => ({
        body: '',
    }),
    bounds: {
        body: { required: true, minlength: 1, maxlength: 2000 },
    },
    validate: (value: CommentInput): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.body === 'string') {
            const length = [...value.body].length;
            if (length < 1) addError(errors, 'body', 'Must be at least 1 character.');
            if (length > 2000) addError(errors, 'body', 'Must be at most 2000 characters.');
        }
        return errors;
    },
};

export interface Greeting {
    message: string;
    locale: string;
    theme: string;
}

export const Greeting = {
    empty: (): Greeting => ({
        message: '',
        locale: '',
        theme: '',
    }),
};

export interface Login {
    email: string;
    password: string;
}

export const Login = {
    empty: (): Login => ({
        email: '',
        password: '',
    }),
};

export interface PasswordChange {
    current: string;
    next: string;
}

export const PasswordChange = {
    empty: (): PasswordChange => ({
        current: '',
        next: '',
    }),
    bounds: {
        next: { required: true, minlength: 10, maxlength: 200 },
    },
    validate: (value: PasswordChange): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.next === 'string') {
            const length = [...value.next].length;
            if (length < 10) addError(errors, 'next', 'Must be at least 10 characters.');
            if (length > 200) addError(errors, 'next', 'Must be at most 200 characters.');
        }
        return errors;
    },
};

export const Priority = {
    LOW: 'LOW',
    NORMAL: 'NORMAL',
    HIGH: 'HIGH',
} as const;

export type Priority = (typeof Priority)[keyof typeof Priority];

export interface Problem {
    message: string;
}

export const Problem = {
    empty: (): Problem => ({
        message: '',
    }),
};

export interface ProfileInput {
    name: string;
}

export const ProfileInput = {
    empty: (): ProfileInput => ({
        name: '',
    }),
    bounds: {
        name: { required: true, minlength: 1, maxlength: 80 },
    },
    validate: (value: ProfileInput): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.name === 'string') {
            const length = [...value.name].length;
            if (length < 1) addError(errors, 'name', 'Must be at least 1 character.');
            if (length > 80) addError(errors, 'name', 'Must be at most 80 characters.');
        }
        return errors;
    },
};

export interface Registration {
    email: string;
    name: string;
    password: string;
}

export const Registration = {
    empty: (): Registration => ({
        email: '',
        name: '',
        password: '',
    }),
    bounds: {
        email: { maxlength: 190 },
        name: { required: true, minlength: 1, maxlength: 80 },
        password: { required: true, minlength: 10, maxlength: 200 },
    },
    validate: (value: Registration): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.email === 'string') {
            const length = [...value.email].length;
            if (length > 190) addError(errors, 'email', 'Must be at most 190 characters.');
        }
        if (typeof value.name === 'string') {
            const length = [...value.name].length;
            if (length < 1) addError(errors, 'name', 'Must be at least 1 character.');
            if (length > 80) addError(errors, 'name', 'Must be at most 80 characters.');
        }
        if (typeof value.password === 'string') {
            const length = [...value.password].length;
            if (length < 10) addError(errors, 'password', 'Must be at least 10 characters.');
            if (length > 200) addError(errors, 'password', 'Must be at most 200 characters.');
        }
        return errors;
    },
};

export const Role = {
    ADMIN: 'ADMIN',
    MEMBER: 'MEMBER',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export interface RoleChange {
    role: Role;
}

export const RoleChange = {
    empty: (): RoleChange => ({
        role: 'ADMIN',
    }),
};

export const Status = {
    TODO: 'TODO',
    DOING: 'DOING',
    DONE: 'DONE',
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export interface StatusChange {
    status: Status;
}

export const StatusChange = {
    empty: (): StatusChange => ({
        status: 'TODO',
    }),
};

export interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    labels: string[];
    icon: LucideIcon;
    assignee?: UserRef | null;
    creator: UserRef;
    dueOn?: string | null;
    createdAt: IsoDateTime;
    updatedAt: IsoDateTime;
    comments: number;
    attachments: number;
}

export const Task = {
    empty: (): Task => ({
        id: 0,
        title: '',
        description: '',
        status: 'TODO',
        priority: 'LOW',
        labels: [],
        icon: 'AArrowDown',
        assignee: null,
        creator: UserRef.empty(),
        dueOn: null,
        createdAt: '' as IsoDateTime,
        updatedAt: '' as IsoDateTime,
        comments: 0,
        attachments: 0,
    }),
    bounds: {
        id: { required: true },
        comments: { required: true },
        attachments: { required: true },
    },
};

export interface TaskAttached {
    type: 'attached';
    at: IsoDateTime;
    by: UserRef;
    fileName: string;
}

export const TaskAttached = {
    empty: (): TaskAttached => ({
        type: 'attached',
        at: '' as IsoDateTime,
        by: UserRef.empty(),
        fileName: '',
    }),
};

export interface TaskCommented {
    type: 'commented';
    at: IsoDateTime;
    by: UserRef;
    excerpt: string;
}

export const TaskCommented = {
    empty: (): TaskCommented => ({
        type: 'commented',
        at: '' as IsoDateTime,
        by: UserRef.empty(),
        excerpt: '',
    }),
};

export interface TaskCreated {
    type: 'created';
    at: IsoDateTime;
    by: UserRef;
}

export const TaskCreated = {
    empty: (): TaskCreated => ({
        type: 'created',
        at: '' as IsoDateTime,
        by: UserRef.empty(),
    }),
};

export interface TaskInput {
    title: string;
    description?: string;
    priority?: Priority;
    labels?: string[];
    icon?: LucideIcon;
    assigneeId?: number | null;
    dueOn?: string | null;
}

export const TaskInput = {
    empty: (): TaskInput => ({
        title: '',
        description: '',
        priority: 'LOW',
        labels: [],
        icon: 'AArrowDown',
        assigneeId: null,
        dueOn: null,
    }),
    bounds: {
        title: { required: true, minlength: 1, maxlength: 120 },
        description: { maxlength: 4000 },
    },
    validate: (value: TaskInput): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.title === 'string') {
            const length = [...value.title].length;
            if (length < 1) addError(errors, 'title', 'Must be at least 1 character.');
            if (length > 120) addError(errors, 'title', 'Must be at most 120 characters.');
        }
        if (typeof value.description === 'string') {
            const length = [...value.description].length;
            if (length > 4000) addError(errors, 'description', 'Must be at most 4000 characters.');
        }
        return errors;
    },
};

export interface User {
    id: number;
    email: string;
    name: string;
    role: Role;
    active: boolean;
    createdAt: IsoDateTime;
}

export const User = {
    empty: (): User => ({
        id: 0,
        email: '',
        name: '',
        role: 'ADMIN',
        active: false,
        createdAt: '' as IsoDateTime,
    }),
    bounds: {
        id: { required: true },
    },
};

export interface UserRef {
    id: number;
    name: string;
}

export const UserRef = {
    empty: (): UserRef => ({
        id: 0,
        name: '',
    }),
    bounds: {
        id: { required: true },
    },
};

export interface PublicConfig {
    appName: string;
    maxUploadBytes: number;
    registrationOpen: boolean;
}

export const PublicConfig = {
    empty: (): PublicConfig => ({
        appName: '',
        maxUploadBytes: 0,
        registrationOpen: false,
    }),
    bounds: {
        maxUploadBytes: { required: true },
    },
};

function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
