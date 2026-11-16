export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

const DURATION = /^(-)?P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/;

const two = (value: number) => String(value).padStart(2, '0');

export const IsoDuration = {
    toMillis: (value: IsoDuration): number => {
        const parts = DURATION.exec(value);
        if (!parts) return NaN;
        const [, sign, days, hours, minutes, seconds] = parts;
        const total =
            Number(days ?? 0) * 86_400_000 + Number(hours ?? 0) * 3_600_000 + Number(minutes ?? 0) * 60_000 + Math.round(Number(seconds ?? 0) * 1000);
        return sign ? -total : total;
    },
    fromMillis: (millis: number): IsoDuration => {
        const total = Math.abs(Math.round(millis));
        const hours = Math.floor(total / 3_600_000);
        const minutes = Math.floor((total % 3_600_000) / 60_000);
        const seconds = (total % 60_000) / 1000;
        const time = `${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}${seconds || total === 0 ? `${seconds}S` : ''}`;
        return `${millis < 0 && total > 0 ? '-' : ''}PT${time}` as IsoDuration;
    },
    add: (first: IsoDuration, second: IsoDuration): IsoDuration => IsoDuration.fromMillis(IsoDuration.toMillis(first) + IsoDuration.toMillis(second)),
    format: (value: IsoDuration): string => {
        const millis = IsoDuration.toMillis(value);
        const total = Math.floor(Math.abs(millis) / 1000);
        const clock = `${Math.floor(total / 3600)}:${two(Math.floor((total % 3600) / 60))}:${two(total % 60)}`;
        return millis < 0 && total > 0 ? `-${clock}` : clock;
    },
};

export type Decimal = string & { readonly [brand]: 'Decimal' };

const DECIMAL = /^-?\d+(?:\.\d+)?$/;

const scaleOf = (value: string) => (value.split('.')[1] ?? '').length;

function digitsOf(value: string, scale: number): bigint {
    const negative = value.startsWith('-');
    const [whole, fraction = ''] = (negative ? value.slice(1) : value).split('.');
    const digits = BigInt(whole + fraction.padEnd(scale, '0'));
    return negative ? -digits : digits;
}

function decimalOf(digits: bigint, scale: number): Decimal {
    const negative = digits < BigInt(0);
    const text = (negative ? -digits : digits).toString().padStart(scale + 1, '0');
    const fraction = scale > 0 ? `.${text.slice(text.length - scale)}` : '';
    return `${negative ? '-' : ''}${text.slice(0, text.length - scale)}${fraction}` as Decimal;
}

function combine(first: Decimal, second: Decimal, sign: 1 | -1): Decimal {
    const scale = Math.max(scaleOf(first), scaleOf(second));
    return decimalOf(digitsOf(first, scale) + BigInt(sign) * digitsOf(second, scale), scale);
}

export const Decimal = {
    from: (value: string | number): Decimal => {
        const text = typeof value === 'number' ? String(value) : value.trim();
        if (!DECIMAL.test(text)) throw new RangeError(`'${text}' is not a decimal number such as 12.50.`);
        return text as Decimal;
    },
    toNumber: (value: Decimal): number => Number(value),
    add: (first: Decimal, second: Decimal): Decimal => combine(first, second, 1),
    subtract: (first: Decimal, second: Decimal): Decimal => combine(first, second, -1),
    times: (value: Decimal, count: number): Decimal => {
        if (!Number.isInteger(count)) throw new RangeError(`Decimal.times takes a whole number, but got ${count}.`);
        const scale = scaleOf(value);
        return decimalOf(digitsOf(value, scale) * BigInt(count), scale);
    },
    compare: (first: Decimal, second: Decimal): number => {
        const scale = Math.max(scaleOf(first), scaleOf(second));
        const difference = digitsOf(first, scale) - digitsOf(second, scale);
        return difference < BigInt(0) ? -1 : difference > BigInt(0) ? 1 : 0;
    },
    format: (value: Decimal, locale?: string, options?: Intl.NumberFormatOptions): string =>
        new Intl.NumberFormat(locale, { minimumFractionDigits: scaleOf(value), ...options }).format(value as unknown as number),
};
