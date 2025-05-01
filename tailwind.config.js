// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
        '4xl': '2100px',
        '5xl': '2400px',
        '6xl': '2700px',
        '7xl': '3000px',
        '8xl': '3300px',
      },
    },
  },
  plugins: [],
};
