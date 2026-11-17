import { getLocale, type Locale } from './i18n.js';

interface LocaleFormats {
    decimal: string;
    group: string;
    minus: string;
    money: string;
    dateShort: string;
    dateMedium: string;
    dateLong: string;
    dateTimeShort: string;
    dateTimeMedium: string;
    time: string;
    monthsShort: string[];
    monthsLong: string[];
    amPm: string[];
    currencies: Record<string, [string, number]>;
}

const formats: Record<Locale, LocaleFormats> = {
{{data}}
};

export type DateStyle = 'short' | 'medium' | 'long';

const two = (value: number) => String(value).padStart(2, '0');

function rounded(value: number | string, decimals: number): { negative: boolean; digits: string } {
    if (typeof value === 'number') {
        const digits = Math.abs(value).toFixed(decimals);
        return { negative: value < 0 && /[1-9]/.test(digits), digits };
    }
    const text = value.trim();
    const negative = text.startsWith('-');
    const [whole, fraction = ''] = text.replace(/^[+-]/, '').split('.');
    if (!/^\d+$/.test(whole) || !/^\d*$/.test(fraction)) return { negative: false, digits: 'NaN' };
    const kept = (fraction + '0'.repeat(decimals)).slice(0, decimals);
    const up = fraction.length > decimals && fraction[decimals] >= '5';
    const all = (BigInt(whole + kept) + BigInt(up ? 1 : 0)).toString().padStart(decimals + 1, '0');
    const digits = decimals === 0 ? all : `${all.slice(0, all.length - decimals)}.${all.slice(all.length - decimals)}`;
    return { negative: negative && /[1-9]/.test(digits), digits };
}

function localized(value: number | string, decimals: number, data: LocaleFormats): { negative: boolean; text: string } {
    const { negative, digits } = rounded(value, decimals);
    const [whole, fraction] = digits.split('.');
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, data.group);
    return { negative, text: fraction === undefined ? grouped : grouped + data.decimal + fraction };
}

export function formatNumber(value: number | string, decimals = 0, locale: Locale = getLocale()): string {
    const data = formats[locale];
    const { negative, text } = localized(value, decimals, data);
    return (negative ? data.minus : '') + text;
}

export function formatMoney(amount: number | string, currency: string, locale: Locale = getLocale()): string {
    const data = formats[locale];
    const [symbol, decimals] = data.currencies[currency] ?? [currency, 2];
    const { negative, text } = localized(amount, decimals, data);
    return (negative ? data.minus : '') + data.money.replace('#,##0.00', text).replace('\u00a4', symbol);
}

interface Moment {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
}

function fill(pattern: string, at: Moment, data: LocaleFormats): string {
    return pattern.replace(/'([^']*)'|y+|M+|d+|H+|h+|m+|a/g, (token: string, quoted: string | undefined) => {
        if (quoted !== undefined) return quoted;
        const long = token.length >= 2;
        switch (token[0]) {
            case 'y':
                return token.length === 2 ? two(at.year % 100) : String(at.year);
            case 'M':
                if (token.length >= 4) return data.monthsLong[at.month - 1];
                return token.length === 3 ? data.monthsShort[at.month - 1] : long ? two(at.month) : String(at.month);
            case 'd':
                return long ? two(at.day) : String(at.day);
            case 'H':
                return long ? two(at.hour) : String(at.hour);
            case 'h':
                return long ? two(at.hour % 12 || 12) : String(at.hour % 12 || 12);
            case 'm':
                return two(at.minute);
            default:
                return data.amPm[at.hour < 12 ? 0 : 1];
        }
    });
}

function moment(value: string | Date): Moment {
    const plain = typeof value === 'string' ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(value) : null;
    if (plain) return { year: Number(plain[1]), month: Number(plain[2]), day: Number(plain[3]), hour: 0, minute: 0 };
    const date = typeof value === 'string' ? new Date(value) : value;
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hour: date.getHours(), minute: date.getMinutes() };
}

export function formatDate(value: string | Date, style: DateStyle = 'medium', locale: Locale = getLocale()): string {
    const data = formats[locale];
    const pattern = style === 'short' ? data.dateShort : style === 'long' ? data.dateLong : data.dateMedium;
    return fill(pattern, moment(value), data);
}

export function formatDateTime(value: string | Date, style: 'short' | 'medium' = 'medium', locale: Locale = getLocale()): string {
    const data = formats[locale];
    return fill(style === 'short' ? data.dateTimeShort : data.dateTimeMedium, moment(value), data);
}

export function formatTime(value: string | Date, locale: Locale = getLocale()): string {
    const data = formats[locale];
    return fill(data.time, moment(value), data);
}
