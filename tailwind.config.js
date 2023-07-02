/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        titleBanner: ['Dancing Script', 'sans-serif']
      },
      boxShadow: {
        shadowCardSlider: '0px 0px 18px -3px rgba(0,0,0,0.75)',
      },
      backgroundImage: {
        backgroundBanner: 'linear-gradient(180deg, rgba(153,51,153,1) 0%, rgba(153,51,153,1) 35%, rgba(153,51,153,0.6923144257703081) 100%)'
      }
    },
  },
  plugins: [],
}

