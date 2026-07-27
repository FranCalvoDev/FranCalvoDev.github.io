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

const MoreIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-90"
  >
    <path d="M12 5v14M5 12h14" />
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
      { path: "/more", label: t.more, Icon: MoreIcon },
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
        className={`group ${className} ${activeClass} transition-all duration-300 ease-out active:scale-95`}
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
      className={`fixed top-5 md:top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-300 ${
        visible || interacting
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >

      {/* Cápsula fija que envuelve los enlaces — igual en mobile y desktop */}
      <div
        className={`flex items-center gap-3 sm:gap-5 md:gap-7 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-secondary/80 backdrop-blur-md shadow-lg shadow-black/30 border border-border"
            : "bg-secondary/40 backdrop-blur-sm border border-border/50"
        }`}
      >

        {/* Links */}
        <ul className="flex gap-3 sm:gap-5 md:gap-6 items-center">
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

        {/* Botón de traducción */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 ease-out active:scale-95"
          aria-label="Cambiar idioma"
        >
          🌐 {language === "es" ? "EN" : "ES"}
        </button>

      </div>

    </nav>
  )
}

export default Navbar
