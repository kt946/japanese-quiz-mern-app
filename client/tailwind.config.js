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
        secondary: '#FA0B33', // set secondary color
      },
    },
  },
  plugins: [],
}
