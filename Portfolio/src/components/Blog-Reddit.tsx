import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { fetchRedditPostsRss, type RedditPost } from "../utils/redditRss"

const formatDate = (value: string, language: "es" | "en") => {
  return new Intl.DateTimeFormat(language === "es" ? "es-AR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value))
}

const BlogReddit = () => {
  const { language } = useLanguage()
  const t = translations[language].blog

  const [posts, setPosts] = useState<RedditPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadPosts = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchRedditPostsRss(10)
        if (!cancelled) {
          setPosts(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : t.error)
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
  }, [t.error])

  const headerText = useMemo(() => {
    if (loading) return t.loading
    if (error) return error
    if (!posts.length) return t.empty
    
  }, [error, loading, posts.length, t.empty, t.loading, ])

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          {t.feedTitle}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base mt-1">
          {headerText}
        </p>
      </motion.div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="rounded-3xl border border-border/40 bg-secondary/85 p-5 md:p-6 animate-pulse"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-3xl border border-border/40 bg-secondary/90 shadow-[0_2px_20px_rgba(0,0,0,0.22)] p-5 md:p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-primary/40"
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
            </motion.article>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-3xl border border-border/40 bg-secondary/80 p-6 text-center text-muted-foreground">
          {error}
        </div>
      )}
    </div>
  )
}

export default BlogReddit