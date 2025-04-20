/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        primary: 'var(--color-primary)',
        grey: 'var(--grey)',
        white: '#FFFFFF',
        black: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'sans-serif'],
      },
      boxShadow: {
        classic: `
          0px 24px 24px -12px rgba(14, 63, 126, 0.04),
          0px 12px 12px -6px rgba(14, 63, 126, 0.04),
          0px 6px 3px rgba(42, 51, 70, 0.04),
          0px 3px 3px -1.5px rgba(42, 51, 70, 0.04),
          0px 1px 1px rgba(42, 51, 70, 0.04),
          0px 0px 0px 1px rgba(14, 63, 126, 0.04)
        `,
      },
    },
  },
  plugins: [],
}
