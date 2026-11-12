# Blog sobre Tendencia Tecnológica Actual (React + Atomic Design)

Estructura de blog informativo construida en **React** (con Vite y React Router) sin base de datos, organizada bajo **Atomic Design** y alineada con las pautas de la actividad académica.

## Estructura de carpetas

```text
src/
├── components/
│   ├── atoms/       # Elementos básicos (Badge, Button, Heading, ImageSlot, WordCounterBadge...)
│   ├── molecules/   # Combinaciones de átomos (AuthorMeta, ContentBlock, FeatureCard, HeroBanner...)
│   ├── organisms/   # Secciones completas (Navbar, Footer, PostArticle, ApplicationsShowcase...)
│   └── templates/   # Layout general de páginas (MainLayout)
├── pages/           # Vistas del blog (Inicio, Entrada principal, Página 1, Página 2, Página 3)
├── data/
│   └── blogContent.js  # Archivo único para redactar tu investigación y personalizar el blog
└── styles/
    └── global.css
```

## Cómo completar tu tarea

1. Abre `src/data/blogContent.js` y reemplaza los textos entre corchetes `[...]` con tu investigación propia, nombre del estudiante, tema seleccionado, fuentes confiables e imágenes.
2. Verifica cada página desde el menú horizontal superior antes de tomar las capturas de pantalla para Moodle.

## Comandos disponibles

```bash
pnpm install
pnpm dev
pnpm build
```
