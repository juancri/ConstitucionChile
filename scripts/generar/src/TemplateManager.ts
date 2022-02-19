
// Dependencies
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { TemplateData } from './types';

// Constants
const TEMPLATE_PATH = path.join(__dirname, '../templates/constitucion.md');
const TEMPLATE_STRING = fs.readFileSync(TEMPLATE_PATH).toString();
const TEMPLATE = Handlebars.compile(TEMPLATE_STRING);
const OUTPUT_PATH = path.join(__dirname, '../output/constitucion.md');

console.log();

export default class TemplateManager
{
	public static generate(data: TemplateData): void
	{
		const output = TEMPLATE(data);
		fs.writeFileSync(OUTPUT_PATH, output);
	}
}
