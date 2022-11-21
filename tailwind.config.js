/** @type {import('tailwindcss').Config} */
module.exports = {
  // Which files to allow Tailwind CSS (In our case React TypeScript files only)
  content: [
    "./src/**/*.{ts,tsx}",
  ],

  // Others
  darkMode: false,
  theme: {
    extend: {
      // Custom colors (usable directly in .tsx files & overwrite tailwind default colors)
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
    },
  },
  plugins: [],
}