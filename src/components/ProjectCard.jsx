export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group relative flex flex-col gap-4 p-5 rounded-3xl
        bg-card-light dark:bg-card-dark
        border border-border-light dark:border-border-dark
        transition-all duration-500
        dark:hover:border-primary/20 hover:border-primary-dark/20 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
        overflow-hidden hover:-translate-y-1 cursor-pointer
      "
    >
      {/* Project Image */}
      <div
        className="w-full aspect-video bg-cover bg-center rounded-2xl overflow-hidden relative shadow-lg"
        style={{ backgroundImage: `url(${project.image1})` }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors duration-500"></div>

        <div className="
          absolute bottom-4 right-4 w-10 h-10
          bg-black/40 dark:bg-black/60 backdrop-blur-md
          rounded-full border border-border-light dark:border-border-dark
          group-hover:border-primary/50
          transition-colors flex items-center justify-center
        ">
          <span className="material-symbols-outlined text-primary dark:text-primary text-[20px] leading-none group-hover:text-primary">
            arrow_outward
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-2 px-1">
        <div className="flex justify-between items-start">
          <h3 className="text-text-dark dark:text-text-light text-xl font-bold dark:group-hover:text-primary group-hover:text-primary-dark transition-colors">
            {project.title}
          </h3>
          <span className="text-text-muted text-xs font-mono border border-border-light dark:border-border-dark rounded-full px-2 py-1">
            {project.year}
          </span>
        </div>

        <p className="text-text-muted text-sm leading-relaxed">
          {project.intro}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`
                text-xs font-medium px-3 py-1 rounded-full
                ${i === 0
                  ? "dark:text-primary text-primary-dark dark:bg-primary-5 bg-primary-dark/5 border dark:border-primary/20 border-primary-dark/20"
                  : "text-text-muted dark:bg-primary-5/5 bg-primary-dark/4 border border-border-light dark:border-border-dark"
                }
              `}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}