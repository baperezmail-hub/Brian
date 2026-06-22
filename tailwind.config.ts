import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-mid": "#0d1e38",
        "navy-light": "#112240",
        teal: "#1D9E75",
        "teal-dark": "#0F6E56",
        "teal-bright": "#3FD9A0",
        off: "#f8fafc",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
