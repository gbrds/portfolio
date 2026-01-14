export default function PageBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-light dark:bg-bg-dark">
      {/* Organic Blobs */}
      <div className="organic-bg relative w-full h-full">
        <div className="organic-blob w-[500px] h-[500px] top-[-10%] left-[-10%] bg-primary-10 absolute rounded-full animate-blob"></div>
        <div
          className="organic-blob w-[600px] h-[600px] bottom-[-10%] right-[-20%] bg-primary-20 absolute rounded-full animate-blob"
          style={{ animationDelay: "-5s" }}
        ></div>
        <div
          className="organic-blob w-[300px] h-[300px] top-[40%] left-[20%] bg-primary-30 absolute rounded-full animate-blob"
          style={{ animationDelay: "-10s" }}
        ></div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Soft Glow Circles */}
      <div className="soft-glow absolute w-[400px] h-[400px] top-[-20%] left-[-10%] rounded-full bg-glow-soft animate-float"></div>
      <div
        className="soft-glow absolute w-[350px] h-[350px] bottom-[-20%] right-[-10%] rounded-full bg-glow-soft animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Particles */}
      <div
        className="particle absolute w-1 h-1 top-[20%] left-[10%] bg-primary-10 opacity-20 rounded-full animate-float"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="particle absolute w-2 h-2 top-[60%] right-[15%] bg-primary-10 opacity-10 rounded-full animate-float"
        style={{ animationDuration: "20s", animationDelay: "1s" }}
      ></div>
      <div
        className="particle absolute w-1.5 h-1.5 bottom-[10%] left-[30%] bg-primary-10 opacity-15 rounded-full animate-float"
        style={{ animationDuration: "12s", animationDelay: "3s" }}
      ></div>

      {/* Vertical Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-light/20 dark:via-bg-dark/20 to-bg-light dark:to-bg-dark pointer-events-none"></div>
    </div>
  );
}
