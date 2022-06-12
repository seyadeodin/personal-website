/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        "brand-orange":{
          500: '#FC825D'
        },
        "brand-blue":{
          500: '#4640D8',
          900: '#181A24'
        },
        "brand-gray":{
          300: '#DBDBDB'
        }
      }
    },
    fontFamily: {
      'sans': ['Exo']
    }
  },
  plugins: [],
}
