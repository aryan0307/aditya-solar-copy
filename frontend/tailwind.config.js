/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aditya Solar Brand Palette - Amber/Gold/Green Only
        primary: "#F59E0B",
        primaryDark: "#D97706",
        primaryGreen: "#22C55E",
        secondary: "#22C55E",
        accent: "#B7E4C7",
        bgLight: "#FFFCF7",
        sectionBg: "#FFF8EC",
        sectionAlt: "#FFF8EC",
        sectionLight: "#FFFDF5",
        heading: "#2D1B00",
        textDark: "#2D1B00",
        bodyText: "#5C4A30",
        borderLight: "#E5D8C7",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        // Remove all blue aliases
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        "7xl": "1440px",
      },
      boxShadow: {
        card: "0 8px 20px rgba(245, 158, 11, 0.18)",
        nav: "0 2px 10px rgba(0, 0, 0, 0.06)",
        cta: "0 8px 20px rgba(245, 158, 11, 0.18)",
        premium: "0 8px 20px rgba(245, 158, 11, 0.18)",
        subtle: "0 1px 4px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
}
