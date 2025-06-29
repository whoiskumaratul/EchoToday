/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          'FaktCondensed','AvenirNextCondensed-Medium',
          'Segoe UI',
          'sans-serif'
        ]
      }
    },
   
  },
  plugins: [],
}