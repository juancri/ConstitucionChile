---
title: "Constitución Política de Chile"
date: Borrador al {{{fecha}}}
geometry: margin=2cm
output: pdf_document
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \usepackage{xcolor}
    \definecolor{NavyBlue}{rgb}{0,0,0.5}
    \usepackage{hyperref}
    \hypersetup{
        colorlinks=true,
        linkcolor=NavyBlue,
        filecolor=blue,
        citecolor = black,
        urlcolor=NavyBlue,
    }
    \fancyhead[CO,CE]{Constitución Política de Chile - Borrador {{{fechaCorta}}} }
    \fancyfoot[CO,CE]{ \href{https://github.com/juancri/ConstitucionChile}{github.com/juancri/ConstitucionChile} }
    \fancyfoot[LE,RO]{\thepage}
---

{{#each grupos}}

\newpage
## {{this.titulo}}

{{#each this.articulos}}

{{{this.numeroOrdinal}}}: {{{this.texto}}}

{{/each}}

{{/each}}
