/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: { max: "770px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "771px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      mi: { min: "768px" },
      // This is a preset just for the header to allow for reactive use

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: { default: "#87CEEB" },
      colors: {
        clouds: "#F3EEE1",
        sun: "#FFDF22",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
