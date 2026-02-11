/**
 * Токены для отступов и размеров
 * Используются в компонентах для настройки padding, margin, gap и других размерных свойств
 */

/**
 * Базовая шкала отступов
 * Используется для создания консистентных интервалов между элементами
 */
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
  40: '10rem', // 160px
  48: '12rem', // 192px
  56: '16rem', // 256px
  64: '20rem', // 320px
} as const;

/**
 * Семантические отступы
 * Используются для стандартизации отступов в компонентах
 */
export const semanticSpacing = {
  // Внутренние отступы компонентов
  padding: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[4], // 16px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
  },
  // Внешние отступы между компонентами
  margin: {
    xs: spacing[2], // 8px
    sm: spacing[4], // 16px
    md: spacing[6], // 24px
    lg: spacing[8], // 32px
    xl: spacing[12], // 48px
  },
  // Отступы между элементами в контейнерах
  gap: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[4], // 16px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
  },
} as const;

/**
 * Размеры компонентов
 * Используются для настройки высоты и ширины элементов интерфейса
 */
export const sizes = {
  // Высоты для интерактивных элементов
  height: {
    xs: '1.5rem', // 24px
    sm: '2rem', // 32px
    md: '2.5rem', // 40px
    lg: '3rem', // 48px
    xl: '3.5rem', // 56px
  },
  // Минимальные и максимальные ширины
  width: {
    xs: '12rem', // 192px
    sm: '16rem', // 256px
    md: '24rem', // 384px
    lg: '32rem', // 512px
    xl: '48rem', // 768px
    '2xl': '64rem', // 1024px
    full: '100%',
    auto: 'auto',
  },
} as const;

/**
 * Типы для отступов и размеров
 */
export type Spacing = keyof typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;
export type Size = keyof typeof sizes.height | keyof typeof sizes.width;
