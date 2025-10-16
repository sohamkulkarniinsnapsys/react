import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        // Enable manual class-based dark mode and map custom colors to CSS variables.
        darkMode: 'class',
        content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
        theme: {
          extend: {
            colors: {
              // Use CSS variables so colors switch automatically when :root or html.dark variables change
              primary: 'rgb(var(--color-primary) / <alpha-value>)',
              background: 'rgb(var(--color-background) / <alpha-value>)',
              surface: 'rgb(var(--color-surface) / <alpha-value>)',
              text: 'rgb(var(--color-text) / <alpha-value>)',
            },
          },
        },
      },
    }),
    react(),
  ],
})
