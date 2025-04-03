import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            application and creating innovation solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  React
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  Javascript
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  TailwindCSS
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-end</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-0-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.Sc in Computer Science</strong> - Enugu State
                University of Science and Technology(ESUT) [2017-2022]
              </li>
              <li>
                Relevent Coursework: Data Structure, Web development, Cloud
                Computing
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-0-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Frontend Developer at Glowny Tech Academy [2024 - Present]
                </h4>
                <p>Created company website</p>
                <p>Taught as a Frontend Teacher</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Intern at Genesys [2023 - 2024]
                </h4>
                <p>
                  Asssisted in buliding front-end components and integrating
                  REST APIs
                </p>
                <p>
                  Worked with product designers and Co developers to create a
                  site called "LIFEDROP"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
