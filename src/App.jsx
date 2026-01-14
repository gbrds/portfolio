import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import PageBackground from "./layout/PageBackground";

import { ModalProvider } from "./context/ModalContext";
import { sections } from "./content/sections";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import CV from "./sections/CV";
import Contact from "./sections/Contact";

const sectionComponents = {
  home: Hero,
  projects: Projects,
  about: About,
  cv: CV,
  contact: Contact,
};

export default function App() {
  return (
    <ModalProvider>
      <PageBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col gap-24 min-h-screen w-full">
        {/* GLOBAL CONTENT WIDTH CONTAINER */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          {sections.map(
            (sec) =>
              sec.enabled &&
              React.createElement(sectionComponents[sec.id], {
                key: sec.id,
              })
          )}
        </div>
      </main>

      <Footer />
    </ModalProvider>
  );
}

