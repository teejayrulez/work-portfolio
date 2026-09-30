import { RevealOnScroll } from "../RevealOnScroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const projects = [
  {
    title: "Glowny Tech Academy",
    description: "An online tech academy where anyone can learn any tech skill, featuring course management and interactive lessons.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    link: "https://glowny-tech-academy-main.vercel.app/",
    github: "https://github.com/teejayrulez/GlownyTechAcademy",
    githubLabel: "Github (Private)",
    accent: "blue",
  },
  {
    title: "To-Do List App",
    description: "A feature-rich to-do list application where you can add, remove, and edit your events with a clean interface.",
    tech: ["React", "JavaScript"],
    link: "https://learnable-react-to-do-list.vercel.app/",
    github: "https://github.com/teejayrulez/learnableReactToDoList",
    githubLabel: "Github",
    accent: "purple",
  },
  {
    title: "Bright Tech Solution",
    description: "A financial knowledge platform covering savings, budgeting, and smart money management strategies.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://brightechsolution.vercel.app/",
    github: "https://github.com/teejayrulez/BTS-site",
    githubLabel: "Github (Private)",
    accent: "red",
  },
  {
    title: "ObserverTask",
    description: "An implementation of the observer design pattern displaying phone number states: dialing, and line busy.",
    tech: ["Node.js"],
    link: null,
    github: "https://github.com/teejayrulez/learnableObserverTask",
    githubLabel: "Github",
    accent: "green",
  },
]

const accentMap = {
  blue: "from-blue-500/20 to-blue-500/0 text-blue-400 border-blue-500/30",
  purple: "from-purple-500/20 to-purple-500/0 text-purple-400 border-purple-500/30",
  red: "from-red-500/20 to-red-500/0 text-red-400 border-red-500/30",
  green: "from-green-500/20 to-green-500/0 text-green-400 border-green-500/30",
}

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gradient">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A selection of projects I've built that showcase my skills and passion for development
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 100}>
              <div className="group relative glass rounded-2xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]">
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accentMap[project.accent]} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentMap[project.accent]} flex items-center justify-center border`}>
                      <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-gray-600">0{i + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${accentMap[project.accent]} bg-opacity-10`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span>Live Demo</span>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      <span>{project.githubLabel}</span>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}