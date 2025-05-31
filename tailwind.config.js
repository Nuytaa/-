module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        scope: '#B4BABA',          // рамка border
        primary: '#000000',        // основной 
        secondary: '#323130',      // серый для текста
        accent: '#B5F0F0',         // градиент старт
        gradientEnd: '#126A69',    // нрадиент конец
        lightGray: '#D9D9D9',      // фон для бургер-меню
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],  
      },
      fontSize: {
        'xxl': '120px',    // Очень крупный заголовок
        'xl': '80px',
        'lg': '40px',
        'md': '24px',
        'sm': '18px',
        'xs': '14px',
      },
      borderRadius: {
        'xl': '40px',
      },
      screens: {
        'xs': '340px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}