export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[100vh] text-center mb-32 pt-[6rem] md:pt-[8rem]"
    >
      {/* Available Badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-primary-30 border-primary-dark/30 dark:bg-primary-10 bg-primary-dark/10 dark:text-primary text-primary-dark text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_15px_var(--glow-soft)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary bg-primary-dark opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-primary bg-primary-dark"></span>
        </span>
        Open to opportunities
      </div>

      {/* Hero Title */}
      <h1 className="text-text-dark dark:text-text-light text-5xl md:text-8xl font-light tracking-tight mb-8 leading-tight">
        Building the <br />
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-100 dark:via-primary dark:to-cyan-100 from-primary-dark via-primary to-primary-dark animate-gradient drop-shadow-[0_0_25px_var(--glow-medium)]">
          Future
        </span>
        , one line at a time
      </h1>

      {/* Description */}
      <p className="text-text-muted dark:text-text-light/65 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed tracking-wide">
        I enjoy building software where good architecture, clean code, and thoughtful design come together to make complex ideas feel simple.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">
        <a
          href="#projects"
          className="group flex items-center justify-center h-12 px-8 bg-primary-dark dark:bg-text-light text-text-light dark:text-text-dark rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 hover:bg-primary dark:hover:bg-primary/95 hover:shadow-[0_0_35px_var(--glow-medium)]"
        >
          View My Projects
          <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>

        <a
          href="#contact"
          className="flex items-center justify-center h-12 px-8 dark:bg-primary-10 bg-primary-dark/10 border dark:border-primary-30 border-primary-dark/30 text-primary-dark dark:text-primary rounded-full font-bold text-sm tracking-wide dark:hover:bg-primary-20 hover:bg-primary-dark/20 dark:hover:border-primary-40 hover:border-primary-dark/40 transition-all backdrop-blur-sm"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
