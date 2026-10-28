import { m } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import PageHeader from "./PageHeader"

const ContactProcess = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.process

  return (
    <section className="bg-background/55 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader title={t.title} subtitle={t.subtitle} as="h2" />

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => (
            <m.li
              key={step.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-3 rounded-3xl border border-border/40 bg-transparent p-6 backdrop-blur-sm"
            >
              {/* Número y título en línea en celular, apilados en la grilla de columnas */}
              <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary"
                >
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground">{step.text}</p>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ContactProcess
