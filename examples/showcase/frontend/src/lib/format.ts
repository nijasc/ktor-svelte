import { IsoDateTime } from '#api';
import { getLocale } from '#i18n';

export function formatDateTime(value: IsoDateTime): string {
    return IsoDateTime.parse(value).toLocaleString(getLocale(), { dateStyle: 'medium', timeStyle: 'short' });
}

export function formatDate(value: string): string {
    return new Date(`${value}T00:00:00`).toLocaleDateString(getLocale(), { dateStyle: 'medium' });
}

export function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MiB`;
}
