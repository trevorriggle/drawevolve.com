import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: "var(--studio)",
        "studio-2": "var(--studio-2)",
        "studio-3": "var(--studio-3)",
        bone: "var(--bone)",
        "bone-soft": "var(--bone-soft)",
        "bone-mute": "var(--bone-mute)",
        seam: "var(--seam)",
        sang: "var(--sang)",
        "sang-soft": "var(--sang-soft)",
        moss: "var(--moss)",
        amber: "var(--amber)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
