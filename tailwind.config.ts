// tailwind.config.ts is still needed because it does things outside DaisyUI, such as:

// Content paths (essential for purging unused styles)

// Theme extensions (fill, colors, fonts, etc.)

// Any future plugins or custom utility extensions

// Global theming: Done entirely in globals.css using @plugin "daisyui/theme" syntax

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}", // App directory (pages, layouts, etc.)
    "./app/components/**/*.{ts,tsx}", // All components
    "./icons/**/*.{ts,tsx}", // Icons (you're using Tailwind here too, I assume)
    "./styles/**/*.{css}", // Any custom CSS
  ],
  theme: {
    extend: {
      fill: ({ theme }) => theme("colors"),
    },
  },
};

export default config;
