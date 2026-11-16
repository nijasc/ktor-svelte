import { Decimal, IsoDuration } from './quantities.ts';

const d = Decimal.from;
const tried = (run: () => unknown, label: string) => {
    try {
        return run();
    } catch {
        return label;
    }
};
const duration = (text: string) => text as IsoDuration;
const millis = (text: string) => {
    const value = IsoDuration.toMillis(duration(text));
    return Number.isNaN(value) ? null : value;
};

console.log(
    JSON.stringify({
        sums: [
            Decimal.add(d('0.1'), d('0.2')),
            Decimal.add(d('1234567890123456789.10'), d('0.01')),
            Decimal.add(d('0.50'), d('-1')),
            Decimal.add(d('9.5'), d('0.5')).replace(/\.0$/, ''),
            Decimal.add(d('1.25'), d('-1.25'))
        ],
        others: [Decimal.subtract(d('1'), d('0.75')), Decimal.subtract(d('0.5'), d('2')), Decimal.times(d('9.99'), 4), Decimal.times(d('1.25'), 0)],
        compared: [Decimal.compare(d('1.5'), d('1.50001')), Decimal.compare(d('2'), d('-3')), Decimal.compare(d('1.50'), d('1.5')), Decimal.compare(d('-0'), d('0'))],
        made: [
            d(' 12.50 '),
            d(7),
            d(-3.25),
            tried(() => d('1,5'), 'not a decimal'),
            tried(() => d('abc'), 'not a decimal'),
            tried(() => d(1e21), 'not a decimal'),
            tried(() => Decimal.times(d('1'), 0.5), 'whole numbers only')
        ],
        formatted: [Decimal.format(d('1234.50'), 'en-US'), Decimal.format(d('1234.50'), 'de-DE'), Decimal.format(d('12.5'), 'en-US')],
        millis: [millis('PT1H30M'), millis('PT0.5S'), millis('-PT1S'), millis('PT48H'), millis('P1DT2H3M4.005S'), millis('PT0S'), millis('soon')],
        durations: [
            IsoDuration.fromMillis(5_400_000),
            IsoDuration.fromMillis(500),
            IsoDuration.fromMillis(-1000),
            IsoDuration.fromMillis(172_800_000),
            IsoDuration.fromMillis(0),
            IsoDuration.fromMillis(65_000)
        ],
        durationSums: [IsoDuration.add(duration('PT1H30M'), duration('PT30M')), IsoDuration.add(duration('PT1S'), duration('-PT1S'))],
        clocks: [
            IsoDuration.format(duration('PT1H30M')),
            IsoDuration.format(duration('PT5.9S')),
            IsoDuration.format(duration('-PT1M1S')),
            IsoDuration.format(duration('P1DT2H2M3S'))
        ]
    })
);
