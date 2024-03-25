/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FA4A0C',
        dark: '#252B42',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h2': ['50px', {
          lineHeight: '57px',
          letterSpacing: '0.2px',
          fontWeight: '700',
        }],
        'h4': ['24px', {
          lineHeight: '38px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        }],
      }
    },
  },
  plugins: [],
};
