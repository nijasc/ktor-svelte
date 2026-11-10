import type { Reroute } from '@sveltejs/kit/hooks';

const locales: readonly string[] = {{locales}};

export const reroute: Reroute = ({ url }) => {
    const segments = url.pathname.split('/');
    if (!locales.includes(segments[1])) return url.pathname;
    return '/' + segments.slice(2).join('/');
};
