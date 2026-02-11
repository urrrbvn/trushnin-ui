/**
 * Токены для форм, теней и переходов
 * Используются для настройки визуального стиля компонентов (скругления, тени, анимации)
 */

/**
 * Радиусы скругления
 * Используются для настройки border-radius в компонентах
 */
export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

/**
 * Тени
 * Используются для создания глубины и визуальной иерархии
 */
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

/**
 * Длительности переходов
 * Используются для настройки времени анимаций и переходов
 */
export const transitionDuration = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Функции плавности переходов
 * Используются для настройки easing функций анимаций
 */
export const transitionTiming = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/**
 * Предустановленные переходы
 * Используются для быстрого применения анимаций в компонентах
 */
export const transitions = {
  default: `${transitionDuration.base} ${transitionTiming.easeInOut}`,
  fast: `${transitionDuration.fast} ${transitionTiming.easeInOut}`,
  slow: `${transitionDuration.slow} ${transitionTiming.easeInOut}`,
  colors: `${transitionDuration.base} ${transitionTiming.easeInOut}`,
  transform: `${transitionDuration.base} ${transitionTiming.easeOut}`,
} as const;

/**
 * Типы для форм и переходов
 */
export type BorderRadius = keyof typeof borderRadius;
export type Shadow = keyof typeof shadows;
export type TransitionDuration = keyof typeof transitionDuration;
export type TransitionTiming = keyof typeof transitionTiming;
export type Transition = keyof typeof transitions;
