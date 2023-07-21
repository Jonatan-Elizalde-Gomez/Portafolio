/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#001021',
        'letters':'#FCEBC1',
        'secondaryColor':'#000E1C'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'victor-mono': ['Victor Mono', 'monospace'],
        'narrow': ['PT Sans Narrow', 'sans-serif'],
        'baskerville': ['Libre Baskerville', 'serif'],
        'hanuman': ['hanuman', 'serif'],
        'crimson': ['Crimson Pro', 'serif'],
      }
    },
  },
  plugins: [],
};
