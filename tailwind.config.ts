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
        // Vapi.ai Inspired Minimal Theme Colors
        background: {
          DEFAULT: '#09090B',
          card: '#0F0F0F',
          muted: '#18181B',
        },
        foreground: {
          DEFAULT: '#FAFAFA',
          muted: '#A1A1AA',
          subtle: '#71717A',
        },
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#27272A',
          foreground: '#FAFAFA',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          foreground: '#FFFFFF',
        },
        border: {
          DEFAULT: '#27272A',
          muted: '#18181B',
        },
        muted: {
          DEFAULT: '#18181B',
          foreground: '#A1A1AA',
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