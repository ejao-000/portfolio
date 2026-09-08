/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, near-black plum tones used as the base canvas
        jungle: {
          950: '#171117',
          900: '#201920',
          850: '#262027',
          800: '#2D252C',
          700: '#3C2F38',
          600: '#8C5E76',
          500: '#B28B9F',
          400: '#C9A7B8',
          300: '#DDC9D6',
          200: '#F1E8EF',
        },
        // Neutral plum-blacks
        carbon: {
          950: '#171114',
          900: '#1D161B',
          800: '#241C22',
          700: '#2D252C',
        },
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 40px -8px rgba(178, 139, 159, 0.45)',
        'card-green': '0 20px 50px -20px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'radial-jungle': 'radial-gradient(circle at 50% 0%, rgba(178,139,159,0.16), transparent 55%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
        'alert-flash': 'alertFlash 1.1s ease-in-out infinite',
        'photo-breathe': 'photoBreathe 24s ease-in-out infinite',
        'slide-right': 'slideRight 6s ease-in-out infinite',
      },
      keyframes: {
        photoBreathe: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(24px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(178,139,159,0.35)' },
          '70%': { boxShadow: '0 0 0 18px rgba(178,139,159,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(178,139,159,0)' },
        },
        alertFlash: {
          '0%, 100%': {
            backgroundColor: '#ef4444',
            boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.65), 0 8px 24px -6px rgba(239, 68, 68, 0.6)',
          },
          '50%': {
            backgroundColor: '#b91c1c',
            boxShadow: '0 0 0 16px rgba(239, 68, 68, 0), 0 8px 24px -6px rgba(239, 68, 68, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
