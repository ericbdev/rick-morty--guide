const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

//https://tailwindcss.com/docs/configuration
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './packages/core/components/**/*.{js,ts,jsx,tsx}',
    './packages/core/structure/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [forms, typography],
};
