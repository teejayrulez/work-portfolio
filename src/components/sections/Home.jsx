import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export const Home = () => {
  const roles = ["Full-stack Developer", "React Specialist", "Problem Solver", "Tech Tutor"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.substring(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.substring(0, displayed.length - 1))
        }, 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20"
    >
      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-[10%] font-mono text-xs text-blue-500/20 animate-float" style={{ animationDelay: '0s' }}>
          {'<Developer />'}
        </div>
        <div className="absolute top-1/3 right-[15%] font-mono text-xs text-red-500/20 animate-float" style={{ animationDelay: '2s' }}>
          {'const build = () => {}'}
        </div>
        <div className="absolute bottom-1/3 left-[15%] font-mono text-xs text-purple-500/20 animate-float" style={{ animationDelay: '4s' }}>
          {'npm run dev'}
        </div>
        <div className="absolute bottom-1/4 right-[10%] font-mono text-xs text-green-500/20 animate-float" style={{ animationDelay: '1s' }}>
          {'git push origin main'}
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300 font-medium">
            Available for work
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight" style={{ animationDelay: '0.1s' }}>
          <span className="block text-white">Hi, I'm</span>
          <span className="text-gradient">Mezue Tochukwu</span>
        </h1>

        <div className="h-8 sm:h-10 mb-6 font-mono text-lg sm:text-xl md:text-2xl text-blue-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-gray-500">&gt; </span>
          {displayed}
          <span className="animate-blink ml-0.5">|</span>
        </div>

        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          A creative full-stack developer dedicated to building interactive,
          user-friendly, and feature-rich websites. I specialize in React,
          Node.js, and delivering efficient web solutions from concept to
          deployment.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="group relative bg-blue-500 text-white py-3 px-8 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}