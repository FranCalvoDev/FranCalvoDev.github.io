import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const GalleryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
)

const SpecsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4Z" />
  </svg>
)

const MorePage = () => {
  const { language } = useLanguage()
  const t = translations[language].more

  const cards = [
    { path: "/more/gallery", title: t.gallery.title, description: t.gallery.description, Icon: GalleryIcon },
    { path: "/more/specs", title: t.specs.title, description: t.specs.description, Icon: SpecsIcon },
  ]

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
        <div className="text-center flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl text-justify">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group flex flex-col gap-3 p-6 rounded-2xl border border-border bg-secondary/40 backdrop-blur-sm hover:bg-secondary/70 hover:border-primary transition-all duration-300 ease-out active:scale-95"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110">
                <card.Icon />
              </span>
              <h2 className="text-xl font-semibold text-foreground">{card.title}</h2>
              <p className="text-muted-foreground text-sm">{card.description}</p>
            </Link>
          ))}

          <div className="flex flex-col gap-3 p-6 rounded-2xl border border-dashed border-border/70 text-center sm:col-span-2 items-center">
            <span className="text-sm font-medium uppercase tracking-wide text-primary">
              {t.comingSoon}
            </span>
            <p className="text-muted-foreground text-sm max-w-md">{t.comingSoonDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MorePage
