import { useCallback, useEffect, useMemo, useRef, useState, type FocusEvent, type ReactElement } from "react"
import { useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import MegaMenuCard from "./MegaMenuCard"

type MegaMenuItem = {
  title: string
  description: string
  path?: string
  image?: string
  Icon: () => ReactElement
  comingSoon?: boolean
}

const GalleryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
)

const SpecsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4Z" />
  </svg>
)

const SoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

const MegaMenu = () => {
  const { language } = useLanguage()
  const location = useLocation()
  const t = translations[language].more
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  // Cierra el panel al navegar (cambio de ruta).
  useEffect(() => {
    close()
  }, [location.pathname, close])

  // Cierra al hacer click/tap fuera del trigger o del panel.
  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [open])

  // Cierra con Escape y devuelve el foco al trigger.
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open])

  // Cierra cuando el foco (tab) sale por completo del trigger + panel.
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
      setOpen(false)
    }
  }

  const items = useMemo<MegaMenuItem[]>(
    // "image" es opcional por item (URL/import): sin ella se ve un degradé de respaldo.
    () => [
      { title: t.gallery.title, description: t.gallery.description, path: "/gallery", Icon: GalleryIcon },
      { title: t.specs.title, description: t.specs.description, path: "/specs", Icon: SpecsIcon },
      { title: t.comingSoon, description: t.comingSoonDesc, Icon: SoonIcon, comingSoon: true },
      { title: t.comingSoon, description: t.comingSoonDesc, Icon: SoonIcon, comingSoon: true },
    ],
    [t]
  )

  return (
    <div ref={rootRef} onBlur={handleBlur} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        className="group flex w-full items-center justify-center rounded-full px-1.5 py-1.5 text-primary transition-all duration-200 hover:bg-primary/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:px-2"
        aria-label={t.title}
        aria-expanded={open}
        aria-controls="mega-menu-panel"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-300 ease-out ${
            open ? "rotate-45" : "group-hover:rotate-90"
          }`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      {open && (
        <div
          id="mega-menu-panel"
          aria-label={t.title}
          className="fixed left-1/2 top-20 z-50 w-[calc(100vw-2rem)] max-w-104 -translate-x-1/2 rounded-3xl border border-white/10 bg-secondary/95 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:max-w-xl md:top-24 md:max-w-2xl"
        >
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {items.map((item, index) => (
              <li key={item.path ?? `soon-${index}`}>
                <MegaMenuCard
                  title={item.title}
                  description={item.description}
                  path={item.path}
                  image={item.image}
                  Icon={item.Icon}
                  comingSoonLabel={item.comingSoon ? t.comingSoon : undefined}
                  onNavigate={close}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MegaMenu
