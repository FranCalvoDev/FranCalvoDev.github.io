import { useEffect, useMemo, useRef, useState, type ReactElement } from "react"
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

const AboutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.58-7 8-7s8 3 8 7" />
  </svg>
)

const SkillsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
  </svg>
)

const ProjectsIcon = () => (
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

const ExperienceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
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

const navIcons: Record<string, () => ReactElement> = {
  "#home": HomeIcon,
  "#about": AboutIcon,
  "#skills": SkillsIcon,
  "#projects": ProjectsIcon,
  "#experience": ExperienceIcon,
  "#contact": ContactIcon,
}

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav

  const links = useMemo(
    () => [
      { label: t.home, href: "#home" },
      { label: t.about, href: "#about" },
      { label: t.skills, href: "#skills" },
      { label: t.projects, href: "#projects" },
      { label: t.experience, href: "#experience" },
      { label: t.contact, href: "#contact" },
    ],
    [t]
  )

  const [activeSection, setActiveSection] = useState("")
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

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [links])

  const handleLinkClick = () => {
    setMenuOpen(false)
    setVisible(true)
    isNavigating.current = true
    if (navigatingTimeout.current) window.clearTimeout(navigatingTimeout.current)
    navigatingTimeout.current = window.setTimeout(() => {
      isNavigating.current = false
    }, 1000)
  }

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
          {links.map((link) => {
            const Icon = navIcons[link.href]
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-label={link.label}
                  title={link.label}
                  className={`text-sm font-medium transition-all duration-200 relative pb-1 flex items-center
                    ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }
                  `}
                >
                  <Icon />
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Botón de traducción — desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-200"
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
          {links.map((link) => {
            const Icon = navIcons[link.href]
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-label={link.label}
                  title={link.label}
                  className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Botón de traducción — mobile */}
        <div className="flex justify-center pb-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-primary text-primary hover:opacity-80 transition"
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
