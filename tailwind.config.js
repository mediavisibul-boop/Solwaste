/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#44444E',
          gold: '#BED754',
          brown: '#44444E',
          olive: '#7F9762',
          'olive-dark': '#475844',
          slate: '#5A7C8D',
          light: '#F5F5F0',
          red: '#BED754',
          gray: '#F5F5F0',
          'gold-dark': '#A0C13F',
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
