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
      animation: {
        move: "move 2s ease-in-out infinite",
      },
      keyframes: {
        move: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-120%)",
          },
        },
      },
    },
  },
  plugins: [],
}