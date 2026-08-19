/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#3D1220',
          dark: '#240A13',
          darker: '#15050B',
          light: '#5A1B30',
          lighter: '#782440',
          glow: 'rgba(61, 18, 32, 0.6)'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          bright: '#F7D070',
          dark: '#A3801B',
          muted: '#B89730',
          glow: 'rgba(212, 175, 55, 0.4)'
        },
        rose: {
          DEFAULT: '#E8A0A0',
          light: '#F4C5C5',
          dark: '#C77575',
          glow: 'rgba(232, 160, 160, 0.35)'
        },
        cream: {
          DEFAULT: '#F5E6D3',
          light: '#FAF3EB',
          dark: '#DCC5A9',
          muted: '#C4AE93'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Cinzel Decorative', 'Cinzel', 'Georgia', 'serif']
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35), 0 0 50px rgba(212, 175, 55, 0.15)',
        'gold-strong': '0 0 35px rgba(212, 175, 55, 0.6), 0 0 70px rgba(212, 175, 55, 0.3)',
        'rose-glow': '0 0 30px rgba(232, 160, 160, 0.3)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'vignette': 'inset 0 0 100px rgba(0,0,0,0.8)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-spin': 'spin 12s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
