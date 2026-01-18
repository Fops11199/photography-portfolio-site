/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#1A1A1A',
        accent: {
          gold: '#D4AF37',
          rose: '#E8B4B8',
          orange: '#FF5C00',
        },
        mutes: '#A0A0A0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to bottom, rgba(212, 175, 55, 0.1), transparent)',
      }
    },
  },
  plugins: [],
}
