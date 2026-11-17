export interface Mask {
    show(clean: string): string;
    retype(typed: string): string;
    clean(typed: string): string;
    keeps(character: string): boolean;
    inputMode: 'text' | 'tel' | 'numeric' | 'decimal';
}

function onlyKept(text: string, keeps: (character: string) => boolean): string {
    return [...text].filter(keeps).join('');
}

const digit = (character: string) => character >= '0' && character <= '9';

function phoneClean(typed: string): string {
    const kept = onlyKept(typed, (character) => digit(character) || character === '+');
    return kept.startsWith('+') ? '+' + kept.slice(1).replaceAll('+', '') : kept.replaceAll('+', '');
}

function phoneShow(clean: string): string {
    const value = phoneClean(clean);
    if (!value.startsWith('+')) return value.replace(/(\d{4})(?=\d)/g, '$1 ');
    const digits = value.slice(1);
    const rest = digits.slice(2).replace(/(\d{3})(?=\d)/g, '$1 ');
    return '+' + digits.slice(0, 2) + (rest ? ' ' + rest : '');
}

const phone: Mask = {
    inputMode: 'tel',
    keeps: (character) => digit(character) || character === '+',
    clean: phoneClean,
    show: phoneShow,
    retype: (typed) => phoneShow(phoneClean(typed))
};

function ibanClean(typed: string): string {
    return onlyKept(typed, (character) => /[0-9A-Za-z]/.test(character))
        .toUpperCase()
        .slice(0, 34);
}

function ibanShow(clean: string): string {
    return ibanClean(clean).replace(/(.{4})(?=.)/g, '$1 ');
}

const iban: Mask = {
    inputMode: 'text',
    keeps: (character) => /[0-9A-Za-z]/.test(character),
    clean: ibanClean,
    show: ibanShow,
    retype: (typed) => ibanShow(ibanClean(typed))
};

type DatePart = 'day' | 'month' | 'year';

const DATE_WIDTHS: Record<DatePart, number> = { day: 2, month: 2, year: 4 };

function dateLayout(locale?: string): { order: DatePart[]; separator: string } {
    const parts = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).formatToParts(new Date(2001, 10, 22));
    const order = parts.map((part) => part.type).filter((type): type is DatePart => type === 'day' || type === 'month' || type === 'year');
    const separator = parts.find((part) => part.type === 'literal')?.value.trim() || '.';
    return { order, separator };
}

function date(locale?: string): Mask {
    const { order, separator } = dateLayout(locale);
    const group = (digits: string) => {
        const pieces: string[] = [];
        let at = 0;
        for (const part of order) {
            if (at >= digits.length) break;
            pieces.push(digits.slice(at, at + DATE_WIDTHS[part]));
            at += DATE_WIDTHS[part];
        }
        return pieces.join(separator);
    };
    const typedDigits = (typed: string) => onlyKept(typed, digit).slice(0, 8);
    return {
        inputMode: 'numeric',
        keeps: digit,
        retype: (typed) => group(typedDigits(typed)),
        show(clean) {
            const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(clean);
            if (!iso) return '';
            const values: Record<DatePart, string> = { year: iso[1], month: iso[2], day: iso[3] };
            return group(order.map((part) => values[part]).join(''));
        },
        clean(typed) {
            const digits = typedDigits(typed);
            if (digits.length < 8) return '';
            const values = {} as Record<DatePart, string>;
            let at = 0;
            for (const part of order) {
                values[part] = digits.slice(at, at + DATE_WIDTHS[part]);
                at += DATE_WIDTHS[part];
            }
            const month = Number(values.month);
            const day = Number(values.day);
            const days = new Date(Number(values.year), month, 0).getDate();
            if (month < 1 || month > 12 || day < 1 || day > days) return '';
            return `${values.year}-${values.month}-${values.day}`;
        }
    };
}

function money(locale?: string, fractionDigits = 2): Mask {
    const decimal = new Intl.NumberFormat(locale).formatToParts(1.5).find((part) => part.type === 'decimal')?.value ?? '.';
    const grouping = new Intl.NumberFormat(locale, { useGrouping: true, maximumFractionDigits: 0 });
    const keeps = (character: string) => digit(character) || (fractionDigits > 0 && character === decimal) || character === '-';
    const split = (typed: string) => {
        const kept = onlyKept(typed, keeps);
        const negative = kept.startsWith('-');
        const [whole, ...rest] = kept.replaceAll('-', '').split(decimal);
        return { negative, whole: whole.replace(/^0+(?=\d)/, ''), fraction: rest.join('').slice(0, fractionDigits), hasDecimal: rest.length > 0 };
    };
    const groupWhole = (whole: string) => (whole === '' ? '' : grouping.format(BigInt(whole)));
    return {
        inputMode: 'decimal',
        keeps,
        clean(typed) {
            const { negative, whole, fraction } = split(typed);
            if (whole === '' && fraction === '') return '';
            return (negative ? '-' : '') + (whole || '0') + (fraction === '' ? '' : '.' + fraction);
        },
        retype(typed) {
            const { negative, whole, fraction, hasDecimal } = split(typed);
            const sign = negative ? '-' : '';
            if (whole === '' && !hasDecimal) return sign;
            return sign + groupWhole(whole || (hasDecimal ? '0' : '')) + (hasDecimal ? decimal + fraction : '');
        },
        show(clean) {
            const plain = /^-?\d+(\.\d+)?$/.exec(clean.trim());
            if (!plain) return '';
            const negative = clean.trim().startsWith('-');
            const [whole, fraction] = clean.trim().replace('-', '').split('.');
            return (negative ? '-' : '') + groupWhole(whole) + (fraction === undefined ? '' : decimal + fraction);
        }
    };
}

export type MaskName = 'phone' | 'iban' | 'date' | 'money';

export function numberMask(locale?: string, fractionDigits = 2): Mask {
    return money(locale, Math.max(0, Math.floor(fractionDigits)));
}

export function maskFor(mask: MaskName | Mask, locale?: string): Mask {
    if (typeof mask !== 'string') return mask;
    if (mask === 'date') return date(locale);
    if (mask === 'money') return money(locale);
    return mask === 'phone' ? phone : iban;
}

export const masks = { phone, iban, date, money };

export function keptBefore(text: string, caret: number, keeps: (character: string) => boolean): number {
    return onlyKept(text.slice(0, caret), keeps).length;
}

export function caretAfter(shown: string, kept: number, keeps: (character: string) => boolean): number {
    if (kept === 0) return 0;
    let seen = 0;
    for (let index = 0; index < shown.length; index++) {
        if (keeps(shown[index])) seen++;
        if (seen === kept) return index + 1;
    }
    return shown.length;
}
