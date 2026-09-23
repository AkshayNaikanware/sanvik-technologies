import type { Config } from "tailwindcss";

// Design tokens for the engineering/industrial-tech site.
// Merge this into your project's tailwind.config.ts.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#10131A", // base dark section bg
          900: "#141822",
          800: "#1B2130", // card/panel bg on dark
          700: "#242C40",
        },
        line: {
          800: "#2B3247", // hairline borders on dark
          200: "#E4E1D8", // hairline borders on light
        },
        paper: {
          50: "#F6F4EE", // light section bg
        },
        ink: {
          900: "#14151A", // body text on light
        },
        muted: {
          500: "#61636B",
          300: "#9CA0AE", // secondary text on dark
        },
        copper: {
          DEFAULT: "#F2A649", // the one accent color, used consistently
          dark: "#D98A2C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "8px",
        xl: "10px",
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(to right, #2B3247 1px, transparent 1px), linear-gradient(to bottom, #2B3247 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
