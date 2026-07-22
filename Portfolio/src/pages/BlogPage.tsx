import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const BlogPage = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  return (
    <section className="bg-background/55 min-h-screen pt-16 md:pt-20 pb-16 md:pb-20 px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-justify">
          {t.comingSoon}
        </p>
      </div>
    </section>
  )
}

export default BlogPage
