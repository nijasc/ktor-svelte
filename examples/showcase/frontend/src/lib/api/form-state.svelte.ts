import { tick, untrack } from 'svelte';
import { errorMessage, isValidationError, isVersionConflict, patchOf, type Patch, type RequestOptions } from './client.js';

export type FieldErrors = Record<string, string[]>;

export type FieldCheckRoute = (query: { value: string }, options?: RequestOptions) => Promise<{ message?: string | null }>;

export interface FieldChange {
    field: string;
    from: unknown;
    to: unknown;
}

export interface FormStateOptions<T> {
    validate?: (draft: T) => FieldErrors | null | undefined;
    resetOnSuccess?: boolean;
    checks?: Partial<Record<keyof T & string, FieldCheckRoute>>;
    checkDelay?: number;
    focusErrors?: boolean;
}

export interface FormState<T> {
    draft: T;
    readonly dirty: boolean;
    readonly changes: FieldChange[];
    changed(field: keyof T & string): boolean;
    readonly submitting: boolean;
    readonly checking: boolean;
    readonly errors: FieldErrors;
    readonly error: unknown;
    readonly message: string;
    readonly conflict: unknown;
    keepMine(): void;
    takeTheirs(next?: T): void;
    reset(next?: T): void;
    submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined>;
    submitChanges<R>(send: (changes: Patch<T>) => Promise<R>): Promise<R | undefined>;
    focusFirstError(): Promise<void>;
    setErrors(errors: FieldErrors): void;
}

export function formState<T extends object>(initial: T, options: FormStateOptions<T> = {}): FormState<T> {
    let saved = $state.raw($state.snapshot(initial) as T);
    let draft = $state($state.snapshot(initial) as T);
    let baseline = $state(JSON.stringify(initial));
    let submitting = $state(false);
    let errors = $state.raw<FieldErrors>({});
    let failure = $state.raw<unknown>(undefined);
    let checked = $state.raw<FieldErrors>({});
    let conflict = $state.raw<unknown>(undefined);
    let checking = $state(0);
    const dirty = $derived(JSON.stringify(draft) !== baseline);
    const changes = $derived.by(() => {
        const before = saved as Record<string, unknown>;
        const after = draft as Record<string, unknown>;
        const fields = [...new Set([...Object.keys(before), ...Object.keys(after)])];
        return fields
            .filter((name) => JSON.stringify(before[name] ?? null) !== JSON.stringify(after[name] ?? null))
            .map((name) => ({ field: name, from: before[name], to: $state.snapshot(after[name]) }));
    });
    const shown = $derived.by(() => {
        const merged: FieldErrors = { ...errors };
        for (const [name, messages] of Object.entries(checked)) merged[name] = [...(merged[name] ?? []), ...messages];
        return merged;
    });

    function textOf(holder: T, name: string): string {
        return String((holder as Record<string, unknown>)[name] ?? '');
    }

    function watch(name: string, ask: FieldCheckRoute) {
        $effect(() => {
            const value = textOf(draft, name);
            untrack(() => {
                if (!(name in checked)) return;
                const rest = { ...checked };
                delete rest[name];
                checked = rest;
            });
            if (value === '' || value === textOf(saved, name)) return;
            const controller = new AbortController();
            const timer = setTimeout(() => {
                checking += 1;
                ask({ value }, { signal: controller.signal, silent: true })
                    .then((answer) => {
                        if (!controller.signal.aborted && answer.message) checked = { ...checked, [name]: [answer.message] };
                    })
                    .catch(() => undefined)
                    .finally(() => {
                        checking -= 1;
                    });
            }, options.checkDelay ?? 300);
            return () => {
                clearTimeout(timer);
                controller.abort();
            };
        });
    }

    for (const [name, ask] of Object.entries(options.checks ?? {})) {
        if (ask) watch(name, ask as FieldCheckRoute);
    }

    async function focusFirstError() {
        if (typeof document === 'undefined') return;
        await tick();
        const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (!first) return;
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'center' });
    }

    function settle(value: T) {
        saved = $state.snapshot(value) as T;
        baseline = JSON.stringify(saved);
    }

    function reset(next?: T) {
        if (next !== undefined) settle(next);
        draft = $state.snapshot(saved) as T;
        errors = {};
        checked = {};
        failure = undefined;
        conflict = undefined;
    }

    function keepMine() {
        const theirs = conflict as { version?: unknown } | undefined;
        if (theirs === undefined) return;
        (draft as { version?: unknown }).version = theirs.version;
        conflict = undefined;
        failure = undefined;
    }

    function takeTheirs(next?: T) {
        if (conflict === undefined) return;
        reset(next ?? (conflict as T));
    }

    async function submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined> {
        if (submitting) return undefined;
        const sending = $state.snapshot(draft) as T;
        const invalid = options.validate?.(sending);
        failure = undefined;
        conflict = undefined;
        if (invalid && Object.keys(invalid).length > 0) {
            errors = invalid;
            if (options.focusErrors !== false) void focusFirstError();
            return undefined;
        }
        errors = {};
        if (Object.keys(checked).length > 0) return undefined;
        submitting = true;
        try {
            const result = await send(sending);
            if (options.resetOnSuccess) reset();
            else if (JSON.stringify(draft) === JSON.stringify(sending)) settle(sending);
            return result;
        } catch (error) {
            if (isValidationError(error)) {
                errors = error.body.fields ?? {};
                if (options.focusErrors !== false) void focusFirstError();
            } else {
                failure = error;
            }
            if (isVersionConflict(error)) conflict = error.body.current;
            return undefined;
        } finally {
            submitting = false;
        }
    }

    function submitChanges<R>(send: (changes: Patch<T>) => Promise<R>): Promise<R | undefined> {
        const before = saved;
        return submit((sending) => {
            const changes = patchOf(before, sending);
            if (Object.keys(changes).length === 0) return Promise.resolve(undefined as R);
            return send(changes);
        });
    }

    return {
        get draft() {
            return draft;
        },
        set draft(value: T) {
            draft = value;
        },
        get dirty() {
            return dirty;
        },
        get changes() {
            return changes;
        },
        changed(name: keyof T & string) {
            return changes.some((change) => change.field === name);
        },
        get submitting() {
            return submitting;
        },
        get checking() {
            return checking > 0;
        },
        get errors() {
            return shown;
        },
        get error() {
            return failure;
        },
        get message() {
            return failure === undefined ? '' : errorMessage(failure);
        },
        get conflict() {
            return conflict;
        },
        keepMine,
        takeTheirs,
        reset,
        submit,
        submitChanges,
        focusFirstError,
        setErrors(next: FieldErrors) {
            errors = next;
        }
    };
}

export interface FormWizardOptions<T> extends FormStateOptions<T> {
    steps: readonly (readonly (keyof T & string)[])[];
    keep?: string;
}

export interface FormWizard<T> extends FormState<T> {
    readonly step: number;
    readonly count: number;
    readonly first: boolean;
    readonly last: boolean;
    readonly reached: number;
    readonly fields: readonly (keyof T & string)[];
    next(): boolean;
    back(): void;
    goTo(step: number): void;
}

function topField(path: string): string {
    return path.split(/[.[]/)[0];
}

function storage(): Storage | undefined {
    try {
        return typeof sessionStorage === 'undefined' ? undefined : sessionStorage;
    } catch {
        return undefined;
    }
}

export function formWizard<T extends object>(initial: T, options: FormWizardOptions<T>): FormWizard<T> {
    if (options.steps.length === 0) throw new Error('formWizard needs at least one step.');
    const kept = options.keep ? storage()?.getItem(options.keep) : null;
    let restored: { step: number; reached: number; draft: T } | undefined;
    try {
        restored = kept ? JSON.parse(kept) : undefined;
    } catch {
        restored = undefined;
    }
    const form = formState<T>(initial, { ...options, focusErrors: options.focusErrors });
    if (restored?.draft) form.draft = restored.draft;
    const lastStep = options.steps.length - 1;
    let step = $state(Math.min(restored?.step ?? 0, lastStep));
    let reached = $state(Math.min(Math.max(restored?.reached ?? 0, restored?.step ?? 0), lastStep));

    $effect(() => {
        if (!options.keep) return;
        const snapshot = JSON.stringify({ step, reached, draft: $state.snapshot(form.draft) });
        try {
            storage()?.setItem(options.keep, snapshot);
        } catch {
            return;
        }
    });

    function stepOf(field: string): number {
        const index = options.steps.findIndex((fields) => (fields as readonly string[]).includes(topField(field)));
        return index === -1 ? lastStep : index;
    }

    function errorsOn(fields: readonly string[]): FieldErrors {
        const all = options.validate?.($state.snapshot(form.draft) as T) ?? {};
        return Object.fromEntries(Object.entries(all).filter(([path, messages]) => messages.length > 0 && fields.includes(topField(path))));
    }

    function next(): boolean {
        const found = errorsOn(options.steps[step] as readonly string[]);
        form.setErrors(found);
        if (Object.keys(found).length > 0) {
            if (options.focusErrors !== false) void form.focusFirstError();
            return false;
        }
        if (step < lastStep) {
            step += 1;
            reached = Math.max(reached, step);
        }
        return true;
    }

    function back() {
        if (step > 0) step -= 1;
    }

    function goTo(target: number) {
        if (target >= 0 && target <= reached) step = target;
    }

    async function submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined> {
        const result = await form.submit(send);
        const failed = Object.keys(form.errors);
        if (failed.length > 0) {
            step = Math.min(...failed.map(stepOf));
            if (options.focusErrors !== false) void form.focusFirstError();
        } else if (result !== undefined && options.keep) {
            storage()?.removeItem(options.keep);
        }
        return result;
    }

    function reset(next?: T) {
        form.reset(next);
        step = 0;
        reached = 0;
        if (options.keep) storage()?.removeItem(options.keep);
    }

    return {
        get draft() {
            return form.draft;
        },
        set draft(value: T) {
            form.draft = value;
        },
        get dirty() {
            return form.dirty;
        },
        get changes() {
            return form.changes;
        },
        changed: (name) => form.changed(name),
        get submitting() {
            return form.submitting;
        },
        get checking() {
            return form.checking;
        },
        get errors() {
            return form.errors;
        },
        get error() {
            return form.error;
        },
        get message() {
            return form.message;
        },
        get conflict() {
            return form.conflict;
        },
        keepMine: () => form.keepMine(),
        takeTheirs: (value) => form.takeTheirs(value),
        reset,
        submit,
        submitChanges: (send) => form.submitChanges(send),
        focusFirstError: () => form.focusFirstError(),
        setErrors: (errors) => form.setErrors(errors),
        get step() {
            return step;
        },
        get count() {
            return options.steps.length;
        },
        get first() {
            return step === 0;
        },
        get last() {
            return step === lastStep;
        },
        get reached() {
            return reached;
        },
        get fields() {
            return options.steps[step];
        },
        next,
        back,
        goTo
    };
}
