/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
         primaryColor: 'var(--primary-color)',
         secondaryColor: 'var(--secondary-color)',
         invertPrimaryColor: 'var(--invert-primary-color)',
         invertSecondaryColor: 'var(--invert-secondary-color)',
      },
    },
  },
  plugins: [],
}

