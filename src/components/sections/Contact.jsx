import emailjs from 'emailjs-com'
import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperPlane,
  faSpinner,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      })
      .catch(() => {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-2xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gradient">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-2">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-2">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] resize-none"
                placeholder="Tell me about your project..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3.5 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "sending" && (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    Failed — Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    Send Message
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </span>
            </button>
          </form>
        </RevealOnScroll>

        {/* Footer */}
        <RevealOnScroll delay={200}>
          <footer className="mt-16 text-center">
            <div className="flex justify-center gap-4 mb-6">
              {[
                { href: "https://github.com/teejayrulez", icon: faGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/tochukwu-mezue", icon: faLinkedin, label: "LinkedIn" },
                { href: "mailto:teejaymezue8@gmail.com", icon: faEnvelope, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-600 font-mono">
              © {new Date().getFullYear()} Mezue Tochukwu. Built with React & Tailwind CSS.
            </p>
          </footer>
        </RevealOnScroll>
      </div>
    </section>
  );
};