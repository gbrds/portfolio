import SectionWrapper from "../components/SectionWrapper";

export default function CV() {
  const CV_PDF_PATH = "/images/CV_JussJoosepHoldt.pdf";

  return (
    <SectionWrapper id="cv">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-card-light to-text-muted dark:from-card-dark dark:to-black border border-border-light dark:border-border-dark p-1 relative overflow-hidden shadow-2xl shadow-black/40 mb-48">
        <div className="relative bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-xl rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          
          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-text-dark dark:text-text-light text-3xl font-bold mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br dark:from-primary/20 from-primary-dark/20 dark:to-primary/5 to-primary-dark/ dark:text-primary text-primary-dark border dark:border-primary/20 border-primary-dark/20">
                <span className="material-symbols-outlined text-3xl leading-none">
                  description
                </span>
              </span>
              Detailed Curriculum Vitae
            </h2>

            <p className="text-text-muted text-lg max-w-xl">
              Download my full resume to see my work experience and skills.
            </p>
          </div>

          {/* Right column */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
            
            {/* View Online */}
            <a
              href={CV_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 bg-transparent text-text-dark dark:text-text-light border border-border-dark dark:border-border-light/25 rounded-full font-bold text-base tracking-wide transition-all dark:hover:bg-primary/10 hover:bg-primary-dark/10 dark:hover:border-primary hover:border-primary-dark dark:hover:text-primary hover:text-primary-dark active:scale-95"
            >
              <span className="material-symbols-outlined mr-2">
                visibility
              </span>
              View CV Online
            </a>

            {/* Download */}
            <a
              href={CV_PDF_PATH}
              download
              className="inline-flex items-center justify-center h-14 px-10 dark:bg-primary bg-primary-dark text-text-light dark:text-text-dark rounded-full font-bold text-base tracking-wide transition-all hover:scale-105 dark:shadow-[0_0_20px_rgba(0,229,255,0.3)] shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95"
            >
              <span className="material-symbols-outlined mr-2">
                download
              </span>
              Download CV
            </a>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}