module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Poppins:"'Poppins', 'sans-serif'",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
