/**
 * Типы для системы тем
 * Используются в ThemeProvider и useTheme для типизации темы
 */

import { generateCSSVarsObject } from '@trushnin-ui/tokens';

/**
 * Объект с CSS переменными
 * Используется для применения токенов через CSS Custom Properties
 */
export type CSSVariables = ReturnType<typeof generateCSSVarsObject>;

/**
 * Базовая тема
 * Содержит все токены и CSS переменные
 */
export interface Theme {
  /**
   * CSS переменные для применения в стилях
   * Используется для передачи токенов через CSS Custom Properties
   */
  cssVariables: CSSVariables;
}

/**
 * Пропсы для ThemeProvider
 * Используются для настройки провайдера темы
 */
export interface ThemeProviderProps {
  /**
   * Кастомная тема (опционально)
   * Если не указана, используется тема по умолчанию
   */
  theme?: Partial<Theme>;
  /**
   * Дочерние компоненты
   * Компоненты, которые будут иметь доступ к теме через useTheme
   */
  children: React.ReactNode;
}
