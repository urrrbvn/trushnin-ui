/**
 * Тесты для функций генерации CSS переменных
 * Проверяют корректность преобразования токенов в CSS Custom Properties
 */

import { describe, it, expect } from 'vitest';
import { generateCSSVars, generateCSSVarsObject } from './generateCSSVars';
import { colors } from './colors';
import { fontSizes } from './typography';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';
import { borderRadius } from './shapes';

describe('generateCSSVars', () => {
  it('должна возвращать строку с :root селектором', () => {
    const result = generateCSSVars();
    expect(result).toContain(':root {');
    expect(result).toContain('}');
  });

  it('должна генерировать CSS переменные с правильным префиксом', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-');
  });

  it('должна включать переменные для цветов', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-color-blue-500');
    expect(result).toContain(colors.blue[500]);
  });

  it('должна включать переменные для типографики', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-font-size-base');
    expect(result).toContain(fontSizes.base);
  });

  it('должна включать переменные для отступов', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-spacing-4');
    expect(result).toContain(spacing[4]);
  });

  it('должна включать переменные для breakpoints', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-breakpoint-md');
    expect(result).toContain(breakpoints.md);
  });

  it('должна включать переменные для радиусов', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-radius-lg');
    expect(result).toContain(borderRadius.lg);
  });

  it('должна включать семантические цвета', () => {
    const result = generateCSSVars();
    expect(result).toContain('--trushnin-ui-color-semantic-primary-default');
  });

  it('должна форматировать CSS переменные правильно', () => {
    const result = generateCSSVars();
    const lines = result.split('\n');

    // Проверяем формат строки переменной
    const varLine = lines.find((line) => line.includes('--trushnin-ui-color-blue-500'));
    expect(varLine).toBeDefined();
    expect(varLine).toMatch(/^\s+--trushnin-ui-color-blue-500: #3b82f6;$/);
  });

  it('должна заканчиваться переносом строки', () => {
    const result = generateCSSVars();
    expect(result.endsWith('\n')).toBe(true);
  });
});

describe('generateCSSVarsObject', () => {
  it('должна возвращать объект с CSS переменными', () => {
    const result = generateCSSVarsObject();
    expect(typeof result).toBe('object');
    expect(result).not.toBeNull();
  });

  it('должна генерировать переменные с правильным префиксом', () => {
    const result = generateCSSVarsObject();
    const keys = Object.keys(result);
    expect(keys.length).toBeGreaterThan(0);
    expect(keys[0]).toContain('--trushnin-ui-');
  });

  it('должна включать переменные для цветов', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-color-blue-500']).toBe(colors.blue[500]);
    expect(result['--trushnin-ui-color-gray-500']).toBe(colors.gray[500]);
  });

  it('должна включать переменные для типографики', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-font-size-base']).toBe(fontSizes.base);
    expect(result['--trushnin-ui-font-size-lg']).toBe(fontSizes.lg);
  });

  it('должна включать переменные для отступов', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-spacing-4']).toBe(spacing[4]);
    expect(result['--trushnin-ui-spacing-8']).toBe(spacing[8]);
  });

  it('должна включать переменные для breakpoints', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-breakpoint-md']).toBe(breakpoints.md);
    expect(result['--trushnin-ui-breakpoint-lg']).toBe(breakpoints.lg);
  });

  it('должна включать семантические цвета', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-color-semantic-primary-default']).toBeDefined();
    expect(result['--trushnin-ui-color-semantic-error-default']).toBeDefined();
  });

  it('должна включать переменные для радиусов', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-radius-lg']).toBe(borderRadius.lg);
    expect(result['--trushnin-ui-radius-full']).toBe(borderRadius.full);
  });

  it('должна включать переменные для отступов семантических', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-spacing-semantic-padding-md']).toBeDefined();
    expect(result['--trushnin-ui-spacing-semantic-gap-md']).toBeDefined();
  });

  it('должна включать переменные для размеров', () => {
    const result = generateCSSVarsObject();
    expect(result['--trushnin-ui-size-height-md']).toBeDefined();
    expect(result['--trushnin-ui-size-width-md']).toBeDefined();
  });
});

describe('Согласованность generateCSSVars и generateCSSVarsObject', () => {
  it('должны генерировать одинаковые переменные', () => {
    const cssString = generateCSSVars();
    const cssObject = generateCSSVarsObject();

    // Извлекаем переменные из CSS строки
    const cssVarsFromString: Record<string, string> = {};
    const lines = cssString.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s+(--[^:]+):\s*(.+);$/);
      if (match) {
        const [, key, value] = match;
        cssVarsFromString[key] = value.trim();
      }
    }

    // Сравниваем количество переменных
    expect(Object.keys(cssVarsFromString).length).toBe(Object.keys(cssObject).length);

    // Проверяем, что все переменные из объекта присутствуют в строке
    for (const [key, value] of Object.entries(cssObject)) {
      expect(cssVarsFromString[key]).toBe(value);
    }
  });

  it('должны использовать одинаковые значения для одних и тех же токенов', () => {
    const cssString = generateCSSVars();
    const cssObject = generateCSSVarsObject();

    // Проверяем несколько конкретных переменных
    const testVars = [
      '--trushnin-ui-color-blue-500',
      '--trushnin-ui-font-size-base',
      '--trushnin-ui-spacing-4',
      '--trushnin-ui-breakpoint-md',
      '--trushnin-ui-radius-lg',
    ];

    for (const varName of testVars) {
      const valueInObject = cssObject[varName];
      expect(valueInObject).toBeDefined();
      expect(cssString).toContain(`${varName}: ${valueInObject}`);
    }
  });
});
