
export interface Articulo
{
	numero: number;
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
