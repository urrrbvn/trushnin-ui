/**
 * Генерация CSS Custom Properties из токенов
 * Используется для создания CSS файла с переменными, которые применяются в компонентах
 */

import { colors, semanticColors } from './colors';
import { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from './typography';
import { spacing, semanticSpacing, sizes } from './spacing';
import { breakpoints } from './breakpoints';
import { borderRadius, shadows, transitionDuration, transitionTiming, transitions } from './shapes';

/**
 * Префикс для CSS переменных
 * Используется для изоляции переменных библиотеки от переменных приложения
 */
const CSS_VAR_PREFIX = 'trushnin-ui';

/**
 * Преобразует объект в плоскую структуру CSS переменных
 * @param obj - объект с вложенными значениями
 * @param prefix - префикс для имени переменной
 * @returns объект с плоской структурой CSS переменных
 */
function flattenToCSSVars(
  obj: Record<string, unknown>,
  prefix: string = ''
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenToCSSVars(value as Record<string, unknown>, varName));
    } else {
      result[`--${CSS_VAR_PREFIX}-${varName}`] = String(value);
    }
  }

  return result;
}

/**
 * Генерирует CSS строку с переменными
 * @returns CSS строка с :root селектором и всеми переменными
 */
export function generateCSSVars(): string {
  const cssVars: Record<string, string> = {};

  // Цвета
  Object.assign(cssVars, flattenToCSSVars(colors as Record<string, unknown>, 'color'));
  Object.assign(
    cssVars,
    flattenToCSSVars(semanticColors as Record<string, unknown>, 'color-semantic')
  );

  // Типографика
  Object.assign(cssVars, flattenToCSSVars(fontFamilies as Record<string, unknown>, 'font-family'));
  Object.assign(cssVars, flattenToCSSVars(fontSizes as Record<string, unknown>, 'font-size'));
  Object.assign(cssVars, flattenToCSSVars(fontWeights as Record<string, unknown>, 'font-weight'));
  Object.assign(cssVars, flattenToCSSVars(lineHeights as Record<string, unknown>, 'line-height'));
  Object.assign(
    cssVars,
    flattenToCSSVars(letterSpacings as Record<string, unknown>, 'letter-spacing')
  );

  // Отступы
  Object.assign(cssVars, flattenToCSSVars(spacing as Record<string, unknown>, 'spacing'));
  Object.assign(
    cssVars,
    flattenToCSSVars(semanticSpacing as Record<string, unknown>, 'spacing-semantic')
  );
  Object.assign(cssVars, flattenToCSSVars(sizes as Record<string, unknown>, 'size'));

  // Breakpoints
  Object.assign(cssVars, flattenToCSSVars(breakpoints as Record<string, unknown>, 'breakpoint'));

  // Формы и эффекты
  Object.assign(cssVars, flattenToCSSVars(borderRadius as Record<string, unknown>, 'radius'));
  Object.assign(cssVars, flattenToCSSVars(shadows as Record<string, unknown>, 'shadow'));
  Object.assign(
    cssVars,
    flattenToCSSVars(transitionDuration as Record<string, unknown>, 'transition-duration')
  );
  Object.assign(
    cssVars,
    flattenToCSSVars(transitionTiming as Record<string, unknown>, 'transition-timing')
  );
  Object.assign(cssVars, flattenToCSSVars(transitions as Record<string, unknown>, 'transition'));

  // Формируем CSS строку
  const cssLines = Object.entries(cssVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  return `:root {\n${cssLines}\n}\n`;
}

/**
 * Генерирует объект с CSS переменными для использования в JavaScript
 * @returns объект с парами ключ-значение для CSS переменных
 */
export function generateCSSVarsObject(): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Цвета
  Object.assign(cssVars, flattenToCSSVars(colors as Record<string, unknown>, 'color'));
  Object.assign(
    cssVars,
    flattenToCSSVars(semanticColors as Record<string, unknown>, 'color-semantic')
  );

  // Типографика
  Object.assign(cssVars, flattenToCSSVars(fontFamilies as Record<string, unknown>, 'font-family'));
  Object.assign(cssVars, flattenToCSSVars(fontSizes as Record<string, unknown>, 'font-size'));
  Object.assign(cssVars, flattenToCSSVars(fontWeights as Record<string, unknown>, 'font-weight'));
  Object.assign(cssVars, flattenToCSSVars(lineHeights as Record<string, unknown>, 'line-height'));
  Object.assign(
    cssVars,
    flattenToCSSVars(letterSpacings as Record<string, unknown>, 'letter-spacing')
  );

  // Отступы
  Object.assign(cssVars, flattenToCSSVars(spacing as Record<string, unknown>, 'spacing'));
  Object.assign(
    cssVars,
    flattenToCSSVars(semanticSpacing as Record<string, unknown>, 'spacing-semantic')
  );
  Object.assign(cssVars, flattenToCSSVars(sizes as Record<string, unknown>, 'size'));

  // Breakpoints
  Object.assign(cssVars, flattenToCSSVars(breakpoints as Record<string, unknown>, 'breakpoint'));

  // Формы и эффекты
  Object.assign(cssVars, flattenToCSSVars(borderRadius as Record<string, unknown>, 'radius'));
  Object.assign(cssVars, flattenToCSSVars(shadows as Record<string, unknown>, 'shadow'));
  Object.assign(
    cssVars,
    flattenToCSSVars(transitionDuration as Record<string, unknown>, 'transition-duration')
  );
  Object.assign(
    cssVars,
    flattenToCSSVars(transitionTiming as Record<string, unknown>, 'transition-timing')
  );
  Object.assign(cssVars, flattenToCSSVars(transitions as Record<string, unknown>, 'transition'));

  return cssVars;
}
