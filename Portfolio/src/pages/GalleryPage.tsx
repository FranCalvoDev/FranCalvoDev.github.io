import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import PageHeader from "../components/PageHeader"

const GalleryPage = () => {
  const { language } = useLanguage()
  const t = translations[language].more

  return (
    <section className="bg-background/55 min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <PageHeader title={t.gallery.title} subtitle={t.comingSoonDesc} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="text-sm font-medium text-primary hover:underline transition-all duration-300 ease-out"
          >
            ← {t.back}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryPage
