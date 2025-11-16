/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0C1E3A",
        accent: "#2AD573",
        'brand-light': "#1a3a5f",
        'accent-light': "#3ae683",
        'brand-dark': "#081628"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        glow: "0 0 20px rgba(42, 213, 115, 0.3)",
        'brand-glow': "0 0 20px rgba(12, 30, 58, 0.3)",
        'xl': "0 20px 50px rgba(0,0,0,0.1)",
        '2xl': "0 25px 60px rgba(0,0,0,0.15)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};