import { useState } from "react"
import { m } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations, type CaseStudy } from "../translations/translations"
import PageHeader from "./PageHeader"
import { ProjectLightbox } from "./Projects"
import { TechIcon } from "./TechIcon"
import { iconFor } from "../utils/techIcons"
import { CheckCircleIcon, ExpandIcon } from "./ContactIcons"

const labelClass = "text-xs font-semibold uppercase tracking-widest text-primary"

const CaseStudies = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.cases
  const [gallery, setGallery] = useState<{ title: string; images: string[] } | null>(null)
  const [current, setCurrent] = useState(0)

  const openGallery = (item: CaseStudy, index = 0) => {
    setGallery({ title: item.client, images: item.images })
    setCurrent(index)
  }

  return (
    <section className="bg-background/55 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader title={t.title} subtitle={t.subtitle} as="h2" />

        <div className="flex flex-col gap-10 md:gap-12">
          {t.items.map((item, index) => {
            const finished = item.status === "finished"

            return (
              <m.article
                key={item.client}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 items-start gap-7 rounded-3xl border border-border/40 bg-transparent p-5 shadow-[0_2px_20px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 md:grid-cols-2 md:gap-10 md:p-9"
              >
                {/* Capturas: abren la galería completa. En desktop quedan fijas mientras se lee el caso. */}
                <div className={`flex flex-col gap-3 md:sticky md:top-24 ${index % 2 === 1 ? "md:order-last" : ""}`}>
                  <button
                    type="button"
                    onClick={() => openGallery(item)}
                    aria-label={`${t.viewScreens}: ${item.client}`}
                    className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#071007] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.coverAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      <ExpandIcon />
                      {t.viewScreens} ({item.images.length})
                    </span>
                  </button>

                  {item.images.length > 1 && (
                    <div className="hidden grid-cols-2 gap-3 md:grid">
                      {item.images.slice(1, 3).map((src, thumb) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => openGallery(item, thumb + 1)}
                          aria-label={`${t.viewScreens}: ${item.client} (${thumb + 2})`}
                          className="group relative block aspect-video cursor-zoom-in overflow-hidden rounded-xl bg-[#071007] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                          <img
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-medium tracking-wide text-primary">
                      {item.sector}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${
                        finished
                          ? "border-primary/50 bg-primary/10 text-primary"
                          : "border-amber-400/35 bg-amber-400/10 text-amber-300"
                      }`}
                    >
                      {finished ? t.finished : t.inProgress}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{item.client}</h3>
                    <p className="mt-2 text-lg font-medium leading-snug text-primary">{item.headline}</p>
                  </div>

                  <dl className="flex flex-col gap-4">
                    <div>
                      <dt className={labelClass}>{t.challengeLabel}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-foreground md:text-base">{item.challenge}</dd>
                    </div>
                    <div>
                      <dt className={labelClass}>{t.solutionLabel}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-foreground md:text-base">{item.solution}</dd>
                    </div>
                    <div>
                      <dt className={labelClass}>{finished ? t.resultsLabel : t.progressLabel}</dt>
                      <dd className="mt-2.5">
                        <ul className="flex flex-col gap-2.5">
                          {item.results.map((result) => (
                            <li key={result} className="flex gap-2.5 text-sm leading-relaxed text-white/90 md:text-base">
                              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>

                  {/* Tecnologías al final: primero el resultado, después el cómo */}
                  <div className="flex flex-wrap items-center gap-2 border-t border-border/30 pt-4">
                    <span className="mr-1 text-xs text-foreground/80">{t.techLabel}</span>
                    {item.techs.map((tech) => {
                      const icon = iconFor(tech)
                      return icon ? (
                        <TechIcon key={tech} name={tech} icon={icon} small />
                      ) : (
                        <span key={tech} className="rounded-full border border-border/40 px-3 py-1 text-xs text-foreground">
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </m.article>
            )
          })}
        </div>
      </div>

      {gallery && (
        <ProjectLightbox
          title={gallery.title}
          images={gallery.images}
          current={current}
          onClose={() => setGallery(null)}
          onChange={setCurrent}
        />
      )}
    </section>
  )
}

export default CaseStudies
