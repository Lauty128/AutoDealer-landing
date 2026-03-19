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
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}