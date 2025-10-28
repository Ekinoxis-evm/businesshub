import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#05DAD7',    // First color from branding
          purple: '#5628ED',  // Second color from branding
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#1A1A1A',
          border: '#333333',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          muted: '#808080',
        }
      },
      fontFamily: {
        'torus': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #05DAD7 0%, #5628ED 100%)',
        'gradient-overlay': 'linear-gradient(135deg, rgba(5, 218, 215, 0.1) 0%, rgba(86, 40, 237, 0.2) 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(5, 218, 215, 0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(5, 218, 215, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(5, 218, 215, 0)',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
