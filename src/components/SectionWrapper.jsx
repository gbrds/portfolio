export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full mx-auto max-w-6xl px-4 md:px-6 mb-32 ${className}`}
    >
      {children}
    </section>
  );
}
