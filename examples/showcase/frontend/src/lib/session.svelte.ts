import { goto } from '$app/navigation';
import { api } from '#api';
import { routes } from '#routes';

export async function signOut(): Promise<void> {
    await api.session.delete();
    await goto(routes.login());
}
