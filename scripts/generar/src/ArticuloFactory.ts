
// Dependencies
import fs from 'fs';
import path from 'path';

// Local
import { Articulo } from './types';

// Constants
const NUMERO_REGEX = /^\d+/;

export default class ArticuloFactory
{
	public static create(dir: string, file: string): Articulo
	{
		return {
			numero: ArticuloFactory.getNumeroArticulo(file),
			texto: ArticuloFactory.getTextoArticulo(dir, file)
		};
	}

	private static getNumeroArticulo(filename: string): number
	{
		const result = NUMERO_REGEX.exec(filename);
		if (!result)
			throw new Error(`The filename does not contain a numero: ${filename}`);
		const texto = result[0] as string;
		return parseInt(texto);
	}

	private static getTextoArticulo(directory: string, filename: string): string
	{
		const fullPath = path.join(directory, filename);
		const contents = fs.readFileSync(fullPath);
		return contents.toString();
	}
}
