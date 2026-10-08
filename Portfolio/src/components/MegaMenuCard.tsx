import { useEffect, useState, type ReactElement } from "react"
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
  const [pressed, setPressed] = useState(false)

  // En dispositivos táctiles (sin hover) la animación corre sola al abrirse el menú.
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return
    const id = window.setTimeout(() => setPressed(true), 150)
    return () => window.clearTimeout(id)
  }, [])

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

  const background = (
    <span aria-hidden="true" className="absolute inset-0">
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-105"
          style={{ filter: pressed ? "blur(0px)" : "blur(6px)" }}
        />
      ) : (
        <span
          className="block h-full w-full bg-linear-to-br from-primary/20 via-secondary to-accent/40 transition-[filter] duration-500 ease-out"
          style={{ filter: pressed ? "blur(0px)" : "blur(6px)" }}
        />
      )}
      <span className="absolute inset-0 bg-background/60 transition-colors duration-300 ease-out group-hover:bg-background/30 group-focus-visible:bg-background/30 group-active:bg-background/25" />
    </span>
  )

  const pressHandlers = {
    onMouseEnter: () => setPressed(true),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    onTouchCancel: () => setPressed(false),
  }

  if (isDisabled) {
    return (
      <div
        aria-disabled="true"
        {...pressHandlers}
        className="group relative flex w-full min-h-36 cursor-default overflow-hidden items-start gap-3.5 p-3.5 opacity-50 sm:min-h-44 md:min-h-52 sm:p-4"
      >
        {background}
        <span className="relative flex w-full items-start gap-3.5">{content}</span>
      </div>
    )
  }

  return (
    <Link
      to={path}
      onClick={onNavigate}
      {...pressHandlers}
      className="group relative flex w-full min-h-36 sm:min-h-44 md:min-h-52 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60"
    >
      {background}
      <span className="relative flex w-full items-start gap-3.5 p-3.5 sm:p-4">{content}</span>
    </Link>
  )
}

export default MegaMenuCard
