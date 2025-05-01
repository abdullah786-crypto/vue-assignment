// postcss.config.js
module.exports = {
  plugins: {
    require('tailwindcss'),
    require('autoprefixer'),
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
