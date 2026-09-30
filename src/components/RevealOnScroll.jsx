import { useEffect, useRef } from "react"

const directionClasses = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
}

export const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = ref.current
          if (!el) return
          setTimeout(() => {
            el.classList.add("visible")
          }, delay)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass = directionClasses[direction] || directionClasses.up

  return (
    <div ref={ref} className={`reveal ${dirClass}`}>
      {children}
    </div>
  )
}