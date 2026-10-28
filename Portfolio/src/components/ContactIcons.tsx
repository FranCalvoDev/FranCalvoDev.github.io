import type { SVGProps } from "react"
import { siWhatsapp } from "simple-icons"

type IconProps = { className?: string }

// Mismo estilo de trazo que los íconos del Navbar
const stroke: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
}

export const WhatsAppIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d={siWhatsapp.path} />
  </svg>
)

export const LinkedInIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.97 1.97 0 1 0 5.25 7.44 1.97 1.97 0 0 0 5.25 3.5ZM20.44 20.5H17.06V14.75c0-1.37-.03-3.13-1.91-3.13-1.92 0-2.21 1.5-2.21 3.04V20.5H9.56V8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.19V20.5Z" />
  </svg>
)

export const PinIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...stroke} className={className}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const PhoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...stroke} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

export const MailIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...stroke} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const CheckCircleIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...stroke} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.5 2.5 2.5L16 9.5" />
  </svg>
)

export const ExpandIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg {...stroke} className={className}>
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
)
