import {
  siPython, siJavascript, siMysql, siHtml5, siCss, siJson, siReact, siVuedotjs,
  siAngular, siMongodb, siTypescript, siPhp, siNextdotjs, siNodedotjs, siTailwindcss,
  siPostgresql, siSqlite, siSupabase, siGit, siGithub, siGitlab, siDocker, siFigma, siNotion, siMiro, siPostman, siClaude, siGithubcopilot, siOpencode, siLaravel, siLaragon,
  siVite, siCapacitor, siAndroid, siVitest,
} from "simple-icons"

// Mapa de íconos de tecnologías, separado de TechIcon.tsx para que ese archivo solo
// exporte componentes (requisito del Fast Refresh de Vite).
export type Icon = { path: string; color: string }

// Colores muy oscuros se reemplazan por uno claro para que se vean sobre el fondo oscuro.
// Se calcula el contraste contra el fondo (#0D0D0D) en lugar de marcarlos a mano: así
// también se corrigen marcas que cambian de color en simple-icons (p. ej. Angular pasó a #0F0F11).
const light = "#e5e5e5"
const luminance = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const BACKGROUND_LUMINANCE = luminance("0D0D0D")
// 3:1 es el mínimo de WCAG para gráficos que no son texto
const MIN_CONTRAST = 3
const mk = (i: { path: string; hex: string }): Icon => ({
  path: i.path,
  color: (luminance(i.hex) + 0.05) / (BACKGROUND_LUMINANCE + 0.05) < MIN_CONTRAST ? light : `#${i.hex}`,
})

const sqlPath =
  "M12 2C7.58 2 4 3.34 4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5c0-1.66-3.58-3-8-3zm0 2c3.87 0 6 1.07 6 1.5S15.87 7 12 7 6 5.93 6 5.5 8.13 4 12 4zM6 8.2C7.5 8.99 9.6 9.5 12 9.5s4.5-.51 6-1.3v3.3c0 .43-2.13 1.5-6 1.5s-6-1.07-6-1.5zm0 6c1.5.79 3.6 1.3 6 1.3s4.5-.51 6-1.3v3.3c0 .43-2.13 1.5-6 1.5s-6-1.07-6-1.5z"

const react = mk(siReact)

const icons: Record<string, Icon> = {
  python: mk(siPython),
  javascript: mk(siJavascript),
  sql: { path: sqlPath, color: "#00758F" },
  html: mk(siHtml5),
  css: mk(siCss),
  json: mk(siJson),
  "react.js": react,
  react,
  "vue.js": mk(siVuedotjs),
  angular: mk(siAngular),
  mysql: mk(siMysql),
  mongodb: mk(siMongodb),
  typescript: mk(siTypescript),
  php: mk(siPhp),
  "next.js": mk(siNextdotjs),
  "node.js": mk(siNodedotjs),
  "tailwind css": mk(siTailwindcss),
  postgresql: mk(siPostgresql),
  sqlite: mk(siSqlite),
  supabase: mk(siSupabase),
  git: mk(siGit),
  github: mk(siGithub),
  gitlab: mk(siGitlab),
  docker: mk(siDocker),
  figma: mk(siFigma),
  notion: mk(siNotion),
  miro: mk(siMiro),
  postman: mk(siPostman),
  "vs code": {
    color: "#007ACC",
    path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
  },
  claude: mk(siClaude),
  "github copilot": mk(siGithubcopilot),
  opencode: mk(siOpencode),
  laravel: mk(siLaravel),
  laragon: mk(siLaragon),
  vite: mk(siVite),
  capacitor: mk(siCapacitor),
  android: mk(siAndroid),
  vitest: mk(siVitest),
}

// Object.hasOwn evita devolver propiedades heredadas (p. ej. "constructor") como si fueran íconos
export const iconFor = (name: string): Icon | undefined => {
  const key = name.trim().toLowerCase()
  return Object.hasOwn(icons, key) ? icons[key] : undefined
}
