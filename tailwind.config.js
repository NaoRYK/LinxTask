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
        'buttonGreen': '#71E4B9',
        'textGreen': '#09926C',
        'loginGreen': '#17CF97',
        'inputGreen': '#A9F1D2',
        'outlineGrey': '#565458',
        'primaryDark': '#000000',
        'secondaryDark': '#141414',
        'tertiaryDark': '#242424',
        'custom-checked': '#09926C',
        'custom-background': '#71E4B9',
      },
      fontFamily: {
        'kulimPark': ['Kulim Park', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
