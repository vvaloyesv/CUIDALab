# Yo cuido — Sistema de Diseño

Sistema de diseño para **Cuido**, un simulador y registro del **valor económico del trabajo de cuidado no remunerado**. La app permite a las personas registrar sus actividades de cuidado (cocina, cuidado directo, limpieza, acompañamiento) y ver el valor económico estimado de ese trabajo, tanto a nivel individual (app móvil) como agregado (dashboard analítico).

Nombre de trabajo neutral: **Cuido**. El producto no tenía nombre definitivo al crear el sistema.

## Origen y fuentes

Este sistema se derivó de un **moodboard de marca** entregado como capturas de pantalla (11 imágenes en `uploads/`). El moodboard mostraba un concepto de app de notas AI-native («MyNotes»); por indicación del usuario se tomó como **inspiración visual suelta** y se adaptó al dominio de cuidado. No había codebase ni archivo de Figma; toda la reconstrucción parte de las capturas.

Decisiones confirmadas con el usuario:

- Inspiración suelta del moodboard, adaptada al tema de cuidado.
- **Amarillo-lima primario + neutros de tinta**, pasteles como acento.
- **Sin logo**: el moodboard incluía un «sol/estallido» radial que el usuario marcó como placeholder → **no se usa**. La marca se representa en tipografía.
- Matriz de puntos (LED) incluida como fuente decorativa puntual (decisión delegada).
- Contenido de ejemplo en **español**.
- Superficies a recrear: **app móvil de cuidado** y **dashboard web de analítica**.

---

## CONTENT FUNDAMENTALS

Cómo se escribe el copy de Cuido.

- **Idioma:** español neutro (LATAM). Moneda en formato colombiano cuando aplica (`$2.180.000`).
- **Tratamiento:** de **tú** («Tus cuidados», «Tu valor», «Hoy has aportado…»). Cercano, no institucional.
- **Tono:** cálido, digno y validante. El mensaje de fondo es **reconocer y valorar** el trabajo de cuidado — nunca condescendiente ni culpabilizador. Ej.: «Hoy has aportado $87.400 en trabajo no remunerado».
- **Casing:** títulos en *sentence case* («Registrar cuidado», «Por tipo de cuidado»). Mayúsculas solo en eyebrows/labels cortos con tracking amplio («CATEGORÍA», «VALOR DEL CUIDADO»). Evitar Title Case.
- **Concisión:** etiquetas de 1–3 palabras. Los números hablan: valor grande + delta pequeño («+12%»).
- **Vocabulario:** «cuidado», «actividad», «valor económico / valor estimado», «cuidadora», «aporte», «hogar». Categorías: Cocina, Cuidado directo, Hogar, Salud, Acompañamiento.
- **Emoji:** no se usan. Los acentos visuales son color, iconos de línea y la fuente de puntos.
- **Fuente de puntos (Handjet):** reservada para momentos destacados o de energía («NUEVO PLAN»), nunca para texto corrido.

---

## VISUAL FOUNDATIONS

- **Color.** Primario **amarillo-lima `#FCFD76`** (`--lime-300`) para acciones y acentos energéticos; se usa en dosis, no en grandes superficies. Neutros de **tinta** desde `#000` hasta `#FFF` (`--ink-*`) para texto, superficies y fondos. **Pasteles** (lavanda `#D7D7F4`, púrpura `#BB96DA`, cian `#93DCDF`, durazno `#EFAF86`, menta) como codificación de categorías y acentos suaves. El púrpura es el color de «seleccionado/importante» (check de casillas). Fondo de página gris claro (`--ink-100`).
- **Tipografía.** **Urbanist** (Google Fonts) para todo el texto y display: geométrica, redondeada, humana. Titulares con tracking ceñido (`-0.02em`) y pesos 500–600. **Handjet** para titulares de matriz de puntos/LED puntuales. Escala de 11px a 88px.
- **Espaciado.** Base 4px. Generoso: `--pad-card: 24px`, pantallas con 22px de margen lateral en móvil.
- **Fondos.** Motivo clave: **gradientes cálidos y difusos** (`--grad-warm`, `--grad-aurora`, `--grad-dusk`) que evocan luz suave; se usan detrás del vidrio esmerilado. No hay fotos propias en el sistema (las del moodboard eran de stock); las imágenes reales las aporta el consumidor. Superficies planas gris/blanco en el dashboard.
- **Vidrio esmerilado (glassmorphism).** Firma de la marca. Tarjetas translúcidas con `backdrop-filter: blur` sobre gradientes (`GlassCard`, utilidad `.cuido-glass`). Esquemas claro (texto oscuro) y oscuro (texto blanco).
- **Bordes y radios.** Esquinas muy redondeadas: botones e inputs en **pill** (`999px`); tarjetas en `--radius-xl` (28px); hojas/modales en `--radius-2xl` (36px). Bordes sutiles gris claro; foco con borde de tinta + anillo.
- **Sombras.** Suaves y difusas, elevación baja (`--shadow-sm/md/lg`). Sombra teñida de lima (`--shadow-lime`) para elementos de acento (FAB, botón primario flotante). Realce interior sutil en vidrio.
- **Animación.** Transiciones cortas (`--dur-fast 140ms`, `--dur-base 240ms`) con `--ease-out`. Micro-interacción de **press: `scale(0.92–0.97)`**. Perillas y checks con `--ease-spring` (rebote leve). Sin loops decorativos.
- **Hover / press.** Botones: hover aclara (`brightness`) o cambia a `--accent-hover`; ghost/outline reciben fondo `--ink-100`. Press: encoge. Tarjetas interactivas: `translateY(-2px)` + sombra mayor.
- **Transparencia y blur.** Reservados para superficies sobre imagen/gradiente y para la barra de navegación inferior (degradado de protección). No se abusa sobre fondos planos.
- **Vibe de imagen.** Cuando haya imágenes: cálidas, con luz difusa, tonos durazno/lavanda/verde, ligeramente desenfocadas — coherentes con los gradientes de marca.

---

## ICONOGRAFÍA

- El moodboard usaba **iconos de línea finos** (silueta, trazo \~1.75px, esquinas redondeadas) y algunos controles con glifos simples.
- El sistema **no incluye una fuente de iconos propia**. Se adopta **[Lucide](https://lucide.dev)** vía CDN como sustituto por su trazo fino y redondeado, coherente con el moodboard. **Sustitución señalada** — si existe un set propio, reemplazar.
- Uso: `stroke-width: 1.75`, tamaño 16–24px. En las cards y UI kits se monta con el helper `window.CuidoIcon` (`<Icon n="HandCoins" s={20} />`).
- **Emoji:** no se usan como iconos. **Unicode:** solo flechas/caret simples (`▾`, `↑`, `✕`) en controles nativos.
- No se dibujan SVG de marca a mano. No se reconstruyó el logo del moodboard (marcado como placeholder por el usuario).

---

## Índice / Manifiesto

**Raíz**

- `styles.css` — punto de entrada global (solo `@import`).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `effects.css`, `fonts.css`, `base.css`.
- `readme.md` — este documento.
- `SKILL.md` — guía portable (Agent Skills / Claude Code).
- `_ds_bundle.js`, `_ds_manifest.json` — generados por el compilador (no editar).

**Componentes** (`components/`) — 20, expuestos en `window.CuidoSistemaDeDiseO_5a985d`:

- `core/` — **Button**, **IconButton**, **Badge**, **Chip**, **Avatar**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**, **Slider**
- `surfaces/` — **Card**, **GlassCard**, **StatCard**, **ProgressRing**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**
- `navigation/` — **Tabs**

**Adiciones intencionales** (no en el set estándar, justificadas por el dominio): **Chip** (filtros/categorías, motivo del moodboard), **GlassCard** (glassmorphism, firma de marca), **StatCard** y **ProgressRing** (analítica del dashboard), **Slider** (parámetros del simulador de valor), **Avatar**. Se omitió **Tag** por redundar con Badge/Chip.

**Guidelines** (`guidelines/`) — tarjetas de especímenes: colores (lima, tinta, pasteles, semánticos), tipografía (display, escala, matriz de puntos), marca (gradientes, vidrio), espaciado (escala, radios y sombras).

**UI kits** (`ui_kits/`)

- `app_movil/` — app móvil de cuidado: Home (Tus cuidados), Registrar, Resumen (Tu valor).
- `dashboard/` — dashboard web de analítica del valor del cuidado.

## Notas / sustituciones a validar

- **Fuentes vía Google Fonts CDN** (Urbanist, Handjet). Si se requieren binarios licenciados/offline, reemplazar el `@import` de `tokens/fonts.css` por `@font-face` locales.
- **Iconos Lucide** como sustituto del set del moodboard.
- **Sin logo** por decisión del usuario.
