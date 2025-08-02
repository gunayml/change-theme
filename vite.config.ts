/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',  
    include: ['**/*.unit.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',  
      reporter: ['text', 'html', 'json'], 
      include: ['src/components/**/*.tsx', 'src/context/**/*.ts'],
      exclude: ['src/App.tsx', 'src/main.tsx', '**/index.ts']
    },
  },
})
