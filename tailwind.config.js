/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dcac0c",
        "primary-dark": "#b88f0a",
        "primary-light": "#f7d560",
        "brand-dark": "#111B32",
        "brand-darker": "#0B1222",
        "brand-card": "#16223D",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}
