/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wk-maroon': '#8B1A1A',
        'wk-dark-maroon': '#3d0e0e',
        'wk-gold': '#FFB800',
        'wk-beige': '#F5E6C8',
      },
      fontFamily: {
        sans: ['var(--tp-ff-body)', 'Plus Jakarta Sans', 'sans-serif'],
        jakarta: ['var(--tp-ff-body)', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
