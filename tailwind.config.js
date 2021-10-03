module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('./assets/images/background-img.png')",
        'background-img-2': "url('./assets/images/background-img-2.png')",
        'header-main': "url('./assets/images/header-img-main.jpeg')",
        'header-img-1': "url('./assets/images/header-img-1.jpeg')",
        'header-banner': "url('./assets/images/header-banner.jpeg')",
        'reservation-img': "url('./assets/images/reservation-img.jpeg')",
        'work-bg': "url('./assets/images/work-bg.jpeg')",
        'work-img-1': "url('./assets/images/work-img-1.jpeg')",
        'work-img-2': "url('./assets/images/work-img-2.jpeg')",
        'work-img-3': "url('./assets/images/work-img-3.jpeg')",
        'work-img-4': "url('./assets/images/work-img-4.jpeg')",
        'protocol-img': "url('./assets/images/protocol-img-1.png')",
        'service-img': "url('./assets/images/service-img.jpeg')",
        'barber-img-1': "url('./assets/images/barber-img-1.jpeg')",
        'barber-img-2': "url('./assets/images/barber-img-2.jpeg')",
        'barber-img-3': "url('./assets/images/barber-img-3.jpeg')",
        'news-img-1': "url('./assets/images/news-img-1.jpeg')",
        'news-img-2': "url('./assets/images/news-img-2.jpeg')",
        'news-img-3': "url('./assets/images/news-img-3.jpeg')",
      },
      backgroundColor: {
        'primary': '#21313D',
        'secondary': '#FFFBF5',
        'btn-primary': '#C7780F',
        'list-item': '#202E38'
      },
      textColor: {
        'primary': '#21313D',
        'secondary': '#C7780F',
        'btn-text': '#F9ECDB',
      },
      ringColor: {
        'btn-primary': '#C7780F',
        'btn-secondary': '#FFFBF5',
      },
      borderColor: {
        'secondary': '#C7780F',
      },
      keyframes: {
        ripple: {
          '0%': { boxShadow: '0 0 0 0 rgba(199, 120, 15, 0.4), 0 0 0 1px rgba(199, 120, 15, 0.4), 0 0 0 3px rgba(199, 120, 15, 0.4), 0 0 0 5px rgba(199, 120, 15, 0.4)' },
          '100%': { boxShadow: '0 0 0 0 rgba(199, 120, 15, 0.4), 0 0 0 4px rgba(199, 120, 15, 0.4), 0 0 0 15px rgba(199, 120, 15, 0), 0 0 0 20px rgba(199, 120, 15, 0)' }
        }
      },
      animation: {
        'ripple': 'ripple 1.5s linear infinite',
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
      backgroundColor: ['odd', 'even'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
      brightness: ['hover'],
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
