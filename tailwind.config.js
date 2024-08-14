// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A7F2C',
        secondary: '#6D8C3A',
        accent: '#9BCE5A',
        background: '#E5F4E3',
        text: '#3B5E40',
        border: '#BCC9B1',
        error: '#C74C4C',
        success: '#3A8A3C',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Raleway', 'Georgia', 'serif'],
        mono: ['Grey Qo', 'Courier New', 'monospace'],
        matemasie: ['Matemasie', 'sans-serif'],
      },
    },
  },
  plugins: [],
});