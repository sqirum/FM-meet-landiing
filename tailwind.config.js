/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Red Hat Display']
      }
    },
    colors: {
      primary: {
        100: '#8FE3F9',
        200: '#71C0D4',
        300: '#4D96A9'
      },
      secondary: {
        100: '#D9B8FF',
        200: '#B18BDD',
        300: '#855FB1'
      },
      neutral: {
        100: '#FAFAFA',
        200: '#87879D',
        300: '#28283D'
      },
      white: '#FFFFFF'
    },
  },
  plugins: [],
}
