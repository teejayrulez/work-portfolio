import { useState, useEffect } from "react";
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navbar';
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { BackToTop } from "./components/BackToTop";
import { AutoHideScrollbar } from "./components/AutoHideScrollbar"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      document.body.classList.add('loaded');
    }
  }, [isLoaded]);

  return (
    <>
    <AutoHideScrollbar />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#0a0a0a] text-gray-100 relative overflow-x-hidden`}
      >
        {/* Animated background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        </div>

        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <BackToTop />
        </div>
      </div>
    </>
  );
}

export default App;