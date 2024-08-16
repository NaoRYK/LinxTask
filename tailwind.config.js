/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainGreen': '#ECFDF5',
        'secondaryGreen': '#D2F9E6',
        'tertiaryGreen': '#084C3C',
        'outlineGrey': '#565458',
        'primaryDark': '#000000',
        'secondaryDark': '#141414',
        'tertiaryDark': '#242424',
      },
      fontFamily: {
        'kulimPark': ['Kulim Park', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
