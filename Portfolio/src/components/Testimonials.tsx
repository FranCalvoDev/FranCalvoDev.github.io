import { m } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import PageHeader from "./PageHeader"

// Solo se muestra con testimonios reales cargados en translations.ts: nunca una sección vacía.
const Testimonials = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.testimonials

  if (t.items.length === 0) return null

  return (
    <section className="bg-background/55 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader title={t.title} as="h2" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.items.map((item, index) => (
            <m.figure
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-5 rounded-3xl border border-border/40 bg-transparent p-7 backdrop-blur-sm md:p-8"
            >
              <span aria-hidden="true" className="font-serif text-5xl leading-none text-primary/70">
                “
              </span>
              <blockquote className="text-base leading-relaxed text-white/90 md:text-lg">{item.quote}</blockquote>
              <figcaption className="mt-auto">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-sm text-foreground">{item.business}</p>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
