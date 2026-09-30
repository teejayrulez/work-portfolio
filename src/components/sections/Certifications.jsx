import { RevealOnScroll } from "../RevealOnScroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faRocket,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const certifications = [
  {
    name: "infoaidTech",
    period: "May 2023 - June 2023",
    description: "Professional certification in web development fundamentals and modern practices.",
    icon: faGraduationCap,
  },
  {
    name: "Genesys Learnable",
    period: "Dec 2023 - June 2024",
    description: "Intensive internship program covering full-stack development, design sprints, and agile methodologies.",
    icon: faRocket,
  },
]

export const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gradient">
              Certifications & Training
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full" />
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <RevealOnScroll
              key={cert.name}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 150}
            >
              <div className="glass rounded-2xl p-6 sm:p-8 h-full hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center text-blue-400 text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={cert.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-xs font-mono text-blue-400 mb-3">{cert.period}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300} direction="up">
          <div className="mt-12 glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold mb-6 text-center text-gradient">Quick Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+2348152669241"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 border border-white/5 transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="text-sm text-gray-200">+234-815-266-9241</div>
                </div>
              </a>
              <a
                href="mailto:teejaymezue8@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 border border-white/5 transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm text-gray-200 truncate">teejaymezue8@gmail.com</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/tochukwu-mezue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 border border-white/5 transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className="text-xs text-gray-500">LinkedIn</div>
                  <div className="text-sm text-gray-200">tochukwu-mezue</div>
                </div>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}