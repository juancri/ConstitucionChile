
// Local dependencies
import DateGenerator from "./DateGenerator";
import FileCrawler from "./FileCrawler";
import TemplateManager from "./TemplateManager";
import { TemplateData } from "./types";

// Constants
const grupos: [string, string][] = [
	['03-FormaDeEstado', 'Forma de Estado'],
	['06-SistemasDeJusticia', 'Sistemas de Justicia']
];

try
{
	// Get all data
	const data: TemplateData = {
		fecha: DateGenerator.generate(),
		fechaCorta: DateGenerator.generateShort(),
		grupos: grupos.flatMap(grupo => ({
			articulos: FileCrawler.getArticulosAprobados(grupo[0]),
			titulo: grupo[1]
		}))
	};

	// Write
	TemplateManager.generate(data);
}
catch (e)
{
	console.error(e);
}
