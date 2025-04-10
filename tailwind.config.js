/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.2 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fade: "fade 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
