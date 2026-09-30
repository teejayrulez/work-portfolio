import { useEffect } from "react"

export const AutoHideScrollbar = () => {
  useEffect(() => {
    const html = document.documentElement
    let timer

    const show = () => {
      html.classList.add("scrolling")
      clearTimeout(timer)
      timer = setTimeout(() => {
        html.classList.remove("scrolling")
      }, 1500)
    }

    window.addEventListener("scroll", show, { passive: true })
    window.addEventListener("wheel", show, { passive: true })
    window.addEventListener("touchmove", show, { passive: true })

    return () => {
      window.removeEventListener("scroll", show)
      window.removeEventListener("wheel", show)
      window.removeEventListener("touchmove", show)
      clearTimeout(timer)
    }
  }, [])

  return null
}