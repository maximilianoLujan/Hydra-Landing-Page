/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {},
    colors: {
      fondo:'#302C42',
      letra:'rgba(192, 183, 232, 1)',
      blanco:'rgb(255 251 235);',
      blancoclaro:'rgba(255, 255, 255, 0.95)',
      buttontext:'rgba(52, 48, 69, 1)',
      gray:'#f1f5f9'
    },
  },
  plugins: [],
};
