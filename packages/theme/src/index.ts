/**
 * Главный файл экспорта Theme пакета
 * Предоставляет доступ к ThemeProvider и useTheme
 */

export { ThemeProvider } from './ThemeProvider';
export { useTheme, ThemeContext } from './ThemeContext';
export { mapTokensToCSSVars } from './mapTokensToCSSVars';
export type { Theme, ThemeProviderProps, CSSVariables } from './types';
