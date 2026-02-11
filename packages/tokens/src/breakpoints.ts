/**
 * Токены для медиа-запросов (breakpoints)
 * Используются для создания адаптивных интерфейсов и настройки responsive поведения компонентов
 */

/**
 * Точки останова для адаптивного дизайна
 * Используются в CSS медиа-запросах и JavaScript для условного рендеринга
 */
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Медиа-запросы для использования в CSS
 * Используются в CSS Modules для создания адаптивных стилей
 */
export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
  // Максимальные ширины
  maxXs: `(max-width: ${parseInt(breakpoints.sm) - 1}px)`,
  maxSm: `(max-width: ${parseInt(breakpoints.md) - 1}px)`,
  maxMd: `(max-width: ${parseInt(breakpoints.lg) - 1}px)`,
  maxLg: `(max-width: ${parseInt(breakpoints.xl) - 1}px)`,
  maxXl: `(max-width: ${parseInt(breakpoints['2xl']) - 1}px)`,
} as const;

/**
 * Типы для breakpoints
 */
export type Breakpoint = keyof typeof breakpoints;
export type MediaQuery = keyof typeof mediaQueries;
