import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#051424",
        surface: "#051424",
        "surface-container": "#122131",
        "surface-container-high": "#1c2b3c",
        "surface-container-highest": "#273647",
        "on-surface": "#d4e4fa",
        "on-surface-variant": "#c7c4d7",
        primary: "#c0c1ff",
        "primary-container": "#8083ff",
        "on-primary": "#1000a9",
        secondary: "#c0c6db",
        "secondary-container": "#404758",
        outline: "#908fa0",
        "outline-variant": "#464554",
        error: "#ffb4ab",
        action: "#6366f1",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        display: [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h1: [
          "48px",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.6" }],
        label: [
          "14px",
          { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" },
        ],
        chip: [
          "12px",
          { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "80px", //TODO: Remove this after replacing all sections
        "section-lg": "80px",
        "section-md": "64px",
        "section-sm": "48px",
        gutter: "24px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      backdropBlur: {
        glass: "12px",
      },
      boxShadow: {
        "glow-action": "0 0 16px rgba(99,102,241,0.5)",
        "glow-sm": "0 0 8px rgba(99,102,241,0.3)",
      },
      backgroundImage: {
        "luminous-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192,193,255,0.10) 0%, transparent 70%)",
        "luminous-cta":
          "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
