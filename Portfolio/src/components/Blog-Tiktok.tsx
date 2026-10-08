import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { SOCIAL_LINKS } from "../utils/socialLinks"
import { UsernameLink } from "./SocialIcons"

const TIKTOK_URL = SOCIAL_LINKS.tiktok.url

const BlogTiktok = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          TikTok
        </h2>
        <UsernameLink platform="tiktok" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm p-6 flex flex-col items-center text-center gap-4 transition-colors duration-300 hover:border-primary/40"
      >
        <p className="text-muted-foreground text-sm">{t.tiktokSoon}</p>
        {TIKTOK_URL && (
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out active:scale-95"
          >
            {t.visitTiktok}
          </a>
        )}
      </motion.div>
    </div>
  )
}

export default BlogTiktok
