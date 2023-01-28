/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#170025',
      'secondary': '#13001F',
      'tertiary': '#635AD9',
    },
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"]
      }
    },
  },
  plugins: [],
}