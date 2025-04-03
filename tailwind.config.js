/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '640px',
      'mil': '960px',
      'lg': '1024px',
      'xl': '1281px',
      'xxl': '1470px',
       '3xl': '1820px',
    },
    extend: {
      colors: {
        whiteBG: '#F4F4F4',
        lightPink: '#FFC0D6',
        darkPink: '#E5457D',
        black: '#1E1E1E',
      },
      fontFamily: {
        sans: ['Darker Grotesque', 'sans-serif'], // replace with your custom font
        darker: ['Darker Grotesque', 'sans-serif'], // custom font
      },
    },
  },
  plugins: [],
}

