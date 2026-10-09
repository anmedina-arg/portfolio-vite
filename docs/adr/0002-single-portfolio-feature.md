# El rediseño colapsa el sitio a una sola feature (`src/portfolio/`)

El ADR 0001 proponía una estructura por secciones (`sections/<x>/`, `shared/`, `data/`) para el sitio original, que tenía siete secciones con componentes propios. Al elegir la Variante B y promoverla a home (2026-10-05) esas secciones dejaron de existir como piezas separadas: el sitio es una sola página con un componente de página, un contenido bilingüe y tres hooks.

Por eso no se creó `sections/` ni `shared/`. Todo vive en `src/portfolio/` (`content/`, `data/`, `hooks/`, la página y sus tokens). Se mantiene la idea central del ADR 0001 — colocar junto lo que cambia junto, y Storybook fuera del proyecto — pero la estructura objetivo del 0001 queda reemplazada por esta.

Consecuencias:

- Se eliminó el sitio viejo completo (secciones, componentes, `mockData`, estilos globales) y las dependencias que solo usaba él (Formik, Yup, EmailJS, Swiper). El formulario de contacto no existe en el rediseño: el contacto es el email visible (mailto) más LinkedIn y GitHub.
- Los estilos globales viejos (`user-select: none`, scrollbars ocultos, scroll suave incondicional, fuentes Poppins/Oswald) no se migraron; ver `src/styles/reset.css`.
- Si el sitio vuelve a crecer (varias páginas, blog), este ADR se revisa: ahí sí conviene volver a una estructura por feature.
