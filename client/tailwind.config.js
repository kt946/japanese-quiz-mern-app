/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D90429', // set primary color
        'primary-tint': '#FA0B33', // set primary tint color
        'primary-shade': '#B80422', // set primary shade color
      },
    },
  },
  darkMode: 'class', // set dark mode to class
  plugins: [],
};
