/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        background: "#0D0D0D",
        foreground: "#A6A6A6",
        primary: "#79BF0F",
        "primary-foreground": "#0D0D0D",
        secondary: "#022601",
        "secondary-foreground": "#A6A6A6",
        accent: "#267302",
        "accent-foreground": "#A6A6A6",
        border: "#267302",
        muted: "#022601",
        "muted-foreground": "#A6A6A6",
      },
    },
  },
  plugins: [],
}