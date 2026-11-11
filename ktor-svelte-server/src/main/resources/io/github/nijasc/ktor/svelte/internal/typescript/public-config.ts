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

