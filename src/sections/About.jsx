import SectionWrapper from "../components/SectionWrapper";
import profileImage from "../assets/profile.jpg"; // Make sure your image is here

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-48">
        {/* Left column */}
        <div className="flex-1">
          <div className="flex items-center gap-4 md:block">
            {/* Portrait */}
            <div className="portrait-container animate-float md:float-left md:mr-8 mb-6 md:mb-2 mx-auto md:mx-0">
              <div className="portrait-inner">
                <img
                  src={profileImage}
                  alt="Portrait of Juss Joosep Holdt"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-text-dark dark:text-text-light text-3xl font-light tracking-tight mb-6 flex items-center gap-2">
              About Me
              <span className="h-px w-16 bg-gradient-to-r dark:from-primary/50 from-primary-dark/50 to-transparent"></span>
            </h2>
          </div>

          {/* Bio */}
          <div className="prose prose-lg text-text-muted font-light leading-relaxed">
            <p className="mb-4">
              I'm in my final year of studying software development, with a growing focus on backend and system design. I enjoy understanding how things work beneath the surface — thinking through problems before writing code, and shaping solutions that stay maintainable as they grow.
            </p>
            <p>
              I learn best by building real projects, not following tutorials. I'm drawn to clean architecture and long-term structure, even when the first version looks rough or imperfect. For me, that challenge — turning something complex and messy into something solid and well-designed — is where building software becomes genuinely satisfying.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8 clear-both pt-4">
            <div className="flex flex-col relative group">
              <span className="text-3xl font-bold text-text-dark dark:text-text-light dark:group-hover:text-primary group-hover:text-primary-dark transition-colors">
                2+
              </span>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Years Coding
              </span>
            </div>

            <div className="flex flex-col relative group">
              <span className="text-3xl font-bold text-text-dark dark:text-text-light dark:group-hover:text-primary group-hover:text-primary-dark transition-colors">
                5+
              </span>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Projects Built
              </span>
            </div>
          </div>
        </div>

        {/* Right column – Tech Stack */}
        <div className="w-full md:w-1/3 bg-card-light/50 dark:bg-card-dark/50 backdrop-blur-sm border border-border-light dark:border-border-dark rounded-3xl p-8 relative overflow-hidden group dark:hover:border-primary/20 hover:border-primary-dark/20 transition-all duration-300">
          <h3 className="text-text-dark dark:text-text-light text-xl font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined dark:text-primary text-primary-dark">bolt</span>
            Tech Stack
          </h3>
          <p className="text-text-muted mb-4 text-sm">
            Currently deepening backend fundamentals and system design.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Supabase",
              "MySQL / MariaDB",
              "Python",
              "Java",
              "TypeScript (familiar)"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full text-text-dark dark:text-text-light dark:bg-primary/5 bg-primary-dark/5 border dark:border-primary/20 border-primary-dark/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}