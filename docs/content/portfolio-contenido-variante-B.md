# Portfolio — contenido actualizado (variante B)

> **Para Claude Code:** este archivo reemplaza el **contenido** de la variante B (`?variant=B`) del portfolio. **No cambies el diseño ni el layout**: la estructura de identidad a la izquierda y contenido a la derecha se mantiene. Cambiá solo los textos, el orden y los datos que se indican abajo. Donde diga `TODO(Andrés)`, dejá un placeholder visible solo en desarrollo y no inventes el dato.

---

## 1. Columna de identidad (izquierda)

- **Nombre:** Andrés Medina
- **Rol:** Full Stack Developer
- **Tagline** (reemplaza "Ingeniero Industrial devenido en developer. Uso IA a diario, no solo la menciono."):
  > Construyo productos de punta a punta, del relevamiento con el cliente a producción.
- **Ubicación:** Tucumán, Argentina · remoto
- **Idiomas:** Español (nativo) · Inglés (B2)
- **Disponibilidad** (reemplaza "Selectivo — abierto a la oportunidad correcta"):
  > Disponible para roles Full Stack o Product Engineer
- **Links:** Email · LinkedIn · GitHub · Descargar CV
  - `Descargar CV` debe apuntar al **CV nuevo** (`TODO(Andrés)`: exportar el PDF del CV actualizado y reemplazar `/src/assets/CV_Andres_Medina_esp.pdf`).

---

## 2. Bio (arriba del contenido)

Reemplaza el párrafo actual:

> Full Stack Developer. Hoy mantengo dos productos en producción: **Chaskyapp**, un SaaS multi-tenant de pedidos por WhatsApp que usan dos marcas reales, y **Reforest**, el sistema de gestión de producción que un equipo de laboratorio forestal usa todos los días.
>
> Antes del software fui ingeniero de procesos en Grupo Arcor durante 9 años, liderando la mejora continua de la planta. Esa forma de trabajar la aplico al desarrollo: primero la especificación, las decisiones documentadas y los resultados medidos. Trabajo con Claude Code bajo Spec-Driven Development.

---

## 3. Mis trabajos — pestaña "Trabajo profesional"

Orden: primero los productos actuales, después los trabajos anteriores.

### Chaskyapp · SaaS multi-tenant · En producción
- **Subtítulo:** Pedidos por WhatsApp para comercios, con catálogo y panel de gestión
- **Descripción:**
  > Plataforma que construí y mantengo de punta a punta: catálogo mobile-first con carrito y recomendaciones, y un panel de administración de pedidos, stock, ventas y reportes. En producción con Market del Cevil (desde marzo de 2026) y Yo Heladerías (desde agosto de 2026).
- **Puntos destacados:**
  - Modelo de suscripción por módulos con feature flags independientes entre sí
  - Una PWA instalable por tienda, con manifest dinámico
  - Guard de autorización único para las rutas de administración
  - 13+ decisiones de arquitectura documentadas en ADRs
  - Flujo con agentes: glosario de dominio, issues listos para el agente y verificación contra la base real en cada cambio de esquema
- **Stack:** Next.js 15 · React 19 · TypeScript · Supabase · Zustand · TanStack Query · Tailwind · Zod
- **Links:** `TODO(Andrés)`: ¿se pueden mostrar las URLs públicas de las tiendas? Si no, capturas.

### Reforest · Sistema de gestión · En producción
- **Subtítulo:** Gestión de producción y laboratorio para una empresa forestal
- **Descripción:**
  > Soy el único desarrollador del sistema que usan a diario 10 personas, entre operarios de laboratorio y mandos medios, en una empresa que opera en Argentina y países limítrofes. Cubre trazabilidad de material genético, ensayos de laboratorio, consumo de stock, recetas y planificación de proyectos de reforestación.
- **Puntos destacados:**
  - Control de acceso con 4 roles, verificado en el servidor antes de cada mutación y respaldado por Row Level Security
  - 48+ migraciones SQL versionadas
  - Relevamiento, análisis de negocio y manual funcional para el cliente
- **Stack:** Next.js · React 19 · Supabase · shadcn/ui · TanStack Table · Zod
- **Links:** sistema privado del cliente. `TODO(Andrés)`: capturas anonimizadas, con permiso del cliente.

### Rapitrago · App mobile + backend · En desarrollo
- **Subtítulo:** Plataforma de delivery de bebidas (cliente: Cumbre-tech)
- **Descripción:**
  > Trabajo en la app para clientes (React Native / Expo) y en el panel de administración y backend (Laravel).
- **Stack:** React Native · Expo · Expo Router · Zustand · Laravel 11 · PHP

### Trabajos anteriores (2022–2023)
Reemplazar "Descripción pendiente":
- **CABSA:** Sitio progresivo con blog, maquetado desde Figma. Next.js · TypeScript.
- **Kurve:** Sitio institucional completo, responsive, desde diseño en Figma. Next.js · TypeScript.
- **Coolco:** Landing con rutas para venta de tickets y NFTs. Next.js · TypeScript · CSS Modules.

---

## 4. Pestañas "Labs" y "Proyectos personales"

- **Quitar** las dos pestañas, o dejarlas fuera de la navegación principal. Hoy muestran ejercicios de freeCodeCamp, el PI de Henry, un memotest, un ta-te-ti, un sudoku y una to-do app, y eso le da una señal junior al reclutador.
- Si más adelante hay un proyecto open source actual (por ejemplo, skills o un template de SDD), va en una pestaña **"Open source"**.

---

## 5. Experiencia

Orden de lo más reciente a lo más antiguo, **con Arcor al final**:

1. **Freelance Full Stack Developer** — Independiente · ene. 2023 — actualidad
   Chaskyapp, Reforest, Rapitrago y trabajos anteriores (ver "Mis trabajos").
2. **Docente Desarrollador Fullstack JavaScript** — Desafío Latam · abr. 2024 — actualidad
   4 generaciones, ~240 estudiantes de toda LATAM (entre 30 y 120 por generación). HTML, CSS, JavaScript, React, Node, Express y PostgreSQL. Di la masterclass "Micro diseño para desarrolladores web".
3. **Contractor** — Plug-Zone · nov. 2023 — ene. 2026
   Empecé en el frontend de una app de logística y facturación integrada con SAP, y amplié el rol por iniciativa propia a backend, arquitectura y DevOps. Me formé como implementador IAM (NetIQ Identity Manager).
4. **Fullstack Developer** — Virtual Remote Partner · sep. 2023 — dic. 2023
5. **Fullstack Developer** — Aythen · sep. 2023 — nov. 2023
6. **Frontend Developer & Mentor técnico** — DIUM · jul. 2022 — sep. 2023
   Lideré la adopción de Next.js, Tailwind y Storybook.
7. **Fullstack Developer** — Totono (GetDeli) · sep. 2022 — abr. 2023
8. **Process Engineer** — Grupo Arcor · may. 2013 — may. 2022 · 9 años
   - Referente de mejora continua de la planta (pilar de mejora enfocada, TPM): coordiné todos los equipos de mejora y lideré equipos de ~10 personas.
   - Subí la eficiencia de una línea de producción del 88% al 93%.
   - Puse en marcha una línea completa trasladada desde otra planta y la dejé funcionando al 80% de eficiencia.
   - Implementé el sistema de evaluación de desempeño para ~300 personas del pilar de producción.

**Quitar** "Henry Bootcamp" de Experiencia: es formación, no trabajo.

---

## 6. Tecnologías

- **Frontend:** TypeScript · JavaScript · React · Next.js · Tailwind · shadcn/ui · Zustand · TanStack Query · Zod
- **Mobile:** React Native · Expo
- **Backend y datos:** Node.js · Express · Supabase · PostgreSQL · Prisma · Laravel
- **Desarrollo con IA:** Claude Code · Spec-Driven Development · Agent Skills · MCP

---

## 7. Credenciales

Anthropic Academy · 2026 (son 4, hoy aparecen 3):
- Claude Code in Action
- Building with the Claude API
- Introduction to Model Context Protocol ← **falta**
- Introduction to Agent Skills

`TODO(Andrés)`: URLs de verificación de cada certificado. Hoy los links apuntan a `#`.

---

## 8. Recomendaciones

Mantener las actuales hasta tener nuevas. `TODO(Andrés)`: pedir una o dos recomendaciones recientes (Satori, Market del Cevil, Desafío Latam o Plug-Zone) y ponerlas primero.
