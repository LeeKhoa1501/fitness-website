/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0066FF',
        'electric-blue-hover': '#1A75FF',
        'electric-cyan': '#00D2FF',
        'dark-base': '#07090E',
        'dark-surface': '#0B0E15',
        'dark-card': '#121722',
        'dark-card-hover': '#182030',
        'dark-elevated': '#1D2638',
        'cool-gray': {
          100: '#E2E8F0',
          300: '#A8B5C8',
          400: '#7E8EA6',
          600: '#42526D',
          700: '#293448',
          800: '#1D2533',
          900: '#141A24',
        }
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        numbers: ['Inter', 'monospace', 'sans-serif'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      boxShadow: {
        'electric': '0 4px 20px rgba(0, 102, 255, 0.4)',
        'cyan-glow': '0 0 24px rgba(0, 210, 255, 0.35)',
        'card': '0 8px 24px rgba(4, 7, 13, 0.6)',
      }
    },
  },
  plugins: [],
}
