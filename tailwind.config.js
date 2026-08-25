/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hadoop: {
          dark: '#0f172a',
          card: '#1e293b',
          accent: '#0284c7',
          yellow: '#f59e0b',
          green: '#10b981',
          red: '#ef4444',
          purple: '#8b5cf6'
        }
      }
    },
  },
  plugins: [],
}
