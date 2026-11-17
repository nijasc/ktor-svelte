import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.time.chrono.IsoChronology;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.FormatStyle;
import java.time.format.TextStyle;
import java.time.Month;
import java.util.ArrayList;
import java.util.Currency;
import java.util.List;
import java.util.Locale;
import java.util.StringJoiner;

public class FormatData {
    private static final String[] LOCALES = {
        "en", "en-US", "en-GB", "en-AU", "en-CA", "en-IE", "en-NZ", "en-IN", "de", "de-DE", "de-AT", "de-CH", "fr", "fr-FR", "fr-CH",
        "fr-CA", "fr-BE", "es", "es-ES", "es-MX", "es-AR", "it", "it-IT", "it-CH", "nl", "nl-NL", "nl-BE", "pt", "pt-BR", "pt-PT", "sv",
        "da", "nb", "no", "fi", "is", "pl", "cs", "sk", "hu", "ro", "bg", "hr", "sr", "sl", "lt", "lv", "et", "el", "tr", "ru", "uk",
        "he", "ar", "ja", "zh", "zh-CN", "zh-TW", "ko", "vi", "th", "id", "ms", "hi",
    };
    private static final String[] CURRENCIES = {
        "EUR", "USD", "GBP", "CHF", "JPY", "CNY", "CAD", "AUD", "NZD", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "TRY",
        "UAH", "RUB", "ILS", "AED", "SAR", "INR", "KRW", "BRL", "MXN", "ARS", "ZAR", "SGD", "HKD", "TWD", "THB", "IDR", "MYR", "VND",
        "ISK",
    };

    private static String quote(String text) {
        StringBuilder out = new StringBuilder("\"");
        for (char letter : text.toCharArray()) {
            if (letter == '"' || letter == '\\') out.append('\\').append(letter);
            else if (letter < 0x20 || letter > 0x7e) out.append(String.format("\\u%04x", (int) letter));
            else out.append(letter);
        }
        return out.append('"').toString();
    }

    private static String list(List<String> items) {
        StringJoiner joined = new StringJoiner(", ", "[", "]");
        items.forEach(item -> joined.add(quote(item)));
        return joined.toString();
    }

    private static String pattern(FormatStyle date, FormatStyle time, Locale locale) {
        return DateTimeFormatterBuilder
            .getLocalizedDateTimePattern(date, time, IsoChronology.INSTANCE, locale)
            .replace("dBh", "d ah")
            .replace("Bh", "ah")
            .replace(" G y", " y");
    }

    public static void main(String[] arguments) {
        StringJoiner locales = new StringJoiner(",\n", "{\n", "\n}\n");
        for (String tag : LOCALES) {
            Locale locale = Locale.forLanguageTag(tag);
            DecimalFormatSymbols symbols = DecimalFormatSymbols.getInstance(locale);
            DecimalFormat money = (DecimalFormat) NumberFormat.getCurrencyInstance(locale);
            List<String> shortMonths = new ArrayList<>();
            List<String> longMonths = new ArrayList<>();
            for (Month month : Month.values()) {
                shortMonths.add(month.getDisplayName(TextStyle.SHORT, locale));
                longMonths.add(month.getDisplayName(TextStyle.FULL, locale));
            }
            String[] amPm = new java.text.DateFormatSymbols(locale).getAmPmStrings();
            StringJoiner currencies = new StringJoiner(", ", "{", "}");
            for (String code : CURRENCIES) {
                Currency currency = Currency.getInstance(code);
                currencies.add(quote(code) + ": [" + quote(currency.getSymbol(locale)) + ", " + currency.getDefaultFractionDigits() + "]");
            }
            StringJoiner fields = new StringJoiner(",\n", "  " + quote(tag) + ": {\n", "\n  }");
            fields.add("    \"decimal\": " + quote(String.valueOf(symbols.getDecimalSeparator())));
            fields.add("    \"group\": " + quote(String.valueOf(symbols.getGroupingSeparator())));
            fields.add("    \"minus\": " + quote(String.valueOf(symbols.getMinusSign())));
            fields.add("    \"money\": " + quote(money.toPattern().split(";")[0]));
            fields.add("    \"dateShort\": " + quote(pattern(FormatStyle.SHORT, null, locale)));
            fields.add("    \"dateMedium\": " + quote(pattern(FormatStyle.MEDIUM, null, locale)));
            fields.add("    \"dateLong\": " + quote(pattern(FormatStyle.LONG, null, locale)));
            fields.add("    \"dateTimeShort\": " + quote(pattern(FormatStyle.SHORT, FormatStyle.SHORT, locale)));
            fields.add("    \"dateTimeMedium\": " + quote(pattern(FormatStyle.MEDIUM, FormatStyle.SHORT, locale)));
            fields.add("    \"time\": " + quote(pattern(null, FormatStyle.SHORT, locale)));
            fields.add("    \"monthsShort\": " + list(shortMonths));
            fields.add("    \"monthsLong\": " + list(longMonths));
            fields.add("    \"amPm\": " + list(List.of(amPm[0], amPm[1])));
            fields.add("    \"currencies\": " + currencies);
            locales.add(fields.toString());
        }
        System.out.print(locales);
    }
}
