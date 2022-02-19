---
title: "Constitución Política de Chile"
date: Borrador al {{{fecha}}}
geometry: margin=2cm
output: pdf_document
---

{{#each grupos}}

## {{this.titulo}}

{{#each this.articulos}}

{{{this.numeroOrdinal}}}: {{{this.texto}}}

{{/each}}

{{/each}}
