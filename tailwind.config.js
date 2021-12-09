module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xs-max': {'max': '479px'},
        'xs-r': {'min': '480px', 'max': '639px'},
        'sm-r': {'min': '640px', 'max': '767px'},
        'md-r': {'min': '768px', 'max': '1023px'},
        'lg-r': {'min': '1024px', 'max': '1279px'},
        'xl-r': {'min': '1280px', 'max': '1535px'},
        '2xl-r': {'min': '1536px'},
      },
      colors: {
        'primary': '#21313D',
        'secondary-dark': '#C7780F',
        'secondary-mild': '#F9ECDB',
        'secondary-light': '#FFFBF5',
        'dark': '#202E38'
      },
      listStyleType: {
        'disclosure-closed': 'disclosure-closed',
      },
      backgroundImage: {
        'background-img': "url('./assets/images/background-img.png')",
        'background-img-2': "url('./assets/images/background-img-2.png')",
        'header-main': "url('./assets/images/header-img-main.jpeg')",
        'header-img-1': "url('./assets/images/header-img-1.jpeg')",
        'header-img-2': "url('./assets/images/header-img-2.jpeg')",
        'header-img-3': "url('./assets/images/header-img-3.jpeg')",
        'header-img-4': "url('./assets/images/header-img-4.jpeg')",
        'header-img-5': "url('./assets/images/header-img-5.jpeg')",
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
        'barber-img-4': "url('./assets/images/barber-img-4.jpeg')",
        'barber-img-5': "url('./assets/images/barber-img-5.jpeg')",
        'barber-img-6': "url('./assets/images/barber-img-6.jpeg')",
        'news-img-1': "url('./assets/images/news-img-1.jpeg')",
        'news-img-2': "url('./assets/images/news-img-2.jpeg')",
        'news-img-3': "url('./assets/images/news-img-3.jpeg')",
        'news-img-4': "url('./assets/images/news-img-4.jpeg')",
        'news-img-5': "url('./assets/images/news-img-5.jpeg')",
        'news-img-6': "url('./assets/images/news-img-6.jpeg')",
        'about-img-1': "url('./assets/images/about-img-1.jpeg')",
        'about-img-2': "url('./assets/images/about-img-2.jpeg')",
        'about-img-3': "url('./assets/images/about-img-3.jpeg')",
        'about-img-4': "url('./assets/images/about-img-4.jpeg')",
        'about-img-5': "url('./assets/images/about-img-5.jpeg')",
        'about-img-6': "url('./assets/images/about-img-6.jpeg')",
        'team-img-1': "url('./assets/images/team-img-1.jpeg')",
        '404-img': "url('./assets/images/404-img.png')",
        'gallery-img-1': "url('./assets/images/gallery-img-1.jpeg')",
        'gallery-img-2': "url('./assets/images/gallery-img-2.jpeg')",
        'gallery-img-3': "url('./assets/images/gallery-img-3.jpeg')",
        'gallery-img-4': "url('./assets/images/gallery-img-4.jpeg')",
        'gallery-img-5': "url('./assets/images/gallery-img-5.jpeg')",
        'gallery-img-6': "url('./assets/images/gallery-img-6.jpeg')",
        'gallery-img-7': "url('./assets/images/gallery-img-7.jpeg')",
        'gallery-img-8': "url('./assets/images/gallery-img-8.jpeg')",
        'gallery-img-9': "url('./assets/images/gallery-img-9.jpeg')",
        'gallery-img-10': "url('./assets/images/gallery-img-10.jpeg')",
      },
      keyframes: {
        ripple: {
          '0%': { boxShadow: '0 0 0 0 rgba(199, 120, 15, 0.4), 0 0 0 1px rgba(199, 120, 15, 0.4), 0 0 0 3px rgba(199, 120, 15, 0.4), 0 0 0 5px rgba(199, 120, 15, 0.4)' },
          '100%': { boxShadow: '0 0 0 0 rgba(199, 120, 15, 0.4), 0 0 0 4px rgba(199, 120, 15, 0.4), 0 0 0 15px rgba(199, 120, 15, 0), 0 0 0 20px rgba(199, 120, 15, 0)' }
        },
        imageLoading: {
          '0%' : { backgroundColor: '#fff' },
          '50%' : { backgroundColor: '#ccc' },
          '100%' : { backgroundColor: '#fff' }
        }
      },
      animation: {
        'ripple': 'ripple 1.5s linear infinite',
        'imageLoading': 'imageLoading 1.5s linear infinite',
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
