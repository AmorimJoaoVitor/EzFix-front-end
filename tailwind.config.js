module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    maxHeight: {
      'screen/2':'150vh',
     },
     minHeight: {
      'screen-25': '75vh',
      'screen': '100vh',
     },
     minWidth:{
      '20vw':'20vw',
     },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        '96': '400px',
        '15':'17%',
        '45': '48%',
        '12': '12%',
        '20vw': '20vw',
        '3vw' : '4vw',
        'screen-25': '75vh',
        'screen-15': '85vh',
      },
      backgroundImage: {
        'banner': "url('/Component 49.png')",
        'banner_tecnico': "url('/banner-tecnico.jpg')"
      }
    },
    colors: {
      blue: {
        light: '#C2E1F6',
        DEFAULT: '#008BEA',
        dark: '#15374E',
        dark_light: '#235475' ,
        light_dark: '#9dd4f9'
      },
      white: {
        DEFAULT: '#ffffff'
      },
      black: {
        DEFAULT: '#000000'
      },
      gray:{
        DEFAULT: '#CCCCCC',
        light: '#F1F6F9',
        dark: '#7C7878',
        opacity: "rgba(49,49,49,0.8)",
        blue: "#9CBED4"
      },
      amarelo:{
        DEFAULT: '#ffd700',
        andamento: '#ffe600',
      },
      roxo:{
        DEFAULT: '#B09FFF',
        darker: '#A212E5',
      },
      green:{
        DEFAULT: '#14CA3C',
        light: '#01FF1A',
      },
      red: '#C62424',
      error:{
        DEFAULT: '#FFA3A3',
        dark: '#F38484',
      },
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}