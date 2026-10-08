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
      <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
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

  const itemTranslation = t.specs.items[item.id]

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center text-center">
        {item.photo && (
          <div className="relative w-full rounded-3xl overflow-hidden border border-border/40 shadow-[0_2px_20px_rgba(0,0,0,0.22)]">
            <img src={item.photo} alt={itemTranslation.name} className="w-full h-auto block" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-background/15"
              aria-hidden="true"
            />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">{itemTranslation.name}</h1>

        <dl className="w-full max-w-md flex flex-col gap-3 text-left rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm p-6 shadow-[0_2px_20px_rgba(0,0,0,0.22)]">
          {item.specs.map((spec) => (
            <div
              key={spec.labelKey}
              className="flex justify-between gap-4 border-b border-border/40 pb-2 last:border-b-0 last:pb-0"
            >
              <dt className="text-muted-foreground">{itemTranslation.labels[spec.labelKey]}</dt>
              <dd className="font-medium text-foreground">
                {spec.valueKey ? itemTranslation.values?.[spec.valueKey] : spec.value}
              </dd>
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
