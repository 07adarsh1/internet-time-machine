/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raw: ['"Times New Roman"', 'Times', 'serif'],
        pixel: ['"Courier New"', 'monospace'],
        early2000: ['"Comic Sans MS"', '"Impact"', 'sans-serif'],
        web2: ['Tahoma', 'Verdana', 'sans-serif'],
        skeuo: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        flat: ['Roboto', 'sans-serif'],
        bento: ['Inter', 'sans-serif'],
        future: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        nudge: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate(-6px, 4px) rotate(-1.5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'translate(6px, -4px) rotate(1.5deg)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' }
        }
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        nudge: 'nudge 0.5s ease-in-out',
        blink: 'blink 1s infinite',
      }
    },
  },
  plugins: [],
}