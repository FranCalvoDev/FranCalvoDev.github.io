import { useEffect, useRef, useState, useMemo, type ReactElement } from "react"
import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import MegaMenu from "./MegaMenu"

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
  </svg>
)

const WorkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </svg>
)

const ContactIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const BlogIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M4 4h12l4 4v12H4Z" />
    <path d="M8 10h8M8 14h8M8 18h4" />
  </svg>
)

type NavLink = { path: string; label: string; Icon: () => ReactElement }

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav
  const location = useLocation()

  const links = useMemo<NavLink[]>(
    () => [
      { path: "/", label: t.home, Icon: HomeIcon },
      { path: "/work", label: t.work, Icon: WorkIcon },
      { path: "/blog", label: t.blog, Icon: BlogIcon },
      { path: "/contact", label: t.contact, Icon: ContactIcon },
    ],
    [t]
  )

  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [interacting, setInteracting] = useState(false)
  const lastScrollY = useRef(0)
  const isNavigating = useRef(false)
  const navigatingTimeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    let ticking = false

    const updateFromScroll = () => {
      const { scrollY } = window
      const scrollingDown = scrollY > lastScrollY.current
      setScrolled(scrollY > 20)

      if (isNavigating.current || scrollY <= 20) {
        setVisible(true)
        setInteracting(false)
      } else if (scrollingDown) {
        setVisible(false)
        setInteracting(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = scrollY
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateFromScroll)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const markNavigating = () => {
    setVisible(true)
    isNavigating.current = true
    if (navigatingTimeout.current) window.clearTimeout(navigatingTimeout.current)
    navigatingTimeout.current = window.setTimeout(() => {
      isNavigating.current = false
    }, 1000)
  }

  const isActive = (link: NavLink) => location.pathname === link.path

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"

  const renderLink = (link: NavLink, className: string) => {
    const { Icon, label } = link
    const active = isActive(link)
    const activeClass = active
      ? "text-primary bg-primary/10 shadow-[0_0_0_1px_rgba(121,191,15,0.18)]"
      : "text-foreground hover:text-primary hover:bg-primary/5"

    return (
      <Link
        to={link.path}
        onClick={markNavigating}
        aria-label={label}
        title={label}
        className={`group ${className} ${activeClass} ${focusRing} transition-all duration-300 ease-out active:scale-95`}
      >
        <Icon />
      </Link>
    )
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-5 md:top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300"
    >
      <div
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocus={() => setInteracting(true)}
        onBlur={() => setInteracting(false)}
        className={`flex flex-col items-center transition-all duration-300 ${
          visible || interacting
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {/* Cápsula única de cristal: enlaces, mega menu y selector de idioma
            comparten el mismo fondo/blur/borde, así ningún control se siente "agregado". */}
        <div
          className={`nav-capsule-width flex items-center gap-2 px-2.5 py-2 sm:gap-3 sm:px-4 md:gap-4 md:px-5 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-secondary/80 backdrop-blur-md shadow-lg shadow-black/30 border border-border"
              : "bg-secondary/40 backdrop-blur-sm border border-border/50"
          }`}
        >
          {/* Todos los links (incluido el mega menu) comparten un único <ul> flex
              para que el reparto de ancho sea idéntico entre ellos. */}
          <ul className="flex flex-1 items-center gap-1 sm:gap-2 md:gap-2">
            {links.map((link) => (
              <li key={link.path} className="flex-1">
                {renderLink(
                  link,
                  "text-sm font-medium transition-all duration-200 flex items-center justify-center rounded-full px-1.5 py-1.5 sm:px-2"
                )}
              </li>
            ))}
            <li className="flex-1">
              <MegaMenu />
            </li>
          </ul>

          <span aria-hidden="true" className="h-5 w-px shrink-0 bg-border/60 sm:h-6" />

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className={`shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-200 ease-out hover:bg-primary/5 active:scale-95 sm:px-3 ${focusRing}`}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
