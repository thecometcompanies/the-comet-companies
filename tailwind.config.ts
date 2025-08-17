import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Blackstone Dark Theme Colors
        background: {
          DEFAULT: '#0A0A0A',
          alt: '#111111',
          card: '#1A1A1A',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#A3A3A3',
          subtle: '#737373',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          hover: '#F5F5F5',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#D4AF37',
          muted: '#B8941F',
        },
        border: {
          DEFAULT: '#2A2A2A',
          light: '#1F1F1F',
        },
        surface: {
          DEFAULT: '#0F0F0F',
          hover: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(2.5rem, 6vw, 4rem)',
        'h2': 'clamp(2rem, 5vw, 3.5rem)',
        'h3': 'clamp(1.5rem, 3vw, 2.25rem)',
        'h4': 'clamp(1.25rem, 2.5vw, 1.5rem)',
        'body-lg': 'clamp(1rem, 2vw, 1.125rem)',
        'body': 'clamp(0.9rem, 1.5vw, 1rem)',
        'small': 'clamp(0.8rem, 1vw, 0.875rem)',
      },
      boxShadow: {
        'blackstone': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;