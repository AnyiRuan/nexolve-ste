/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0C1E3A",
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#0C1E3A",
          950: "#051220"
        },
        accent: {
          DEFAULT: "#2AD573",
          50: "#F0FDF7",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#2AD573",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D"
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        'soft-lg': "0 20px 50px rgba(0,0,0,0.08)",
        'soft-xl': "0 30px 60px rgba(0,0,0,0.10)",
        'inner-soft': "inset 0 2px 8px rgba(0,0,0,0.04)",
        glow: "0 0 30px rgba(42,213,115,0.3)",
        'glow-brand': "0 0 30px rgba(12,30,58,0.2)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-elegant': 'linear-gradient(135deg, #0C1E3A 0%, #1a3456 50%, #2AD573 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(12,30,58,0.02) 100%)',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.1) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.05) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.05) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.05) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.05) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.05) 0px, transparent 50%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};