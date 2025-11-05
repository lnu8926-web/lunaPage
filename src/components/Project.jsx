import { ExternalLink } from "lucide-react";

const Project = ({ projects }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-light text-slate-100 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <h3 className="text-xl font-light text-slate-100 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 font-light text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-light"
              >
                <span>View</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
