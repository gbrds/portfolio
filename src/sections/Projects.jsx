import { useModal } from "../context/ModalContext";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function Projects() {
  const { project, openModal, closeModal } = useModal();

  return (
    <section
      id="projects"
      className="mb-48"
    >
      {/* Section inner container (IMPORTANT) */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 px-2 border-b dark:border-border-dark/50 border-border-light/50 pb-6">
          <h2 className="text-text-dark dark:text-text-light text-3xl font-light tracking-tight">
            Selected Projects
          </h2>

          {/*<button
            onClick={() => openModal(projects[0])}
            className="text-primary text-sm font-bold flex items-center hover:underline hover:text-white transition-colors"
          >
            View All
            <span className="material-symbols-outlined ml-1 text-[16px]">
              arrow_outward
            </span>
          </button>*/}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onClick={() => openModal(proj)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {project && <ProjectModal project={project} onClose={closeModal} />}
    </section>
  );
}
