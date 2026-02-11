/**
 * Цветовая палитра и семантические цвета
 * Используется для генерации CSS переменных и в компонентах библиотеки
 */

/**
 * Базовая цветовая палитра
 * Используется для создания семантических цветов и кастомизации темы
 */
export const colors = {
  // Синий (primary)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Серый (neutral)
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Красный (error/danger)
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  // Зеленый (success)
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  // Желтый (warning)
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  // Фиолетовый (accent)
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
} as const;

/**
 * Семантические цвета
 * Используются в компонентах для обозначения состояний и назначения
 */
export const semanticColors = {
  // Основные цвета интерфейса
  primary: {
    default: colors.blue[500],
    hover: colors.blue[600],
    active: colors.blue[700],
    light: colors.blue[100],
    dark: colors.blue[900],
  },
  // Вторичные цвета
  secondary: {
    default: colors.gray[500],
    hover: colors.gray[600],
    active: colors.gray[700],
    light: colors.gray[100],
    dark: colors.gray[900],
  },
  // Цвета для состояний
  success: {
    default: colors.green[500],
    hover: colors.green[600],
    active: colors.green[700],
    light: colors.green[100],
    dark: colors.green[900],
  },
  warning: {
    default: colors.yellow[500],
    hover: colors.yellow[600],
    active: colors.yellow[700],
    light: colors.yellow[100],
    dark: colors.yellow[900],
  },
  error: {
    default: colors.red[500],
    hover: colors.red[600],
    active: colors.red[700],
    light: colors.red[100],
    dark: colors.red[900],
  },
  // Цвета для текста
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    disabled: colors.gray[400],
    inverse: colors.gray[50],
  },
  // Цвета для фона
  background: {
    default: '#ffffff',
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    disabled: colors.gray[200],
  },
  // Цвета для границ
  border: {
    default: colors.gray[300],
    light: colors.gray[200],
    dark: colors.gray[400],
    focus: colors.blue[500],
  },
} as const;

/**
 * Типы для цветов
 */
export type ColorPalette = typeof colors;
export type SemanticColors = typeof semanticColors;
export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
