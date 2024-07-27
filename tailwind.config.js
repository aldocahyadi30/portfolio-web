/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.5rem', // 8px
        '3xs': '0.375rem', // 6px
      },
      colors: {
        'raisin-black': '#2E2E35',
        'eerie-black': '#212529',
        'xanthous': '#FFC86B',
        'hunyadi-yellow': '#F0BF6C',
        'sunset': '#F0C77D',
        'platinum': '#DADADA',
        'onyx': '#3E3E44',
        'jet': '#34343B',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
      },
      width: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '132': '34rem',
        
      },
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '132': '34rem',
      },
      minHeight: {
        'half-screen': '50vh',
      }
    },
  },
  plugins: [],
}

