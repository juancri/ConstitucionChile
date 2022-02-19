
// Dependencies
import { DateTime } from 'luxon';

// Constants
const LOCALE = 'es';
const DATE_FORMAT = `cccc d 'de' LLLL, y`;
const SHORT_DATE_FORMAT = 'dd/MM/yyyy';

export default class DateGenerator
{
	public static generate(): string
	{
		return DateTime.now()
			.setLocale(LOCALE)
			.toFormat(DATE_FORMAT);
	}

	public static generateShort(): string
	{
		return DateTime.now()
			.toFormat(SHORT_DATE_FORMAT);
	}
}
