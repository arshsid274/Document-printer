/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      /* Studio Document Workspace tokens (Stitch: "Clinical Print Studio").
         These style the app chrome only - print templates keep their own
         inline typography, see #print-root in globals.css. */
      colors: {
        surface: "#f9f9ff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "studio-mist": "#f0f4f9",
        "border-whisper": "#e2e8f0",
        "muted-steel": "#64748b",
        "calibrated-blue": "#1958b7",
        primary: "#004192",
        "on-surface": "#111c2d",
        "on-surface-variant": "#424752",
        outline: "#737784",
        "outline-variant": "#c3c6d4",
        "rail-top": "#0e2854",
        "rail-bottom": "#153b79",
        "nav-active": "#224583"
      },
      fontFamily: {
        sans: ["Geist", "Segoe UI", "Arial", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      fontSize: {
        "display-lg": [
          "32px",
          { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "600" }
        ],
        "headline-md": [
          "24px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }
        ],
        "title-sm": [
          "18px",
          { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }
        ],
        "body-base": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "label-mono": [
          "12px",
          { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "500" }
        ],
        "data-table": ["14px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "400" }]
      }
    }
  },
  plugins: []
};
