import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="w-full flex flex-col items-center justify-center py-24 bg-card-light/30 dark:bg-card-dark/30 rounded-[3rem] border border-border-light dark:border-border-dark relative overflow-hidden mb-48">
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Icon */}
          <div className="mb-8 w-16 h-16 flex items-center justify-center bg-bg-light dark:bg-bg-dark/10 rounded-full border border-border-light dark:border-border-dark backdrop-blur-md shadow-lg">
            <span className="material-symbols-outlined text-[36px] dark:text-primary text-primary-dark">
              mail
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-text-dark dark:text-text-light text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's connect
          </h2>

          {/* Subtext */}
          <p className="text-text-muted dark:text-text-light/75 max-w-lg mb-12 text-lg font-light">
            I'm always excited to chat about new ideas, projects, internships, or just tech in general.
            Whether it's collaboration, feedback, or a coffee chat — feel free to reach out!
          </p>

          {/* Email */}
          <a
            href="mailto:joosep.holdt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-5xl font-light dark:text-primary text-primary-dark hover:text-text-light dark:hover:text-text-dark transition-colors border-b-2 dark:border-primary/20 border-primary-dark/20 dark:hover:border-white/50 hover:border-dark/50 pb-2 mb-16"
          >
            joosep.holdt@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/joosep-holdt-8b2846353/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted dark:text-text-dark dark:hover:text-primary hover:text-primary-dark transition-colors group"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                LinkedIn
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>

            <a
              href="https://github.com/gbrds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted dark:text-text-dark dark:hover:text-primary hover:text-primary-dark transition-colors group"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                GitHub
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>

            {/* Add more social links safely in the same pattern */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}