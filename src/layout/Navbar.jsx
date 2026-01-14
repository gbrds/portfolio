import { useState, useEffect } from "react";
import MobileMenu from "../components/MobileMenu";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about", label: "About", href: "#about" },
  { id: "cv", label: "CV", href: "#cv" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Dark mode: default true, restored from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : true;
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Sync dark mode to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 px-4">
      <nav className="flex items-center justify-between w-full max-w-[960px] bg-bg-light/60 dark:bg-bg-dark/60 backdrop-blur-2xl border border-white/20 dark:border-black/20
 rounded-full px-6 py-3 shadow-lg shadow-black/20">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
              size-8 rounded-full
              bg-gradient-to-br from-primary-40 to-transparent
              flex items-center justify-center text-primary-dark
              dark:text-primary
              border dark:border-primary border-primary-dark
              dark:shadow-[0_0_12px_rgba(0,229,255,0.35)] shadow-[0_0_12px_rgba(6,182,212,0.35)]
            "
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </div>

          <a
            href="home"
            className="text-text-muted dark:text-text-light text-xl font-bold tracking-tight dark:hover:text-primary hover:text-primary-dark transition-all border-b dark:border-primary/40 border-primary-dark/40 pb-0.5 drop-shadow-[0_0_8px_var(--glow-soft)]"
          >
            Juss Joosep Holdt
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${activeSection === link.id
                  ? "dark:text-primary text-primary-dark font-semibold"
                  : "text-text-muted dark:text-text-light dark:hover:text-primary hover:text-primary-dark"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark / Light toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center size-9 rounded-full bg-black/5 dark:bg-white/5 text-text-muted dark:hover:text-primary hover:text-primary-dark hover:bg-black/10 dark:hover:bg-white/10 transition-all border border-transparent"
            aria-label="Toggle dark/light mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex items-center justify-center size-9 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu links={navLinks} onClose={() => setMobileOpen(false)} />}
    </div>
  );
}