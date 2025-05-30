import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '7.5rem', // 120px
      },
      spacing: {
        '100': '100px',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], 
      },
      letterSpacing: {
        tightest: '-0.07rem',
      },
    },
  },
  plugins: [],
})