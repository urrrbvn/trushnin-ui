/**
 * Тесты для функции mapTokensToCSSVars
 * Проверяют корректность преобразования токенов в CSS переменные
 */

import { describe, it, expect } from 'vitest';
import { mapTokensToCSSVars } from './mapTokensToCSSVars';
import { generateCSSVarsObject } from '@trushnin-ui/tokens';
import { colors } from '@trushnin-ui/tokens';
import { fontSizes } from '@trushnin-ui/tokens';
import { spacing } from '@trushnin-ui/tokens';

describe('mapTokensToCSSVars', () => {
  it('должна возвращать объект с CSS переменными', () => {
    const result = mapTokensToCSSVars();
    expect(typeof result).toBe('object');
    expect(result).not.toBeNull();
  });

  it('должна генерировать переменные с правильным префиксом', () => {
    const result = mapTokensToCSSVars();
    const keys = Object.keys(result);
    expect(keys.length).toBeGreaterThan(0);
    expect(keys[0]).toContain('--trushnin-ui-');
  });

  it('должна включать переменные для цветов', () => {
    const result = mapTokensToCSSVars();
    expect(result['--trushnin-ui-color-blue-500']).toBe(colors.blue[500]);
    expect(result['--trushnin-ui-color-gray-500']).toBe(colors.gray[500]);
  });

  it('должна включать переменные для типографики', () => {
    const result = mapTokensToCSSVars();
    expect(result['--trushnin-ui-font-size-base']).toBe(fontSizes.base);
    expect(result['--trushnin-ui-font-size-lg']).toBe(fontSizes.lg);
  });

  it('должна включать переменные для отступов', () => {
    const result = mapTokensToCSSVars();
    expect(result['--trushnin-ui-spacing-4']).toBe(spacing[4]);
    expect(result['--trushnin-ui-spacing-8']).toBe(spacing[8]);
  });

  it('должна возвращать тот же результат, что и generateCSSVarsObject', () => {
    const result = mapTokensToCSSVars();
    const expected = generateCSSVarsObject();

    expect(Object.keys(result).length).toBe(Object.keys(expected).length);

    // Проверяем несколько ключевых переменных
    const testVars = [
      '--trushnin-ui-color-blue-500',
      '--trushnin-ui-font-size-base',
      '--trushnin-ui-spacing-4',
    ];

    testVars.forEach((varName) => {
      expect(result[varName]).toBe(expected[varName]);
    });
  });

  it('должна включать семантические цвета', () => {
    const result = mapTokensToCSSVars();
    expect(result['--trushnin-ui-color-semantic-primary-default']).toBeDefined();
    expect(result['--trushnin-ui-color-semantic-error-default']).toBeDefined();
  });
});
