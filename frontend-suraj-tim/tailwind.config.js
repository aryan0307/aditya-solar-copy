/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        secondary: '#121212',
        surface: '#1A1A1A',
        'primary-text': '#F5F3EF',
        'muted-text': '#B5B5B5',
        accent: '#B68D40',
        'accent-secondary': '#8E6F3E',
        'natural-wood': '#6E4B2A',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 8rem)',
        'heading': 'clamp(2rem, 5vw, 4rem)',
        'body': 'clamp(1rem, 2vw, 1.25rem)',
        'small': 'clamp(0.875rem, 1.5vw, 1rem)',
      },
      spacing: {
        'section': 'clamp(2rem, 5vw, 6rem)',
      },
      borderRadius: {
        'luxury': '18px',
        'luxury-lg': '24px',
        'luxury-xl': '28px',
      },
    },
  },
  plugins: [],
}
