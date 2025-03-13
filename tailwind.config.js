/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        scientifica: ['var(--font-scientifica)'],
        akkurat: ['var(--font-akkurat-mono)'],
        creep: ['var(--font-creep)'],
      },
    },
  },
  plugins: [],
} 