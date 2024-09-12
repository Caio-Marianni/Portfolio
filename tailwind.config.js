/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Orbitron", "sans-serif"],
        secFont: ["SUSE", "sans-serif"],
        terFont: ["Audiowide", "sans-serif"],
      },
      animation: {
        alive: "alive 20s linear infinite",
        bounceTop: "bounceTop 1s linear infinite",
      },
      keyframes: {
        alive: {
          "0%": { transform: "translateY(0px) translateX(0px) scale(1)" },
          "25%": { transform: "translateY(-50px) translateX(150px)  scale(1.25)" },
          "50%": { transform: "translateY(150px) translateX(-100px)  scale(1.10)" },
          "100%": { transform: "translateY(0px) translateX(0px)  scale(1)" },
        },
        bounceTop: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
