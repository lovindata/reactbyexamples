/** @type {import('tailwindcss').Config} */
module.exports = {
  // Which files to allow Tailwind CSS (In our case React TypeScript files only)
  content: [
    "./src/**/*.{ts,tsx}",
  ],

  // Others
  theme: {
    // Re-defined viewport size variants for responsiveness
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Custom colors (usable directly in .tsx files & overwrite tailwind default colors)
      colors: {
        // Used in `_12_tlwdcss_basics`
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

        // Used in `_13_tlwdcss_homepage`
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}