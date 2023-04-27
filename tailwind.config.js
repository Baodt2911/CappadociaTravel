/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Merriweather: ['Merriweather Sans', 'sans-serif']
      },
      colors: {
        grayOpacity: '#CECECE91'

      }

    },
  },
  plugins: [],
}

