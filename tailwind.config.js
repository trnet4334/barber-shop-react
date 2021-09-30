module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'reservation-img': "url('./assets/images/reservation-img.jpeg')",
      }
    },
    fontFamily: {
      'noto': ['"Noto Sans TC"', 'sans-serif'],
      'sati': ['"Satisfy"', 'cursive']
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      fontWeight: ['hover', 'focus'],
      transform: ['hover'],
      backgroundColor: ['odd', 'even']
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
