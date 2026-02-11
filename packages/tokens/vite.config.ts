import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import { writeFileSync } from 'fs';
import dts from 'vite-plugin-dts';
import { generateCSSVars } from './src/generateCSSVars';

/**
 * Плагин для генерации CSS файла с переменными
 * Используется для создания dist/tokens.css после сборки
 */
function generateCSSPlugin(): Plugin {
  return {
    name: 'generate-css-vars',
    writeBundle() {
      const cssContent = generateCSSVars();
      const outputPath = resolve(__dirname, 'dist/tokens.css');
      writeFileSync(outputPath, cssContent, 'utf-8');
    },
  };
}

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.stories.tsx',
      ],
    }),
    generateCSSPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TrushninUITokens',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    minify: false,
  },
});
