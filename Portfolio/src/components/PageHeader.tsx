import type { ReactNode } from "react"
import { m } from "framer-motion"

type PageHeaderProps = {
  title: string
  subtitle?: string
  as?: "h1" | "h2"
  titleAdornment?: ReactNode
}

// El título es estático; solo la bajada anima.
const PageHeader = ({ title, subtitle, as: Heading = "h1", titleAdornment }: PageHeaderProps) => (
  <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
    <div className="flex items-center justify-center gap-4 md:gap-5">
      <Heading className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
        {title}
      </Heading>
      {titleAdornment}
    </div>
    <span aria-hidden="true" className="block h-px w-12 bg-primary/60" />
    {subtitle && (
      <m.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-muted-foreground text-base md:text-lg max-w-xl"
      >
        {subtitle}
      </m.p>
    )}
  </div>
)

export default PageHeader
