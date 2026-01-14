/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary accent
        primary: "#00e5ff",
        "primary-5": "rgba(0, 229, 255, 0.05)",
        "primary-10": "rgba(0, 229, 255, 0.1)",
        "primary-20": "rgba(0, 229, 255, 0.2)",
        "primary-30": "rgba(0, 229, 255, 0.3)",
        "primary-40": "rgba(0, 229, 255, 0.4)",
        "primary-50": "rgba(0, 229, 255, 0.5)",
        "primary-60": "rgba(0, 229, 255, 0.6)",
        "glow-soft": "rgba(0, 229, 255, 0.3)",
        "glow-medium": "rgba(0, 229, 255, 0.5)",
        "glow-strong": "rgba(0, 229, 255, 0.7)",

        // Light mode
        "primary-dark": "#0ea1ca",
        "primary-text": "#164e63",

        // Backgrounds
        "bg-light": "#f8fafc",
        "bg-dark": "#080a0e",

        // Cards
        "card-light": "#ffffff",
        "card-dark": "#0e1218",

        // Borders
        "border-light": "#e2e8f0",
        "border-dark": "#1a222e",

        // Text
        "text-light": "#f1f5f9",
        "text-dark": "#1e293b",
        "text-muted": "#64748b",

        // Noise & overlay
        noise: "#ffffff",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      backgroundImage: {
        noise:
          "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 7s infinite",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};