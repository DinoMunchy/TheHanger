/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D6D',
          light: '#FF8FA3',
          dark: '#C9184A',
        },
        secondary: {
          DEFAULT: '#F8F9FA',
          light: '#FFFFFF',
          dark: '#E9ECEF',
        },
        accent: {
          DEFAULT: '#FFD93D',
          light: '#FFE566',
          dark: '#FFC800',
        },
        neutral: {
          DEFAULT: '#2B2D42',
          light: '#8D99AE',
          dark: '#1A1B26',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 