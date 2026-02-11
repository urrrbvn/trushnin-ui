/**
 * Главный файл экспорта Design Tokens
 * Предоставляет доступ ко всем токенам и функциям генерации CSS переменных
 */

// Цвета
export { colors, semanticColors } from './colors';
export type { ColorPalette, SemanticColors, ColorScale } from './colors';

// Типографика
export {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  typographyStyles,
} from './typography';
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  TypographyStyle,
} from './typography';

// Отступы и размеры
export { spacing, semanticSpacing, sizes } from './spacing';
export type { Spacing, SemanticSpacing, Size } from './spacing';

// Breakpoints
export { breakpoints, mediaQueries } from './breakpoints';
export type { Breakpoint, MediaQuery } from './breakpoints';

// Формы, тени и переходы
export { borderRadius, shadows, transitionDuration, transitionTiming, transitions } from './shapes';
export type {
  BorderRadius,
  Shadow,
  TransitionDuration,
  TransitionTiming,
  Transition,
} from './shapes';

// Генерация CSS переменных
export { generateCSSVars, generateCSSVarsObject } from './generateCSSVars';
