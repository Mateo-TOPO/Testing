/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './scripts/**/*.{ts,tsx}',
    './public/static/js/**/*.js',
  ],
  safelist: [
    // dynamisch via JS hinzugefügte Nav-Klassen
    'bg-navy-950/90', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20', 'border-b', 'border-white/10',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          50:  '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264',
          400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f',
          800: '#3f6212', 900: '#365314',
        },
        navy: {
          50:  '#f0f4ff', 100: '#dbe4ff', 200: '#bac8ff', 300: '#91a7ff',
          400: '#748ffc', 500: '#5c7cfa', 600: '#4263eb', 700: '#3b5bdb',
          800: '#1e2a4a', 900: '#0f172a', 950: '#0a0f1e',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
