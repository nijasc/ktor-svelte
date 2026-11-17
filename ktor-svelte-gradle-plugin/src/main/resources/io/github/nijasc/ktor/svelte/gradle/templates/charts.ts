export const chartColors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    neutral: 'var(--color-neutral)',
    info: 'var(--color-info)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)'
} as const;

export type ChartColor = keyof typeof chartColors;

export type NumberKeys<T> = { [K in keyof T]-?: T[K] extends number | null | undefined ? K : never }[keyof T] & string;

export interface ChartSeries<T> {
    key: NumberKeys<T>;
    label: string;
    color: string;
}

const order = Object.keys(chartColors) as ChartColor[];

export function chartSeries<T>(lines: { [K in NumberKeys<T>]?: string | { label?: string; color?: ChartColor } }): ChartSeries<T>[] {
    return (Object.keys(lines) as NumberKeys<T>[]).map((key, index) => {
        const line = lines[key];
        const given = typeof line === 'string' ? { label: line } : (line ?? {});
        return { key, label: given.label ?? key, color: chartColors[given.color ?? order[index % order.length]] };
    });
}
