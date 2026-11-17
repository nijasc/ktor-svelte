const { maskFor, keptBefore, caretAfter } = await import(process.argv[2]);

type Mask = { show(clean: string): string; retype(typed: string): string; clean(typed: string): string; keeps(character: string): boolean };

function run(mask: Mask, typed: string[], shown: string[]) {
    return {
        retyped: typed.map((text) => mask.retype(text)),
        cleaned: typed.map((text) => mask.clean(text)),
        shown: shown.map((text) => mask.show(text))
    };
}

const results = {
    phone: run(maskFor('phone'), ['+49301234567', '0301234567', '+4 9 30-12(34)567', 'abc'], ['+49301234567', '0301234567']),
    iban: run(maskFor('iban'), ['de89370400440532013000', 'DE89 3704 0044 0532 0130 00', 'de89-3704'], ['DE89370400440532013000']),
    dateDe: run(maskFor('date', 'de-DE'), ['24', '2412', '24122026', '24.12.2026', '31022026', '1'], ['2026-12-24', 'nope']),
    dateUs: run(maskFor('date', 'en-US'), ['12242026'], ['2026-12-24']),
    moneyDe: run(maskFor('money', 'de-DE'), ['1234567', '1234567,8', '1234,', '1.234,56', '-0012,345', '', ','], ['1234567.8', '-12', 'x']),
    moneyEn: run(maskFor('money', 'en-US'), ['1234567.89', '1,234'], ['1234567.89']),
    caret: {
        keptBeforeCaret: keptBefore('DE89 3704', 6, maskFor('iban').keeps),
        caretAfterFour: caretAfter('DE89 3704 0044', 4, maskFor('iban').keeps),
        caretAfterFive: caretAfter('DE89 3704 0044', 5, maskFor('iban').keeps),
        caretAtStart: caretAfter('DE89', 0, maskFor('iban').keeps)
    }
};

console.log(JSON.stringify(results));
