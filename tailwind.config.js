const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        wave1: "wave 4s linear infinite",
        wave2: "wave 4s linear infinite -2s",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addVariant }) {
      addVariant("is-active", "&.is-active");
    },
  ],
};
