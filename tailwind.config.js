/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wg: {
          blue:   '#0693E3',
          purple: '#9B51E0',

          dark:   '#0A0E1A',
          darker: '#060910',
          slate:  '#1E2A3A',
          bg:     '#F4F6FA',
          muted:  '#8899AA',
        },
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
