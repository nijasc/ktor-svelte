import { goto } from '$app/navigation';
import { api, apiConfig, type User } from '#api';
import { routes } from '#routes';

const PUBLIC_PATHS = [routes.home(), routes.login(), routes.register(), routes.about()];

export const session = $state<{ user: User | null; ready: boolean }>({ user: null, ready: false });

export function isPublicPath(path: string): boolean {
    return PUBLIC_PATHS.includes(path.replace(/\/$/, '') || '/');
}

export function watchUnauthorized(): void {
    apiConfig.onUnauthorized = () => {
        session.user = null;
        if (!isPublicPath(location.pathname)) void goto(routes.login());
    };
}

export async function loadSession(): Promise<User | null> {
    try {
        session.user = await api.me.list({ silent: true });
    } catch {
        session.user = null;
    }
    session.ready = true;
    return session.user;
}

export async function signOut(): Promise<void> {
    await api.session.delete();
    session.user = null;
    await goto(routes.login());
}
