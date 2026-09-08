import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { specsItems } from "../data/specsItems"

const SpecsPage = () => {
  const { language } = useLanguage()
  const t = translations[language].more
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const hoveredItem = specsItems.find((item) => item.id === hoveredId) ?? null

  const clearHover = (id: string) =>
    setHoveredId((current) => (current === id ? null : current))

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
          {t.specs.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-justify">
          {t.specs.description}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/40">
        {/* Placeholder background: swap for the real room/desk photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 to-background" aria-hidden="true" />

        {specsItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => clearHover(item.id)}
            onFocus={() => setHoveredId(item.id)}
            onBlur={() => clearHover(item.id)}
            onClick={() => navigate(`/specs/${item.id}`)}
            className="absolute rounded-lg border-2 border-transparent hover:border-primary focus-visible:border-primary transition-colors duration-200 ease-out outline-none"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: `${item.width}%`,
              height: `${item.height}%`,
            }}
            aria-label={item.name}
          >
            <span className="sr-only">{item.name}</span>
          </button>
        ))}

        {hoveredItem && (
          <div
            className="absolute z-10 pointer-events-none rounded-xl border border-border bg-background/90 backdrop-blur-sm px-3 py-2 shadow-lg text-left"
            style={{
              left: `${hoveredItem.x}%`,
              top: `${hoveredItem.y}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <p className="text-sm font-semibold text-foreground">{hoveredItem.name}</p>
            <p className="text-xs text-muted-foreground">{t.specs.viewSpecs}</p>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto text-center mt-8">
        <Link
          to="/"
          className="text-sm font-medium text-primary hover:underline transition-all duration-300 ease-out"
        >
          ← {t.back}
        </Link>
      </div>
    </section>
  )
}

export default SpecsPage
