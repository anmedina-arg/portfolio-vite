# Portfolio

Sitio personal de Andrés Medina: se usa tanto para que recruiters evalúen un rol senior remoto como para que clientes evalúen contratarlo como freelance/consultor. No es un blog ni un producto — es una pieza de comunicación curada sobre su trayectoria y su trabajo.

## Language

**Audiencia**:
Los dos perfiles de visitante que el sitio busca convencer: recruiters evaluando un rol remoto Full Stack / Product Engineer (primarios), y clientes evaluando contratar freelance/consultoría (secundarios). Cuando una decisión tiene que favorecer a uno, favorece al recruiter (cambio confirmado 2026-09-29; antes pesaban igual).
_Avoid_: "usuarios", "visitantes" (demasiado genérico, no distingue los dos perfiles)

**Posicionamiento**:
El mensaje central que el sitio comunica sobre Andrés: Full Stack que construye productos de punta a punta y hoy mantiene productos en producción con usuarios reales, con la disciplina de ingeniería de procesos de Arcor como diferencial. Disponible activamente para roles Full Stack o Product Engineer, y lo dice claramente (cambio confirmado 2026-09-29; antes era "selectivo, sin transmitir disponibilidad inmediata").
_Avoid_: "tagline" (el tagline es la frase puntual que expresa el posicionamiento en el hero; el posicionamiento es el concepto más amplio que gobierna todo el copy)

**Proyecto destacado**:
Un subconjunto curado de proyectos que se resalta como los más representativos del trabajo de Andrés, distinto del listado completo. Patrón adoptado de la referencia estebanburgos.com.ar.
_Avoid_: mezclar destacados y no-destacados en una sola lista sin curaduría

**Tono**:
La voz del copy del sitio: técnica pero casual, en primera persona, sin jerga corporativa vacía. Adoptado de la referencia estebanburgos.com.ar.
_Avoid_: tono estrictamente formal/corporativo

### Secciones

**Hero**:
El inicio de la columna de contenido: el nombre a escala grande, la línea de rol, el tagline, la disponibilidad y una ilustración de línea (el panel "En producción hoy" se retiró el 2026-10-07: repetía los dos productos que ya muestra "Mis trabajos"). Es la única presentación visible de la identidad en el layout de dos columnas (el rail oculta la suya; apilado en mobile ocurre al revés). El nav lo llama "Sobre mí".
_Avoid_: "Bio" o "About" como sección aparte con párrafos largos — la bio larga ya no se muestra; el contenido sigue en `content.*.ts`

**Línea de rol**:
La línea bajo el nombre en el hero. Se escribe sola como una terminal (Product Engineer → lema "Spec first, code later" → rol real), una sola vez, y se queda en el rol real. Los textos viven en `profile.roleCycle` y `profile.role`.
_Avoid_: pensarla como un carrusel o marquee — no hay bucles; cualquier movimiento ocurre una vez y se asienta

**Experiencia**:
Sección con la trayectoria real de Andrés (roles, fechas, logros), dibujada como barras paralelas sobre un eje de tiempo real (2013–hoy, con quiebre marcado para comprimir Arcor), más el bloque "Cómo trabajo". No confundir con la grilla de stack.
_Avoid_: usar "Experiencia" para la grilla de tecnologías — esa colisión existía en el sitio antes de esta sesión (el nav "experience" apuntaba a la grilla de stack)

**Cinta de tecnologías**:
Una de las tres filas de herramientas/stack (interfaz; backend, datos y mobile; desarrollo con IA), usada sola como separador entre dos secciones: nunca apiladas. Desde el 2026-10-07 no existe una sección "Tecnologías": el stack se reparte en tres cintas (`TechRibbon`) a lo largo de la página.
_Avoid_: "Tecnologías" como sección, "Experience", "Skills" (ambiguo con el término "skill" individual)

**Credenciales** (sección):
Sección propia (id `credentials`, en el nav) con los certificados verificables; antes compartía sección con las tecnologías. Cierra con una cinta de tecnologías.
_Avoid_: llamarla "Tecnologías"

**Trabajo profesional**:
Tab de "Mis trabajos" con proyectos entregados a clientes reales o en el marco de un rol remunerado. Incluye una fila de proyectos destacados curada aparte del listado completo.
_Avoid_: mezclar con Labs o Personal en un solo listado

**Labs** (retirado del sitio, 2026-10-05, por señal junior):
Tab de "Mis trabajos" con ejercicios de práctica/aprendizaje (bootcamp, FCC, cursos). Sin curaduría de destacados — listado completo directo.
_Avoid_: "Trabajo profesional" — un ejercicio de práctica no es trabajo entregado a un cliente

**Proyectos personales** (retirado del sitio, 2026-10-05, por señal junior):
Tab de "Mis trabajos" con productos/ideas propias hechas por iniciativa propia, no como ejercicio de aprendizaje ni para un cliente. Sin curaduría de destacados.
_Avoid_: "Labs" — no son ejercicios de un curso/bootcamp

**Case study**:
La entrada de Experiencia con desarrollo narrativo completo — contexto, responsabilidades, logros medibles. Hoy es Arcor, contada en el bloque "Cómo trabajo"; el resto del timeline usa entradas breves (rol, empresa, fechas, 1-2 líneas).
_Avoid_: aplicar el mismo nivel de detalle a todas las entradas del timeline

**Proyecto dado de baja**:
Un proyecto que existía en el sitio pero se retira porque ya no representa el nivel/vigencia actual (demo inconclusa, cliente ya no vigente, etc.). Se elimina de los datos, no se comenta/archiva en el código.
_Avoid_: dejarlo comentado "por las dudas" — es el mismo patrón de cruft que ya generó los bloques comentados encontrados en la auditoría

**Contractor**:
Trabajo como contratista independiente, no en relación de dependencia. Plug-Zone, Virtual Remote Partner y Aythen fueron contratos de este tipo (dato dado por Andrés, 2026-10-06), por eso sus fechas pueden solaparse entre sí. Plug-Zone abarcó frontend, backend, infraestructura y, tras una capacitación, conectores y workflows con NetIQ Identity Manager.
_Avoid_: presentarlos como empleos consecutivos o como "multitasking" — son contratos paralelos de un independiente

**Credencial verificable**:
Una certificación (ej. cursos de Anthropic Academy) que se muestra como nombre + emisor + fecha, enlazada a una página pública donde se puede verificar. No se embebe la imagen del certificado ni se fuerza la descarga de un PDF.
_Avoid_: "certificado" a secas sin el link de verificación — pierde la credibilidad de poder chequearlo
