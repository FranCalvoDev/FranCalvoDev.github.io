import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const GalleryPage = () => {
  const { language } = useLanguage()
  const t = translations[language].more

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          {t.gallery.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-justify">
          {t.comingSoonDesc}
        </p>
        <Link
          to="/more"
          className="text-sm font-medium text-primary hover:underline transition-all duration-300 ease-out"
        >
          ← {t.back}
        </Link>
      </div>
    </section>
  )
}

export default GalleryPage
