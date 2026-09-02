# Arquitectura de carpetas colocada por feature/sección

La auditoría previa a esta decisión encontró que `src/components/` y `src/sections/` están agrupados por tipo, pero de forma inconsistente: piezas específicas de una sección (`myWork/portfolio`, `myWork/labs`) viven separadas de la sección que las usa (`sections/portfolio`), hay tres componentes de título casi duplicados repartidos en carpetas distintas (`MySubtitle`, `myTitle`, `sectionTitle`), y `src/types/`, `src/utils/`, `src/constants/` existen vacías.

Se consideraron tres opciones: (a) colocar por feature/dominio — cada sección de contenido es una carpeta con sus propios componentes, hooks, tipos y estilos, y solo lo verdaderamente compartido entre secciones vive en `src/shared/`; (b) atomic design (atoms/molecules/organisms/templates/pages); (c) mantener el esquema type-based actual pero prolijo (sin duplicados, sin carpetas vacías, naming consistente).

Se eligió (a). El problema real detectado no es "type-based vs feature-based" en abstracto — es que piezas de una sección ya viven divorciadas de ella. Colocar por feature resuelve eso de raíz en vez de parchear el esquema actual, y evita la sobre-categorización de atomic design (cinco niveles) para un sitio de este tamaño.

## Detalle de la forma objetivo

- **`src/shared/`**: lo verdaderamente compartido entre secciones (Button, Nav, layout primitives, hooks genéricos como tema/scroll-spy). Se prefirió sobre "common" (se confunde con utils genéricos) y "lib" (sugiere código de terceros).
- **`src/data/`** (reemplaza `src/mockData/`): varios archivos ahí son config real, no mocks. Cada dato pasa a vivir junto a la sección que lo consume (ej. `projects.ts` dentro de `sections/portfolio/`); solo lo genuinamente cross-sección (`navItems.tsx`, `technologies.tsx`) queda en `src/shared/data/`.
- **Storybook se elimina del proyecto** (config, devDependencies, `src/stories/`), no se migra co-ubicado. Fue un ejercicio de aprendizaje puntual, no aporta valor mantenerlo.
