import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import { useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import MegaMenuCard from "./MegaMenuCard"

type MegaMenuItem = {
  title: string
  description: string
  path: string
  image: string
}

const MegaMenu = () => {
  const { language } = useLanguage()
  const location = useLocation()
  const t = translations[language].more
  const [open, setOpen] = useState(false)
  const hoverTimeoutRef = useRef<number | undefined>(undefined)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open])

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const clearHoverTimer = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current)
    }
  }

  const handleDesktopEnter = () => {
    clearHoverTimer()
    setOpen(true)
  }

  const handleDesktopLeave = () => {
    clearHoverTimer()
    hoverTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  const handleMenuEnter = () => {
    clearHoverTimer()
  }

  const handleMenuLeave = () => {
    clearHoverTimer()
    hoverTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  const items = useMemo<MegaMenuItem[]>(
    () => [
      {
        title: t.gallery.title,
        description: t.gallery.description,
        path: "/gallery",
        image: "",
      },
      {
        title: t.specs.title,
        description: t.specs.description,
        path: "/specs",
        image: "",
      },
      {
        title: t.comingSoon,
        description: t.comingSoonDesc,
        path: "/",
        image: "",
      },
      {
        title: t.comingSoon,
        description: t.comingSoonDesc,
        path: "/work",
        image: "",
      },
    ],
    [t.comingSoon, t.comingSoonDesc, t.gallery.description, t.gallery.title, t.specs.description, t.specs.title]
  )

  const toggleOpen = () => setOpen((prev) => !prev)

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleOpen()
    }
  }

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleDesktopEnter}
        onMouseLeave={handleDesktopLeave}
        className="group flex w-full items-center justify-center rounded-full px-1.5 py-1.5 text-primary transition-all duration-200 hover:bg-primary/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:px-2"
        aria-label={t.title}
        aria-haspopup="menu"
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
          className={`w-4 h-4 transition-transform duration-300 ease-out ${
            open ? "rotate-90" : "group-hover:rotate-90"
          }`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      {open && (
        <div
          id="mega-menu-panel"
          ref={menuRef}
          role="menu"
          aria-label={t.title}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          className="absolute left-1/2 top-[calc(100%+0.9rem)] w-[min(92vw,30rem)] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-[rgba(2,38,1,0.86)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:w-[min(92vw,34rem)] md:w-[min(92vw,38rem)]"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <MegaMenuCard
                key={item.path}
                title={item.title}
                description={item.description}
                path={item.path}
                image={item.image}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MegaMenu
