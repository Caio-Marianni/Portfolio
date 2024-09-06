/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Orbitron", "sans-serif"],
        secFont: ["SUSE", "sans-serif"],
        terFont: ["Audiowide", "sans-serif"],
      },
    },
  },
  plugins: [],
}