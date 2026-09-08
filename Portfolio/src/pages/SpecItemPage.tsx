import { Link, useParams } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { specsItems } from "../data/specsItems"

const SpecItemPage = () => {
  const { language } = useLanguage()
  const t = translations[language].more
  const { itemId } = useParams()
  const item = specsItems.find((entry) => entry.id === itemId)

  if (!item) {
    return (
      <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            {t.specs.notFound}
          </h1>
          <Link
            to="/specs"
            className="text-sm font-medium text-primary hover:underline transition-all duration-300 ease-out"
          >
            ← {t.specs.title}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">{item.name}</h1>

        <dl className="w-full max-w-md flex flex-col gap-3 text-left">
          {item.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-4 border-b border-border/60 pb-2"
            >
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="font-medium text-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          to="/specs"
          className="text-sm font-medium text-primary hover:underline transition-all duration-300 ease-out"
        >
          ← {t.specs.title}
        </Link>
      </div>
    </section>
  )
}

export default SpecItemPage
