/**
 * Провайдер темы
 * Обеспечивает доступ к теме через React Context и применяет CSS переменные
 * @param theme - кастомная тема (опционально)
 * @param children - дочерние компоненты
 */

import React from 'react';
import { ThemeContext } from './ThemeContext';
import { mapTokensToCSSVars } from './mapTokensToCSSVars';
import type { Theme, ThemeProviderProps } from './types';

/**
 * Провайдер темы
 * Применяет CSS переменные из токенов и предоставляет доступ к теме через контекст
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const defaultCSSVariables = mapTokensToCSSVars();
  const cssVariables = theme?.cssVariables ?? defaultCSSVariables;

  const themeValue: Theme = {
    cssVariables,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div style={cssVariables as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
};
