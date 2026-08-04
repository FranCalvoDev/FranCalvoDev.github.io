import { Link } from "react-router-dom"

type MegaMenuCardProps = {
  title: string
  description: string
  path: string
  image?: string
  onClick?: () => void
}

const MegaMenuCard = ({ title, description, path, image, onClick }: MegaMenuCardProps) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      role="menuitem"
      className="group relative flex h-full min-h-[180px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-[0_14px_40px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
    >
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ backgroundImage: image }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
      <div className="absolute inset-0 border border-white/5" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <div className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
          Portfolio
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/70">{description}</p>
      </div>
    </Link>
  )
}

export default MegaMenuCard
