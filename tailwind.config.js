/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E6CEF",
        secondary: "#1D182A",
        grey: "#272727",
      },
    },
  },
  plugins: [],
};
