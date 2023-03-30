/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './dist/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#5E60CE',
        'custom-blue': '#141C29',
        'custom-gray': '#767A85',
        'custom-gray-light': '#F9FAFC',
      },
    },
    plugins: [],
  },
};
