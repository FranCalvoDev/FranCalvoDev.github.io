import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="bg-background/55 pt-24 md:pt-28 pb-32 px-6 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center tracking-tight">
          {t.title}
        </h2>
        <p className="text-foreground text-center mb-16">
          {t.subtitle}
        </p>

        {/* Formulario */}
        <form
          action="https://formspree.io/f/mkokgyld"
          method="POST"
          className="bg-secondary/90 border border-border/40 rounded-3xl p-8 md:p-10 flex flex-col gap-7 mb-14 shadow-[0_2px_20px_rgba(0,0,0,0.22)]"
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
            className="bg-primary text-primary-foreground font-semibold py-3.5 px-8 rounded-full hover:opacity-90 transition-all duration-300 ease-out active:scale-95"
          >
            {t.send}
          </button>
        </form>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border/50 px-7 py-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300 ease-out active:scale-95"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/FranCalvoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground border border-border/50 px-7 py-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300 ease-out active:scale-95"
          >
            🐙 GitHub
          </a>
        </div>

      </motion.div>
    </section>
  )
}

export default Contact