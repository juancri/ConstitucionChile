
// Dependencies
import { DateTime } from 'luxon';

// Constants
const LOCALE = 'es';
const DATE_FORMAT = `cccc d 'de' LLLL, y`;

export default class DateGenerator
{
	public static generate(): string
	{
		return DateTime.now()
			.setLocale(LOCALE)
			.toFormat(DATE_FORMAT);
	}
}
