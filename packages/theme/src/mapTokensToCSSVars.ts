/**
 * Маппинг токенов в CSS переменные
 * Используется для преобразования токенов в объект CSS Custom Properties
 */

import { generateCSSVarsObject } from '@trushnin-ui/tokens';
import type { CSSVariables } from './types';

/**
 * Преобразует токены в CSS переменные
 * Используется в ThemeProvider для применения токенов через CSS Custom Properties
 * @returns объект с CSS переменными для применения в стилях
 */
export function mapTokensToCSSVars(): CSSVariables {
  return generateCSSVarsObject();
}
