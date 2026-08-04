import type { ReactElement } from "react"
import { Link } from "react-router-dom"

type MegaMenuCardProps = {
  title: string
  description: string
  path?: string
  image?: string
  Icon: () => ReactElement
  comingSoonLabel?: string
  onNavigate?: () => void
}

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0 text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const MegaMenuCard = ({ title, description, path, image, Icon, comingSoonLabel, onNavigate }: MegaMenuCardProps) => {
  const isDisabled = !path

  const iconWrapper = (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/20">
      <Icon />
    </span>
  )

  const content = (
    <>
      {iconWrapper}
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">{title}</span>
          {comingSoonLabel ? (
            <span className="shrink-0 rounded-full border border-white/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-white/50">
              {comingSoonLabel}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block text-xs leading-5 text-white/70 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
          {description}
        </span>
      </span>
      {!isDisabled ? <ArrowIcon /> : null}
    </>
  )

  if (isDisabled) {
    return (
      <div
        aria-disabled="true"
        className="group flex cursor-default items-start gap-3.5 rounded-2xl p-3.5 opacity-50 sm:p-4"
      >
        {content}
      </div>
    )
  }

  return (
    <Link
      to={path}
      onClick={onNavigate}
      className="group relative flex overflow-hidden rounded-2xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
    >
      {/* Fondo: imagen (o degradé de respaldo mientras no haya asset definitivo) + velo que se aclara en hover/foco/tap */}
      <span aria-hidden="true" className="absolute inset-0">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <span className="block h-full w-full bg-linear-to-br from-primary/20 via-secondary to-accent/40" />
        )}
        <span className="absolute inset-0 bg-secondary/85 transition-colors duration-300 ease-out group-hover:bg-secondary/55 group-focus-visible:bg-secondary/55 group-active:bg-secondary/50" />
      </span>
      <span className="relative flex w-full items-start gap-3.5 p-3.5 sm:p-4">{content}</span>
    </Link>
  )
}

export default MegaMenuCard
