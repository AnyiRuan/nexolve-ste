/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand:"#0C1E3A", accent:"#2AD573" },
      boxShadow:{ soft:"0 8px 30px rgba(0,0,0,0.06)" }
    },
  },
  plugins: [],
};