import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t dark:border-text-muted border-text-muted bg-background-dark py-8 px-4 relative z-20">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 dark:text-text-light text-text-muted text-sm">
        {/* Left: copyright */}
        <p className="dark:text-text-light text-text-muted">
          © {new Date().getFullYear()} Juss Joosep Holdt. All rights reserved.
        </p>

        {/* Right: designed with icon */}
        <div className="flex items-center gap-2 dark:text-text-light text-text-muted">
          <span>Designed with</span>
          <span className="material-symbols-outlined text-[16px] dark:text-primary text-primary-dark animate-pulse">
            favorite
          </span>
          <span>and Code.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
