let publicConfig: Promise<PublicConfig> | undefined;

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

