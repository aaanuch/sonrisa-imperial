# Agencia Imperial — Landing Sonrisa Imperial

## Contexto
Agencia Imperial construye landing pages de conversión para clínicas dentales.
Este repo es la landing de **Sonrisa Imperial**: su único objetivo es que el
visitante agende una hora. Todo lo que no empuje hacia el formulario sobra.

## Stack
HTML, CSS y JavaScript planos. Sin frameworks, sin build, sin dependencias npm.
Tres archivos: `index.html`, `styles.css`, `app.js`. Se abren directo en el navegador.

- No introduzcas React, Tailwind, bundlers ni un `package.json`.
- Librerías externas solo si te lo pido explícitamente.

## Convenciones
- Todo el texto de cara al usuario va en **español de Chile** (precios en CLP,
  teléfonos `+56 9 ...`, horarios `09:00 – 19:00`).
- CSS: clases tipo BEM (`.brand__name`, `.btn--solid`). Nada de estilos inline.
- Usa las variables de `:root` en `styles.css`; no escribas hex nuevos.
  Paleta: `--ink`, `--ink-soft`, `--line`, `--paper`, `--paper-alt`, `--gold`, `--danger`.
  Tipografías: `--serif` (Cormorant Garamond) en títulos, `--sans` (Inter) en el resto.
- JS: `const`/`let`, sin jQuery, comentarios breves en español.
- Accesibilidad: cada input con su `<label>`, `aria-label` en secciones, foco visible.

## Formulario
`app.js` valida en cliente y hoy solo hace `console.log`. El envío real está
pendiente (ver el `TODO`). No inventes un endpoint ni agregues claves de API.

## Flujo de trabajo
- `main` se despliega solo en Vercel → https://sonrisa-imperial-aaa-aprendiendo.vercel.app
- Nunca commitees directo a `main`: rama → PR → merge. El PR se crea desde el
  navegador de la app, no con `gh` (no está instalada).
- Previsualizar: usa la configuración `landing` de `.claude/launch.json` (puerto 4321).

## Al trabajar aquí
- Cambios quirúrgicos: no reescribas archivos completos por un ajuste.
- Si una sección crece mucho, propón dividirla antes de hacerlo.
