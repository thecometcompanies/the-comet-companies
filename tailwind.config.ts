import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Exact Vapi.ai Color System
        'base-bg-main': '#09090B',
        'base-bg-alt': '#FAFAFA', 
        'base-50': '#FAFAFA',
        'base-25': '#E5E5E5',
        'base-300': '#A1A1AA',
        'base-400': '#71717A',
        'base-500': '#52525B',
        'base-700': '#3F3F46',
        'base-800': '#27272A',
        'base-900': '#18181B',
        'base-950': '#09090B',
        'brand-primary': '#10B981',
        'brand-primary-hovered': '#059669',
        // Legacy colors for compatibility
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
        border: {
          DEFAULT: '#27272A',
          muted: '#18181B',
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
  plugins: [heroui()],
} satisfies Config;

export default config;