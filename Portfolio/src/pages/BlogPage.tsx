import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import BlogReddit from "../components/Blog-Reddit"
import BlogYoutube from "../components/Blog-Youtube"
import BlogTiktok from "../components/Blog-Tiktok"
import { SocialIconsRow } from "../components/SocialIcons"
import PageHeader from "../components/PageHeader"

const BlogPage = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title={t.title}
          subtitle={t.pageIntro}
          titleAdornment={<SocialIconsRow />}
        />
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-8 items-start">
        <BlogYoutube />
        <BlogTiktok />
        <BlogReddit />
      </div>
    </section>
  )
}

export default BlogPage
