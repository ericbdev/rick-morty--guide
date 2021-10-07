const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

//https://tailwindcss.com/docs/configuration
module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './packages/features/**/*.{ts,tsx}',
    './packages/ui/components/**/*.{ts,tsx}',
    './packages/ui/structure/**/*.{ts,tsx}',
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
