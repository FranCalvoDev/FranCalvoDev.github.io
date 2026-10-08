import { useState } from "react"
import {
  siPython, siJavascript, siMysql, siHtml5, siCss, siJson, siReact, siVuedotjs,
  siAngular, siMongodb, siTypescript, siPhp, siNextdotjs, siNodedotjs, siTailwindcss,
  siPostgresql, siSqlite, siSupabase, siGit, siGithub, siGitlab, siDocker, siFigma, siNotion, siMiro,
} from "simple-icons"

type Icon = { path: string; color: string }

// Colores muy oscuros se reemplazan por uno claro para que se vean sobre el fondo oscuro
const light = "#e5e5e5"
const mk = (i: { path: string; hex: string }, forceLight = false): Icon => ({
  path: i.path,
  color: forceLight ? light : `#${i.hex}`,
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
  json: mk(siJson, true),
  "react.js": react,
  react,
  "vue.js": mk(siVuedotjs),
  angular: mk(siAngular),
  mysql: mk(siMysql),
  mongodb: mk(siMongodb),
  typescript: mk(siTypescript),
  php: mk(siPhp),
  "next.js": mk(siNextdotjs, true),
  "node.js": mk(siNodedotjs),
  "tailwind css": mk(siTailwindcss),
  postgresql: mk(siPostgresql),
  sqlite: mk(siSqlite),
  supabase: mk(siSupabase),
  git: mk(siGit),
  github: mk(siGithub, true),
  gitlab: mk(siGitlab),
  docker: mk(siDocker),
  figma: mk(siFigma),
  notion: mk(siNotion, true),
  miro: mk(siMiro),
}

export const iconFor = (name: string) => icons[name.trim().toLowerCase()]

export const TechIcon = ({ name, icon, small = false }: { name: string; icon: Icon; small?: boolean }) => {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      aria-label={name}
      onClick={() => setOpen((v) => !v)}
      onBlur={() => setOpen(false)}
      className={`group relative flex items-center justify-center rounded-xl border border-border/40 bg-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_0_18px_rgba(121,191,15,0.45)] focus-visible:border-primary focus-visible:outline-none ${
        small ? "w-10 h-10" : "w-14 h-14"
      }`}
    >
      <svg viewBox="0 0 24 24" className={small ? "w-5 h-5" : "w-7 h-7"} fill={icon.color} aria-hidden="true">
        <path d={icon.path} />
      </svg>
      <span
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background border border-primary/50 text-primary text-xs font-medium px-2.5 py-1 shadow-lg transition-all duration-200 z-10 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        {name}
      </span>
    </button>
  )
}
