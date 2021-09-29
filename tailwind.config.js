module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
