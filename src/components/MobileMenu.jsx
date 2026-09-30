import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home", num: "01" },
    { href: "#about", label: "About", num: "02" },
    { href: "#skills", label: "Skills", num: "03" },
    { href: "#projects", label: "Projects", num: "04" },
    { href: "#certifications", label: "Certifications", num: "05" },
    { href: "#contact", label: "Contact", num: "06" },
  ]

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#0a0a0a]/98 backdrop-blur-2xl z-30 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white text-xl focus:outline-none cursor-pointer rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close Menu"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      {/* Decorative */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

      <nav className="flex flex-col items-start gap-2 relative z-10">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`group flex items-center gap-4 text-3xl sm:text-4xl font-bold text-white px-6 py-3 transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : "0ms" }}
          >
            <span className="text-sm font-mono text-blue-500/60 group-hover:text-blue-400 transition-colors">
              {link.num}
            </span>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-400 transition-all duration-300">
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      <div
        className={`absolute bottom-10 text-sm text-gray-500 font-mono transition-all duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: menuOpen ? "600ms" : "0ms" }}
      >
        teejaymezue8@gmail.com
      </div>
    </div>
  );
};