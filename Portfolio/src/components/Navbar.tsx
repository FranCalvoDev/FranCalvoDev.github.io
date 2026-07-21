import { useEffect, useRef, useState, useMemo, type ReactElement } from "react"
import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

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

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [interacting, setInteracting] = useState(false)
  const lastScrollY = useRef(0)
  const isNavigating = useRef(false)
  const navigatingTimeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      setScrolled(scrollY > 20)

      if (isNavigating.current) {
        setVisible(true)
      } else {
        const scrollingDown = scrollY > lastScrollY.current
        setVisible(scrollY <= 20 ? true : !scrollingDown)
      }

      lastScrollY.current = scrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const markNavigating = () => {
    setMenuOpen(false)
    setVisible(true)
    isNavigating.current = true
    if (navigatingTimeout.current) window.clearTimeout(navigatingTimeout.current)
    navigatingTimeout.current = window.setTimeout(() => {
      isNavigating.current = false
    }, 1000)
  }

  const isActive = (link: NavLink) => location.pathname === link.path

  const renderLink = (link: NavLink, className: string) => {
    const { Icon, label } = link
    const active = isActive(link)
    const activeClass = active ? "text-primary" : "text-foreground hover:text-primary"

    return (
      <Link
        to={link.path}
        onClick={markNavigating}
        aria-label={label}
        title={label}
        className={`${className} ${activeClass} transition-all duration-300 ease-out active:scale-95`}
      >
        <Icon />
      </Link>
    )
  }

  const linkKey = (link: NavLink) => link.path

  return (
    <nav
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={() => setInteracting(false)}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-300 ${
        visible || menuOpen || interacting
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >

      {/* Cápsula que envuelve únicamente los enlaces */}
      <div
        className={`flex items-center gap-5 md:gap-6 px-4 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-secondary/80 backdrop-blur-md shadow-lg shadow-black/30 border border-border"
            : "bg-secondary/40 backdrop-blur-sm border border-border/50"
        }`}
      >

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <li key={linkKey(link)}>
              {renderLink(
                link,
                "text-sm font-medium transition-all duration-200 relative pb-1 flex items-center"
              )}
              {isActive(link) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </li>
          ))}
        </ul>

        {/* Botón de traducción — desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 ease-out active:scale-95"
          aria-label="Cambiar idioma"
        >
          🌐 {language === "es" ? "EN" : "ES"}
        </button>

        {/* Botón hamburguesa — solo mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden w-auto overflow-hidden transition-all duration-300 rounded-3xl mt-2 ${
          menuOpen
            ? "max-h-96 bg-secondary/90 backdrop-blur-md border border-border"
            : "max-h-0"
        }`}
      >
        <ul className="flex items-center justify-center gap-6 px-6 py-4">
          {links.map((link) => (
            <li key={linkKey(link)}>
              {renderLink(
                link,
                `flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                  isActive(link) ? "bg-primary text-primary-foreground" : ""
                }`
              )}
            </li>
          ))}
        </ul>

        {/* Botón de traducción — mobile */}
        <div className="flex justify-center pb-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 ease-out active:scale-95"
            aria-label="Cambiar idioma"
          >
            🌐 {language === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
