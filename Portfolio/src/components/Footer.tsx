import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="bg-secondary/90 border-t border-border py-8 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Nombre */}
        <p className="text-primary font-semibold text-lg">
          Francisco Calvo
        </p>

        {/* Copy */}
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — {t.rights}
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground text-sm hover:text-primary transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/FranCalvoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground text-sm hover:text-primary transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer