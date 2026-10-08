import { motion } from "framer-motion"
import { SOCIAL_LINKS } from "../utils/socialLinks"

type Platform = keyof typeof SOCIAL_LINKS

const paths: Record<Platform, string> = {
  youtube:
    "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  tiktok:
    "M19.6 6.7a5.5 5.5 0 0 1-3.4-3.1 5.4 5.4 0 0 1-.3-1.6h-3.7v14.4a3 3 0 1 1-2.1-2.9V9.7a6.8 6.8 0 1 0 5.8 6.7V9a9.1 9.1 0 0 0 5.3 1.7V7a5.5 5.5 0 0 1-1.6-.3Z",
  reddit:
    "M24 11.8a2.6 2.6 0 0 0-4.4-1.9 12.8 12.8 0 0 0-6.9-2.2l1.2-5.5 3.8.8a1.9 1.9 0 1 0 .2-1l-4.3-.9a.5.5 0 0 0-.6.4l-1.3 6.2a12.9 12.9 0 0 0-7 2.2 2.6 2.6 0 1 0-2.9 4.2 5 5 0 0 0 0 .8c0 4 4.7 7.2 10.4 7.2s10.4-3.2 10.4-7.2a5 5 0 0 0 0-.8 2.6 2.6 0 0 0 1.4-2.3ZM6 13.4a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0Zm10.7 5a7 7 0 0 1-4.7 1.4 7 7 0 0 1-4.7-1.4.5.5 0 0 1 .7-.7 6 6 0 0 0 4 1.1 6 6 0 0 0 4-1.1.5.5 0 0 1 .7.7Zm-.4-3.1a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Z",
}

export const PlatformIcon = ({ platform, className = "w-6 h-6" }: { platform: Platform; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d={paths[platform]} />
  </svg>
)

const platforms: Platform[] = ["youtube", "tiktok", "reddit"]

export const SocialIconsRow = () => (
  <div className="flex items-center justify-center gap-2.5">
    {platforms.map((platform) => {
      const { url } = SOCIAL_LINKS[platform]
      const classes =
        "flex items-center justify-center w-10 h-10 rounded-full border border-border/40 bg-secondary/90 text-primary transition-[box-shadow,border-color,background-color,color] duration-300 ease-out hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_rgba(121,191,15,0.55)]"
      const motionProps = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
        whileHover: { y: -4, rotate: -8, scale: 1.12 },
        whileTap: { scale: 0.92 },
      }

      return url ? (
        <motion.a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
          className={classes}
          {...motionProps}
        >
          <PlatformIcon platform={platform} />
        </motion.a>
      ) : (
        <motion.span
          key={platform}
          aria-label={platform}
          className={`${classes} opacity-60`}
          {...motionProps}
        >
          <PlatformIcon platform={platform} />
        </motion.span>
      )
    })}
  </div>
)

export const UsernameLink = ({ platform }: { platform: Platform }) => {
  const { url, username } = SOCIAL_LINKS[platform]
  if (!url || !username) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sm font-semibold text-primary transition-[text-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:[text-shadow:0_0_12px_rgba(121,191,15,0.9),0_0_28px_rgba(121,191,15,0.6)]"
    >
      {username}
    </a>
  )
}
