module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#F8F8F0',
          400: '#F5F5DC',
          500: '#FDF6E3'
        },
        'gold': {
          100: '#FFFBEB',
          300: '#FAF089',
          400: '#F4D03F',
          500: '#D4AF37',
          600: '#B8860B'
        }
      },
      boxShadow: {
        'gold': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }
        }
      }
    }
    }
  },
  plugins: []
};