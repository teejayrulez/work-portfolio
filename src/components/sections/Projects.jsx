export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Glowny Tech Academy</h3>
            <p className="text-gray-400 mb-4">
              An Online tech academy where anyone can learn any tech skill
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                React
              </span>
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                TailwindCss
              </span>
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                Javascript
              </span>
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://glowny-tech-academy-main.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>

              <a
                href="https://github.com/teejayrulez/GlownyTechAcademy"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Github(Private)
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">To Do list</h3>
            <p className="text-gray-400 mb-4">
              A To-do-list where you add, remove or edit your events
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                React
              </span>
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                Javascript
              </span>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://learnable-react-to-do-list.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
              <a
                href="https://github.com/teejayrulez/learnableReactToDoList"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Netflix Clone</h3>
            <p className="text-gray-400 mb-4">
              A cloned site of the Popularly Known TV Shows broadcasting company
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                HTML
              </span>
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                CSS
              </span>
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                Javascript
              </span>
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://learnable-netclone.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
              <a
                href="https://github.com/teejayrulez/Learnable-Netflix-Clone"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">ObserverTask</h3>
            <p className="text-gray-400 mb-4">
              An observer pattern that shows/displays a phone number, now
              dailing and Line busy
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                Node.js
              </span>
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/teejayrulez/learnableObserverTask"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
