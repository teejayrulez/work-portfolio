import { useEffect, useState } from "react"

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(scrolled * 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-[width] duration-100 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}