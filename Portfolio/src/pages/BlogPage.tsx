import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import BlogReddit from "../components/Blog-Reddit"

const BlogPage = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
          {t.title}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          {t.pageIntro}
        </p>
      </div>

      <div className="mt-12">
        <BlogReddit />
      </div>
    </section>
  )
}

export default BlogPage
