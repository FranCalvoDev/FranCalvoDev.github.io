import { m } from "framer-motion"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { CONTACT } from "../utils/contactInfo"
import PageHeader from "./PageHeader"
import { LinkedInIcon, PinIcon } from "./ContactIcons"
import photo from "../assets/contact/francisco-retrato.webp"

const linkClass =
  "inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

const ContactAbout = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.about
  const location = translations[language].contact.hero.location

  return (
    <section className="bg-background/55 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader title={t.title} as="h2" />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xs md:sticky md:top-24 md:max-w-none"
          >
            <img
              src={photo}
              alt={t.photoAlt}
              width={720}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-border/40"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <PinIcon className="h-3.5 w-3.5 text-primary" />
              {location}
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-foreground md:text-lg">{t.intro}</p>

            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-transparent p-5 backdrop-blur-sm">
              <span aria-hidden="true" className="text-2xl leading-none">
                {t.location.icon}
              </span>
              <div>
                <p className="font-semibold text-white">{t.location.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{t.location.text}</p>
              </div>
            </div>

            {/* Formación: agrupada por tipo, de lo más reciente a lo más antiguo */}
            <div className="rounded-2xl border border-border/40 bg-transparent p-5 backdrop-blur-sm sm:p-6">
              <h3 className="flex items-center gap-3 font-semibold text-white">
                <span aria-hidden="true" className="text-2xl leading-none">
                  🎓
                </span>
                {t.educationTitle}
              </h3>

              <div className="mt-5 flex flex-col gap-6">
                {t.education.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{group.label}</p>
                    <ul className="mt-3 flex flex-col gap-4">
                      {group.items.map((item) => (
                        <li key={item.title} className="border-l-2 border-primary/30 pl-4">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-white underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <span className="text-sm font-medium text-white">{item.title}</span>
                            )}
                            {item.status && (
                              <span className="rounded-full border border-amber-400/35 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-amber-300">
                                {item.status}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-foreground">
                            {item.institution} · {item.period}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <LinkedInIcon className="h-4 w-4" />
                {t.linkedin}
              </a>
              <Link to="/work" className={linkClass}>
                {t.moreWork} →
              </Link>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default ContactAbout
