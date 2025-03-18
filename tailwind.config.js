/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Georgian', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ebf7ff',
          100: '#d6eeff',
          200: '#b3defe',
          300: '#7ac7fd',
          400: '#3ca7f7',
          500: '#1389ee',
          600: '#0b6ed8',
          700: '#0e57ae',
          800: '#13478f',
          900: '#153d75',
          950: '#0f2549',
        },
        secondary: {
          50: '#f5f8fa',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        },
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};