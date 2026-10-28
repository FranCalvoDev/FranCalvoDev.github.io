import { useEffect, useState } from "react"
import { m } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { fetchRedditPostsRss, type RedditPost } from "../utils/redditRss"
import { UsernameLink } from "./SocialIcons"

// Crear un Intl.DateTimeFormat es caro: se arma uno por idioma y se reutiliza en cada post
const dateOptions: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" }
const dateFormatters = {
  es: new Intl.DateTimeFormat("es-AR", dateOptions),
  en: new Intl.DateTimeFormat("en-US", dateOptions),
}

const formatDate = (value: string, language: "es" | "en") => {
  // Una fecha inválida haría que Intl lance una excepción y se caiga toda la página
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return dateFormatters[language].format(date)
}

const BlogReddit = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  const [posts, setPosts] = useState<RedditPost[]>([])
  const [loading, setLoading] = useState(true)
  // Solo un flag: el texto se traduce al renderizar, así cambiar de idioma no vuelve a pedir los posts
  const [failed, setFailed] = useState(false)
  // Mensaje traducido para el visitante, no el error técnico del navegador ("Failed to fetch")
  const error = failed ? t.error : null

  useEffect(() => {
    let cancelled = false

    const loadPosts = async () => {
      setLoading(true)
      setFailed(false)

      try {
        const data = await fetchRedditPostsRss(10)
        if (!cancelled) {
          setPosts(data)
        }
      } catch {
        if (!cancelled) {
          setFailed(true)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadPosts()

    return () => {
      cancelled = true
    }
  }, [])

  const headerText = loading ? t.loading : error ?? (posts.length ? undefined : t.empty)

  return (
    <div>
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mb-5"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          Reddit
        </h2>
        <UsernameLink platform="reddit" />
        <p className="text-muted-foreground text-sm mt-1">
          {headerText}
        </p>
      </m.div>

      {loading && (
        <div className="grid grid-cols-1 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm p-5 md:p-6 animate-pulse"
            >
              <div className="h-4 w-24 rounded-full bg-muted/70 mb-4" />
              <div className="h-4 w-2/3 rounded bg-muted/70 mb-3" />
              <div className="h-3 w-full rounded bg-muted/60 mb-2" />
              <div className="h-3 w-11/12 rounded bg-muted/60" />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <m.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.22)] p-5 md:p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary tracking-wide">
                  r/{post.subreddit}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {formatDate(post.createdAt, language)}
                </span>
              </div>

              <h3 className="text-primary text-lg font-semibold leading-snug max-h-14 overflow-hidden">
                {post.title}
              </h3>

              <p className="text-foreground text-sm leading-relaxed max-h-16 overflow-hidden">
                {post.text || t.noExcerpt}
              </p>

              <div className="pt-1">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out active:scale-95"
                >
                  {t.openInReddit}
                </a>
              </div>
            </m.article>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-3xl border border-border/40 bg-transparent backdrop-blur-sm p-6 text-center text-muted-foreground">
          {error}
        </div>
      )}
    </div>
  )
}

export default BlogReddit