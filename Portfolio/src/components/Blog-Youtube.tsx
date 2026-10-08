import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { fetchYoutubeVideos, type YoutubeVideo } from "../utils/youtubeRss"
import { UsernameLink } from "./SocialIcons"

const BlogYoutube = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  const [videos, setVideos] = useState<YoutubeVideo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchYoutubeVideos(4)
      .then((data) => {
        if (!cancelled) setVideos(data)
      })
      .catch(() => {
        if (!cancelled) setVideos([])
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const [featured, ...others] = videos

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          YouTube
        </h2>
        <UsernameLink platform="youtube" />
      </motion.div>

      {loading && <div className="aspect-video rounded-3xl bg-muted/60 animate-pulse" />}

      {!loading && !featured && (
        <div className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm p-6 text-center text-muted-foreground">
          {t.youtubeEmpty}
        </div>
      )}

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-primary/40"
        >
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
              title={featured.title}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <h3 className="text-primary text-lg font-semibold leading-snug p-5">{featured.title}</h3>
        </motion.div>
      )}

      {others.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((video) => (
            <motion.a
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/40 bg-transparent backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-primary/40"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <p className="text-sm text-foreground leading-snug p-3 line-clamp-2">{video.title}</p>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogYoutube
