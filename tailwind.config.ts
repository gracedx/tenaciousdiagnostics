import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      "#FFFFFF",
          text:    "#1A2B3C",
          accent:  "#0D9488",
          surface: "#F0FAFA",
        },
        teal: {
          50:  "#F0FAFA",
          100: "#CCEFED",
          200: "#99DED9",
          300: "#66CDC5",
          400: "#33BCB1",
          500: "#10A99D",
          600: "#0D9488",
          700: "#0B7E74",
          800: "#086860",
          900: "#05524C",
        },
        slate: {
          900: "#1A2B3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display:  ["clamp(2.5rem, 5vw, 4rem)",  { lineHeight: "1.1" }],
        headline: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
