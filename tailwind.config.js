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
        scientifica: ['var(--font-scientifica)', 'monospace'],
        akkurat: ['var(--font-akkurat-mono)', 'monospace'],
        creep: ['var(--font-creep)', 'monospace'],
        garmin: ['var(--font-garmin)', 'monospace'],
      },
    },
  },
  plugins: [],
} 