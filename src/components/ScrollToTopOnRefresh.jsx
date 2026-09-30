import { useEffect } from "react"

export const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      )
    }

    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return null
}