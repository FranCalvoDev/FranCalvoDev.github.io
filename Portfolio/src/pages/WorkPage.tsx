import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Projects from "../components/Projects"
import Experience from "../components/Experience"

const WorkPage = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== "#experience") return

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById("experience")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash])

  return (
    <div>
      <Projects />
      <Experience />
    </div>
  )
}

export default WorkPage
