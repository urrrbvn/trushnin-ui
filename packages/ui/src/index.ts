/**
 * Trushnin UI - Главный публичный API
 *
 * Этот файл предоставляет единую точку входа для всех компонентов,
 * примитивов, темы, утилит и токенов библиотеки.
 *
 * @example
 * ```tsx
 * import { Button, ThemeProvider, useTheme } from 'trushnin-ui';
 * ```
 */

// ============================================
// Components - Стилизованные компоненты
// ============================================
export {
  Button,
  IconButton,
  Input,
  NumberInput,
  Select,
  Tooltip,
  Popover,
} from '@trushnin-ui/components';

export type {
  ButtonProps,
  IconButtonProps,
  InputProps,
  NumberInputProps,
  SelectProps,
  SelectOption,
  TooltipProps,
  PopoverProps,
} from '@trushnin-ui/components';

// ============================================
// Primitives - Примитивные компоненты
// ============================================
export { Box, Text, Stack, Icon } from '@trushnin-ui/primitives';

export type { BoxProps, TextProps, StackProps, IconProps } from '@trushnin-ui/primitives';

// ============================================
// Theme - Тема и провайдеры
// ============================================
export { ThemeProvider, useTheme, ThemeContext, mapTokensToCSSVars } from '@trushnin-ui/theme';

export type { Theme, ThemeProviderProps, CSSVariables } from '@trushnin-ui/theme';

// ============================================
// Tokens - Design Tokens
// ============================================
export {
  colors,
  semanticColors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  typographyStyles,
  spacing,
  semanticSpacing,
  sizes,
  breakpoints,
  mediaQueries,
  borderRadius,
  shadows,
  transitionDuration,
  transitionTiming,
  transitions,
  generateCSSVars,
  generateCSSVarsObject,
} from '@trushnin-ui/tokens';

export type {
  ColorPalette,
  SemanticColors,
  ColorScale,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  TypographyStyle,
  Spacing,
  SemanticSpacing,
  Size,
  Breakpoint,
  MediaQuery,
  BorderRadius,
  Shadow,
  TransitionDuration,
  TransitionTiming,
  Transition,
} from '@trushnin-ui/tokens';

// ============================================
// Utils - Утилиты
// ============================================
export { className } from '@trushnin-ui/utils';
