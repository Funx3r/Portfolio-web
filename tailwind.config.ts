import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-black": "#000000",
        "paper-white": "#FFFFFF",
        "primary-container": "#ffd60a",
        "primary-fixed": "#ffe171",
        "primary-fixed-dim": "#e9c400",
        "on-primary-container": "#705d00",
        "secondary": "#712ae2",
        "secondary-container": "#8a4cfc",
        "secondary-fixed": "#eaddff",
        "secondary-fixed-dim": "#d2bbff",
        "on-secondary-container": "#fffbff",
        "tertiary": "#b70071",
        "tertiary-container": "#ffcbde",
        "tertiary-fixed": "#ffd9e5",
        "tertiary-fixed-dim": "#ffb0cf",
        "on-tertiary-container": "#b70071",
        "background": "#f9f9f9",
        "on-background": "#1a1c1c",
        "surface": "#f9f9f9",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f4",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#4d4632",
        "outline": "#7f775f",
        "outline-variant": "#d0c6ab",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "section-padding": "80px",
        "shadow-offset": "6px",
        "border-width": "4px",
        "container-max": "1200px",
        gutter: "24px",
        "margin-mobile": "16px",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-xl-mobile": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "mono-label": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-bold": ["14px", { lineHeight: "1.0", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
