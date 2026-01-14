// NavButton.jsx
import React from "react";

export const NavButton = ({ icon, onClick, ariaLabel, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={`
      flex items-center justify-center w-12 h-12 rounded-full
      bg-black/40 dark:bg-white/15 backdrop-blur-md
      border border-white/10 dark:border-white/5
      text-primary dark:text-primary
      hover:bg-black/60 dark:hover:bg-white/25
      hover:scale-110 active:scale-95
      transition-all duration-300
      shadow-lg shadow-black/30 dark:shadow-black/50
      ${className}
    `}
  >
    <span className="material-symbols-outlined text-2xl">{icon}</span>
  </button>
);