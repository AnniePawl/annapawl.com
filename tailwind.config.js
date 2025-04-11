/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
  },
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          fontFamily: {
            // 'mono': ['Space Mono', 'monospace'],
            'montserrat': ['Montserrat', 'sans serif'], 
            'poppins' : ["Poppins",'sans-serif'], 
            'anton':["Anton", 'sans-serif'],
            'seasons':["the-seasons",'sans-serif' ],
            'aileron':["aileron",'sans-serif' ],
            'podium':["podium-soft-variable",'sans-serif' ],
            'rock': ["Rock 3D", 'system-ui']
            
          }
        },
        plugins: [],
      }