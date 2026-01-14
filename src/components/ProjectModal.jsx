// ProjectModal.jsx
import React, { useState } from "react";
import { NavButton } from "./NavButton";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const images = Object.keys(project)
    .filter((key) => key.startsWith("image") && project[key])
    .map((key) => project[key]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  const nextImage = () =>
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : i));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div
        className="fixed inset-0 bg-bg-dark/80 cursor-default transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl dark:bg-card-dark bg-card-light border-t-2 dark:border-t-primary border-t-primary-dark border-x border-b dark:border-border-light/10 border-border-dark/10 rounded-3xl shadow-2xl dark:shadow-primary/20 shadow-primary-dark/20 overflow-hidden flex flex-col md:flex-row animate-scale-in z-10">
        
        <NavButton
          icon="close"
          onClick={onClose}
          ariaLabel="Close modal"
          className="absolute top-4 right-4 z-50"
        />

        {/* Left: Image — ONLY HEIGHT ADJUSTED */}
        <div className="w-full md:w-1/2 h-48 md:h-auto max-h-[35vh] relative flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="object-contain w-full h-full rounded-xl cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />

          {currentIndex > 0 && (
            <NavButton
              icon="chevron_left"
              onClick={prevImage}
              ariaLabel="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
          )}

          {currentIndex < images.length - 1 && (
            <NavButton
              icon="chevron_right"
              onClick={nextImage}
              ariaLabel="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          )}
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
          <h3 className="dark:text-text-light text-text-dark text-2xl font-bold">
            {project.title}
          </h3>
          <span className="text-text-muted text-xs font-mono">{project.year}</span>
          <p className="text-text-muted leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-medium dark:text-primary text-primary-dark dark:bg-primary/5 bg-primary-dark/5 border dark:border-primary/20 border-primary-dark/20 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-4">
            {project.liveLink ? (
              <>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center h-12 px-6 dark:bg-primary bg-primary-dark dark:text-text-dark text-text-light rounded-full font-bold transition-all hover:scale-105"
                >
                  View Live
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center h-12 px-6 dark:bg-primary bg-primary-dark dark:text-text-dark text-text-light rounded-full font-bold transition-all hover:scale-105"
                >
                  View Github
                </a>
              </>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center h-12 px-6 dark:bg-primary bg-primary-dark dark:text-text-dark text-text-light rounded-full font-bold transition-all hover:scale-105"
              >
                View Github
              </a>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </div>
  );
}