/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark, terminal-adjacent palette — this audience lives in editors.
        ink: '#0b1020',
        panel: '#121a2e',
        panel2: '#1a2542',
        line: '#26314f',
        fg: '#e6ebf5',
        muted: '#8b98b8',
        accent: '#5eead4', // teal — "compile" / success
        accentDim: '#2dd4bf',
        warn: '#fbbf24',
        danger: '#f87171',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
