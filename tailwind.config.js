/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: '#6366f1'
      }
    }
  },
  plugins: []
}
