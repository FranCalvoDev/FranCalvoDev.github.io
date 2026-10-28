import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react"
import { m, useReducedMotion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations, type QuizMatch, type QuizQuestion } from "../translations/translations"
import { CONTACT, whatsappUrl } from "../utils/contactInfo"
import { CheckCircleIcon, WhatsAppIcon } from "./ContactIcons"

type Answers = Record<string, string[]>
type Status = "idle" | "sending" | "success" | "error"
type ContactDraft = { name: string; email: string; phone: string; message: string }

// El mail con las respuestas llega siempre en español, sin importar el idioma de la web
const QUESTIONS_ES = translations.es.contact.quiz.questions
const BUSINESS_ES = QUESTIONS_ES.find((question) => question.id === "negocio")
const EMAIL_SUBJECT = "Nuevo cuestionario desde la web"
const PRIORITY: Record<string, string> = { ya: "Alta", pronto: "Media", explorando: "Baja" }

// El progreso se guarda en el navegador: si la persona sale a mirar algo y vuelve, sigue donde estaba
const STORAGE_KEY = "contacto-cuestionario"

const firstUnanswered = (answers: Answers) => {
  const index = QUESTIONS_ES.findIndex((question) => !answers[question.id]?.length)
  return index === -1 ? QUESTIONS_ES.length : index
}

const loadProgress = () => {
  const answers: Answers = {}
  let step = 0
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null")
    for (const question of QUESTIONS_ES) {
      const ids: unknown = saved?.answers?.[question.id]
      if (Array.isArray(ids)) {
        answers[question.id] = ids.filter((id) => question.options.some((option) => option.id === id))
      }
    }
    if (Number.isInteger(saved?.step)) step = saved.step
  } catch {
    // Sin storage (modo privado o bloqueado): el cuestionario arranca de cero
  }
  return { answers, step: Math.max(0, Math.min(step, firstUnanswered(answers))) }
}

const labelsFor = (question: QuizQuestion, ids: string[] = []) =>
  question.options
    .filter((option) => ids.includes(option.id))
    .map((option) => option.label)
    .join(", ")

// Caso real más parecido: cada objetivo en común suma 2 y el rubro suma 1
const bestMatch = (matches: QuizMatch[], answers: Answers) => {
  const business = answers.negocio ?? []
  const goals = answers.objetivos ?? []
  let best: QuizMatch | undefined
  let bestScore = 0
  for (const match of matches) {
    const score =
      goals.filter((goal) => match.goals.includes(goal)).length * 2 +
      business.filter((type) => match.business.includes(type)).length
    if (score > bestScore) {
      best = match
      bestScore = score
    }
  }
  return best
}

const fieldClass =
  "w-full rounded-xl border border-border/50 bg-background/40 px-4 py-3 text-base text-white placeholder:text-foreground/50 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
const labelClass = "text-sm font-medium text-white"
const primaryButtonClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-3.5 font-semibold text-primary-foreground transition-all duration-300 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100"
const backButtonClass =
  "rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-foreground"

const ContactQuiz = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.quiz
  const whatsappCta = translations[language].contact.hero.whatsappCta
  const reduceMotion = useReducedMotion()
  const [initial] = useState(loadProgress)
  const [step, setStep] = useState(initial.step)
  const [answers, setAnswers] = useState<Answers>(initial.answers)
  const [direction, setDirection] = useState(1)
  const [status, setStatus] = useState<Status>("idle")
  // Datos de contacto en estado: el formulario se desmonta al volver a una pregunta y no deben perderse
  const [contact, setContact] = useState<ContactDraft>({ name: "", email: "", phone: "", message: "" })
  const [showComment, setShowComment] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const interacted = useRef(false)
  const advanceTimer = useRef<number | undefined>(undefined)

  const questions = t.questions
  const total = questions.length + 1
  const question = step < questions.length ? questions[step] : undefined
  const selected = question ? (answers[question.id] ?? []) : []
  const nextStepName = step + 1 < questions.length ? questions[step + 1].step : t.contactStep
  const match = bestMatch(t.matches, answers)
  const summaryHref = whatsappUrl(
    [t.whatsappIntro, ...questions.map((q) => `• ${q.step}: ${labelsFor(q, answers[q.id])}`)].join("\n"),
  )

  useEffect(() => {
    if (status === "success") return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers }))
    } catch {
      // Sin storage: el cuestionario funciona igual, solo no recuerda el progreso
    }
  }, [step, answers, status])

  // Al cambiar de paso: la tarjeta a la vista y el foco en la nueva pregunta (para lectores de pantalla).
  // Si el envío falla, el foco se queda en el botón para poder reintentar.
  useEffect(() => {
    if (!interacted.current || status === "sending" || status === "error") return
    const card = cardRef.current
    if (card && card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })
    }
    headingRef.current?.focus({ preventScroll: true })
  }, [step, status, reduceMotion])

  useEffect(() => {
    const timer = advanceTimer
    return () => window.clearTimeout(timer.current)
  }, [])

  const go = (delta: 1 | -1) => {
    interacted.current = true
    window.clearTimeout(advanceTimer.current)
    setDirection(delta)
    setStatus((current) => (current === "error" ? "idle" : current))
    setStep((current) => Math.max(0, Math.min(current + delta, questions.length)))
  }

  const choose = (current: QuizQuestion, optionId: string) => {
    interacted.current = true
    if (current.multiple) {
      setAnswers((prev) => {
        const ids = prev[current.id] ?? []
        return { ...prev, [current.id]: ids.includes(optionId) ? ids.filter((id) => id !== optionId) : [...ids, optionId] }
      })
      return
    }
    setAnswers((prev) => ({ ...prev, [current.id]: [optionId] }))
    // Avanza solo, con una pausa breve para que se vea la opción marcada
    window.clearTimeout(advanceTimer.current)
    advanceTimer.current = window.setTimeout(() => go(1), reduceMotion ? 0 : 280)
  }

  const updateContact =
    (field: keyof ContactDraft) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setContact((prev) => ({ ...prev, [field]: value }))
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    for (const optional of ["phone", "message"]) {
      if (!String(data.get(optional) ?? "").trim()) data.delete(optional)
    }
    for (const q of QUESTIONS_ES) data.set(q.step, labelsFor(q, answers[q.id]))
    const priority = PRIORITY[answers.plazo?.[0] ?? ""] ?? ""
    data.set("Prioridad", priority)
    data.set("Idioma", language === "es" ? "Español" : "Inglés")
    // Asunto con prioridad y rubro, para ordenar las consultas de un vistazo
    const business = BUSINESS_ES ? labelsFor(BUSINESS_ES, answers.negocio) : ""
    data.set("subject", `${EMAIL_SUBJECT} · Prioridad ${priority.toLowerCase()}: ${business}`)

    interacted.current = true
    setStatus("sending")
    try {
      const response = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`)
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Sin storage: no hay nada que limpiar
      }
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        ref={cardRef}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-primary/60 bg-transparent p-8 text-center backdrop-blur-sm md:p-10"
      >
        <CheckCircleIcon className="h-12 w-12 text-primary" />
        <h3 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold text-white focus:outline-none">
          {t.successTitle.replace("{name}", () => contact.name.trim())}
        </h3>
        <p className="text-foreground">{t.successText.replace("{email}", () => contact.email.trim())}</p>
        <p className="mt-2 text-sm text-foreground/80">{t.successUrgent}</p>
        <a href={summaryHref} target="_blank" rel="noopener noreferrer" className={`${primaryButtonClass} w-full px-5 sm:w-auto sm:px-7`}>
          <WhatsAppIcon />
          {whatsappCta}
        </a>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className="scroll-mt-24 rounded-3xl border border-border/40 bg-transparent p-6 backdrop-blur-sm sm:p-8 md:p-10"
    >
      {/* Progreso */}
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-medium text-foreground">
          {t.stepWord} {step + 1} {t.ofWord} {total}
        </span>
        <span className="font-semibold uppercase tracking-widest text-primary">
          {question ? question.step : t.contactStep}
        </span>
      </div>
      <div aria-hidden="true" className="mt-3 h-1.5 overflow-hidden rounded-full bg-border/30">
        <m.div
          className="h-full rounded-full bg-primary"
          initial={false}
          animate={{ width: `${((step + 1) / total) * 100}%` }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
        />
      </div>

      <m.div
        key={step}
        initial={reduceMotion ? false : { opacity: 0, x: direction * 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mt-7"
      >
        {question ? (
          <>
            <h3
              ref={headingRef}
              tabIndex={-1}
              id="cuestionario-pregunta"
              className="text-xl font-semibold text-white focus:outline-none md:text-2xl"
            >
              {question.title}
            </h3>
            {question.multiple && <p className="mt-1.5 text-sm text-foreground">{t.multipleHint}</p>}

            <div role="group" aria-labelledby="cuestionario-pregunta" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isSelected = selected.includes(option.id)
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => choose(question, option.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-[0_0_0_1px_rgba(121,191,15,0.35)]"
                        : "border-border/50 bg-background/40 hover:border-primary/60 hover:bg-primary/5"
                    }`}
                  >
                    <span aria-hidden="true" className="text-2xl leading-none">
                      {option.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-white sm:text-base">{option.label}</span>
                      {option.hint && <span className="mt-0.5 block text-xs text-foreground">{option.hint}</span>}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ${
                        question.multiple ? "rounded-md" : "rounded-full"
                      } ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border/70"}`}
                    >
                      {isSelected && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              {step > 0 ? (
                <button type="button" onClick={() => go(-1)} className={backButtonClass}>
                  ← {t.back}
                </button>
              ) : (
                <span />
              )}
              <button type="button" onClick={() => go(1)} disabled={selected.length === 0} className={`${primaryButtonClass} px-7`}>
                <span>
                  {t.next}
                  <span className="hidden sm:inline">: {nextStepName}</span>
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : (
          <form action={CONTACT.formEndpoint} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h3 ref={headingRef} tabIndex={-1} className="text-xl font-semibold text-white focus:outline-none md:text-2xl">
              {t.contactTitle}
            </h3>

            {/* Resumen de sus respuestas y el caso real más parecido */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t.summaryTitle}</p>
              <dl className="mt-3 flex flex-col gap-1.5 text-sm">
                {questions.map((q) => (
                  <div key={q.id} className="flex flex-wrap gap-x-1.5">
                    <dt className="text-foreground">{q.step}:</dt>
                    <dd className="text-white">{labelsFor(q, answers[q.id])}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex gap-2.5 border-t border-primary/20 pt-4 text-sm leading-relaxed text-white/90">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{match?.text ?? t.matchFallback}</span>
              </p>
            </div>

            <p className="text-sm leading-relaxed text-foreground">{t.promise}</p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="cuestionario-nombre" className={labelClass}>
                  {t.nameLbl}
                </label>
                <input
                  id="cuestionario-nombre"
                  name="name"
                  type="text"
                  required
                  pattern=".*\S.*"
                  maxLength={80}
                  autoComplete="name"
                  placeholder={t.namePlaceholder}
                  value={contact.name}
                  onChange={updateContact("name")}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cuestionario-email" className={labelClass}>
                  {t.emailLbl}
                </label>
                <input
                  id="cuestionario-email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  value={contact.email}
                  onChange={updateContact("email")}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cuestionario-whatsapp" className={labelClass}>
                {t.phoneLbl}
              </label>
              <input
                id="cuestionario-whatsapp"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\(\)\s\-]{8,20}"
                title={t.phoneHint}
                placeholder={t.phonePlaceholder}
                value={contact.phone}
                onChange={updateContact("phone")}
                className={fieldClass}
              />
            </div>

            {showComment ? (
              <div className="flex flex-col gap-2">
                <label htmlFor="cuestionario-comentario" className={labelClass}>
                  {t.commentLbl}
                </label>
                <textarea
                  id="cuestionario-comentario"
                  name="message"
                  rows={3}
                  maxLength={2000}
                  autoFocus
                  placeholder={t.commentPlaceholder}
                  value={contact.message}
                  onChange={updateContact("message")}
                  className={`${fieldClass} resize-none`}
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowComment(true)}
                className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                + {t.addComment}
              </button>
            )}

            {/* Honeypot anti-spam de Formspree: invisible para las personas */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

            {status === "error" && (
              <div
                role="alert"
                className="flex flex-col gap-3 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200 sm:flex-row sm:items-center sm:justify-between"
              >
                <p>{t.error}</p>
                <a
                  href={summaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {whatsappCta}
                </a>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={status === "sending"}
                className={`${backButtonClass} self-center sm:self-auto`}
              >
                ← {t.back}
              </button>
              <button type="submit" disabled={status === "sending"} className={`${primaryButtonClass} px-7`}>
                {status === "sending" ? t.sending : t.send}
              </button>
            </div>
            <p className="text-center text-xs text-foreground/80 sm:text-right">{t.privacy}</p>
          </form>
        )}
      </m.div>
    </div>
  )
}

export default ContactQuiz
