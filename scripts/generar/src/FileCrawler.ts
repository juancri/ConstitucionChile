
// Dependencies
import fs from 'fs';
import path from 'path';
import ArticuloFactory from './ArticuloFactory';

// Local
import { Articulo } from "./types";

// Constants
const BASE_DIR = path.join(__dirname, '../../..');
const APROBADOS = 'aprobados';

export default class FileCrawler
{
	public static getArticulosAprobados(dir: string): Articulo[]
	{
		// Check full path
		const fullDir = path.join(BASE_DIR, dir, APROBADOS);
		const stat = fs.statSync(fullDir);
		if (!stat.isDirectory)
			throw new Error(`Not a directory: ${fullDir}`);

		// Get files
		const files = fs.readdirSync(fullDir);
		return files.map(file => ArticuloFactory.create(fullDir, file));
	}
}
