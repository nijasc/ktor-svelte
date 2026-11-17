import { goto } from '$app/navigation';
import { api, apiConfig } from '#api';
import { routes } from '#routes';

const PUBLIC_PATHS = [routes.home(), routes.login(), routes.register(), routes.about()];

export function isPublicPath(path: string): boolean {
    return PUBLIC_PATHS.includes(path.replace(/\/$/, '') || '/');
}

export function watchUnauthorized(): void {
    apiConfig.onUnauthorized = () => {
        if (!isPublicPath(location.pathname)) void goto(routes.login());
    };
}

export async function signOut(): Promise<void> {
    await api.session.delete();
    await goto(routes.login());
}
