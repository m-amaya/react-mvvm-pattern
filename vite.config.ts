/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-mvvm-pattern/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [react()],
});
