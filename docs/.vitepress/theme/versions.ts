import { onMounted, ref } from 'vue';
import { useData } from 'vitepress';

declare const __DOCS_VERSION__: string;
declare const __DOCS_SITE_ROOT__: string;

export interface VersionList {
    latest: string | null;
    versions: string[];
    main?: boolean;
}

export const currentVersion = __DOCS_VERSION__;
export const siteRoot = __DOCS_SITE_ROOT__;

export function baseFor(version: string, latest: string | null): string {
    if (version === 'main') return `${siteRoot}main/`;
    return version === latest ? siteRoot : `${siteRoot}v${version}/`;
}

export function useVersions() {
    const { site } = useData();
    const list = ref<VersionList | null>(null);

    onMounted(async () => {
        try {
            const response = await fetch(`${siteRoot}versions.json`, { cache: 'no-cache' });
            if (response.ok) list.value = (await response.json()) as VersionList;
        } catch {
            list.value = null;
        }
    });

    function pageIn(base: string): string {
        const path = window.location.pathname;
        const current = site.value.base;
        const relative = path.startsWith(current) ? path.slice(current.length) : '';
        return base + relative + window.location.hash;
    }

    return { list, pageIn };
}
