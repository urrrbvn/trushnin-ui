/**
 * Конфигурация Vitest для пакета components
 * Используется для запуска unit тестов
 */

import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', '**/*.test.ts', '**/*.test.tsx', '**/*.config.ts'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@trushnin-ui/utils': resolve(__dirname, '../utils/src'),
      '@trushnin-ui/tokens': resolve(__dirname, '../tokens/src'),
      '@trushnin-ui/theme': resolve(__dirname, '../theme/src'),
      '@trushnin-ui/primitives': resolve(__dirname, '../primitives/src'),
    },
  },
});
