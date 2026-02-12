/**
 * React Context для темы
 * Используется для передачи темы через дерево компонентов
 */

import { createContext, useContext } from 'react';
import type { Theme } from './types';

/**
 * Контекст темы
 * Используется для доступа к теме через useTheme хук
 */
export const ThemeContext = createContext<Theme | null>(null);

/**
 * Хук для доступа к теме
 * Используется в компонентах для получения текущей темы
 * @returns объект темы или выбрасывает ошибку, если используется вне ThemeProvider
 * @throws Error если используется вне ThemeProvider
 */
export function useTheme(): Theme {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
