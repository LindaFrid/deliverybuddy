module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    colors: {
      primary: '#1abc9c',
      secondary: '#2ecc71',
      tertiary: '#3498db',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
  },
  plugins: [
    'tailwindcss/jit',
  ],
}