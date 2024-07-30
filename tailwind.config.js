/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"],
        cursive: ["cursive"],
      },
      keyframes: {
        "slide-up-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-up-fade-in": "slide-up-fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
