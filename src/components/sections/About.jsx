import { RevealOnScroll } from "../RevealOnScroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

export const About = () => {
  const experience = [
    {
      year: "2026 - Present",
      role: "Full Stack Tutor",
      company: "Digital Dreams Academy",
      points: [
        "Teaching students HTML, CSS, and JavaScript for the frontend.",
        "Instructing PHP and Laravel for backend development.",
      ],
    },
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "Glowny Tech Academy",
      points: [
        "Creating websites for startup companies using React.js.",
        "Designed content for social media as their design creator.",
      ],
    },
    {
      year: "2023 - 2024",
      role: "Intern",
      company: "Genesys Learnable",
      points: [
        "Built a Learning Management System (LMS) website using React and Tailwind CSS.",
        "Took part in a Design sprint and Scrum week during the internship.",
      ],
    },
    {
      year: "2022 - Present",
      role: "Full-Stack Developer",
      company: "Freelancer",
      points: [
        "Developed full-stack web applications using React, Node.js, Express, and REST APIs.",
        "Integrated frontend applications with backend services and databases.",
      ],
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-5xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gradient">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="glass rounded-2xl p-6 sm:p-8 mb-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am a creative full-stack developer dedicated to developing and
              optimizing interactive, user-friendly, and feature-rich websites.
              With strong attention to detail, I deliver original and efficient
              web solutions; from building new websites from scratch to
              enhancing existing ones. My passion lies in crafting exceptional
              digital experiences that blend performance with aesthetics.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
              </span>
              Work Experience
            </h3>

            <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 space-y-8">
              {experience.map((exp, i) => (
                <RevealOnScroll
                  key={i}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={i * 100}
                >
                  <div className="relative group">
                    <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
                    <div className="text-xs font-mono text-blue-400 mb-1">{exp.year}</div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <div className="text-sm text-gray-400 mb-2">{exp.company}</div>
                    <ul className="space-y-1.5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-sm text-gray-400 flex gap-2">
                          <span className="text-blue-500 mt-1">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="right">
          <div className="glass rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
              </span>
              Education
            </h3>
            <div>
              <h4 className="text-lg font-bold text-white">Bachelor of Science</h4>
              <p className="text-gray-400">Enugu State University of Science and Technology</p>
              <p className="text-sm font-mono text-blue-400 mt-1">2017 - 2022</p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-sm text-gray-500">
                  <span className="text-gray-300 font-medium">Relevant Coursework:</span> Data Structures, Web Development, Cloud Computing
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};