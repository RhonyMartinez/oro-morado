/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./location-mocoa.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A49DEA',
        secondary: '#92AAC9',
        accent: '#FFFFFF'
      },
      fontFamily: {
        primary: ['Source Serif 4', 'serif'],
        secondary: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}