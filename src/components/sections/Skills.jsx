import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

const skills = [
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "PHP", level: 75, category: "backend" },
  { name: "Laravel", level: 70, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "MySQL", level: 78, category: "database" },
]

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-blue-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 80}ms`,
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer rounded-full" />
        </div>
      </div>
    </div>
  )
}

export const Skills = () => {
  const categories = [
    { key: "frontend", label: "Frontend", dotClass: "bg-blue-400", textClass: "text-blue-400", direction: "left" },
    { key: "backend",  label: "Backend",  dotClass: "bg-purple-400", textClass: "text-purple-400", direction: "up" },
    { key: "database", label: "Database", dotClass: "bg-red-400", textClass: "text-red-400", direction: "right" },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-5xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gradient">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Technologies and tools I work with to build modern web applications
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => (
            <RevealOnScroll
              key={cat.key}
              direction={cat.direction}
              delay={catIndex * 150}
            >
              <div className="glass rounded-2xl p-6 h-full hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
                <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${cat.textClass}`}>
                  <span className={`w-2 h-2 rounded-full ${cat.dotClass}`} />
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === cat.key)
                    .map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Git", "GitHub", "Figma", "Vercel", "Netlify", "REST APIs", "Responsive Design"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs sm:text-sm glass text-gray-300 hover:text-white hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}