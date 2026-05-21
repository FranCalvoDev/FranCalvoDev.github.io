import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="bg-background py-24 px-8">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-foreground text-center mb-12">
          {t.subtitle}
        </p>

        {/* Formulario */}
        <form
          action="https://formspree.io/f/mkokgyld"
          method="POST"
          className="bg-secondary border border-border rounded-xl p-8 flex flex-col gap-6 mb-12"
        >
          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">{t.nameLbl}</label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.namePlaceholder}
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">{t.emailLbl}</label>
            <input
              type="email"
              name="email"
              required
              placeholder={t.emailPlaceholder}
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-foreground text-sm font-medium">{t.messageLbl}</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.messagePlaceholder}
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            {t.send}
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/FranCalvoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
          >
            🐙 GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact