/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#08080C",
          surface: "#111116",
          purple: "#A855F7",
          pink: "#EC4899",
          muted: "#A1A1AA",
          border: "#27272A",
        },
      },
    },
  },
  plugins: [],
};