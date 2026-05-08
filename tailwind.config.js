/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#f5f6f8',
          100: '#e8eaef',
          200: '#c8ccd6',
          300: '#9ba2b3',
          400: '#6b7388',
          500: '#4a5266',
          600: '#363c4d',
          700: '#262b39',
          800: '#181c27',
          900: '#0d1018',
          950: '#070910'
        },
        sand: {
          50:  '#fbf9f5',
          100: '#f5f1e8',
          200: '#ebe3d0',
          300: '#dcd0b0',
          400: '#c9b88c'
        },
        brass: {
          400: '#c8a45a',
          500: '#b78d3d',
          600: '#94702f'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em',
        widestplus: '0.32em'
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 75s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'shimmer': 'shimmer 8s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
