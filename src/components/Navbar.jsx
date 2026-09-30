import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certifications",
        "contact",
      ];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/Logo.jpg"
              alt="MezueTech"
              className="w-10 h-10 rounded-full object-cover border border-white/10"
            />
            <span className="font-mono text-lg font-bold text-white">
              Mezue<span className="text-blue-500">Tech</span>
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            className="w-10 h-10 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white text-xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 ${
                    activeSection === link.id ? "w-6" : "w-0"
                  }`}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
