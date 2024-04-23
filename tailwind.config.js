/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: { default: "#87CEEB" },
      colors: {
        clouds: "#F3EEE1",
        sun: "#FFDF22",
      },
    },
  },
  plugins: [],
};
