module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'mega-sena':'#6BEFA3',
      'quina':'#8666EF',
      'lotofacil':'#DD7AC6',
      'lotomania':'#FFAB64',
      'timemania':'#5AAD7D',
      'diadesorte':'#BFAF83',
      'white':'#ffffff'
    },
    extend: {
      backgroundColor:{
        skin: {
          base: 'var(--background-color-concurso)'
        }
      },
      fill:{
        skin: {
          base: 'var(--background-color-concurso)'
        }
      },
      fontFamily:{
        'montserrat':['Montserrat']
      },
  
    },
  },
  plugins: [],
}
