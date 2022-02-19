
export interface Articulo
{
	numero: number;
	numeroOrdinal: string;
	texto: string;
}

export interface GrupoArticulos
{
	titulo: string;
	articulos: Articulo[];
}

export interface TemplateData
{
	fecha: string,
	grupos: GrupoArticulos[]
}
