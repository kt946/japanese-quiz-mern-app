/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D90429', // set primary color
        primaryHover: '#FA1F44', // set primary hover color
      },
    },
  },
  plugins: [],
}
