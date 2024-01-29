/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px', // @media (min-width: 640px)
      'md': '768px', //(min-width: 768px)
      'lg': '1024px', // (min-width: 1024px)
      'xl': '1280px',  // (min-width: 1280px),
      '2xl': '1536px', // (min-width: 1536px)
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
}

