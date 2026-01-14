import { useState } from "react";

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button is already handled by Navbar */}
      {open && (
        <div className="fixed inset-0 bg-black/30 dark:bg-black/70 z-40 flex flex-col items-center justify-center gap-6 text-text-primary-light dark:text-text-primary-dark text-xl">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}