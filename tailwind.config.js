/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Typography System
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      
      // Semantic Font Sizes with fluid scaling
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.015em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },

      // Semantic Color System
      colors: {
        brand: {
          // Primary Colors
          primary: '#BED754',      // Main brand green-gold
          'primary-dark': '#A0C13F',
          'primary-darker': '#8BAF35',
          'primary-light': '#D4E587',
          'primary-lighter': '#E8F2BA',
          
          // Accent Colors
          accent: '#BED754',       // For CTAs and highlights
          'accent-dark': '#A0C13F',
          
          // Neutral Colors
          dark: '#1A1A1A',         // Dark backgrounds
          'dark-muted': '#2D2D2D',
          'dark-lighter': '#3A3A3A',
          
          charcoal: '#44444E',     // Text on light backgrounds
          'charcoal-light': '#5A5A64',
          
          // Background Colors
          cream: '#FAF7F2',        // Light warm background
          light: '#F5F5F0',        // Slightly darker warm background
          'light-muted': '#EDEDEB',
          
          // Natural Colors
          olive: '#7F9762',        // Natural green
          'olive-dark': '#6B8152',
          'olive-darker': '#475844',
          
          // Additional Colors
          slate: '#5A7C8D',        // Cool accent
          'slate-dark': '#4A6B7B',
        },
      },

      // Semantic Spacing System (8px base grid)
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },

      // Responsive Breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },

      // Shadow System for Premium Feel
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06)',
        'premium-xl': '0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'glow-gold': '0 0 20px rgba(190, 215, 84, 0.3)',
        'glow-gold-lg': '0 0 40px rgba(190, 215, 84, 0.4)',
      },

      // Animation Timings
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      // Border Radius for Consistency
      borderRadius: {
        'premium': '0.75rem',    // 12px
        'premium-lg': '1rem',    // 16px
        'premium-xl': '1.25rem', // 20px
      },
    },
  },
  plugins: [],
}
