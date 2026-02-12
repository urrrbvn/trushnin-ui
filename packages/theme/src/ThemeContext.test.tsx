/**
 * Тесты для ThemeContext и useTheme
 * Проверяют корректность работы контекста и хука доступа к теме
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeContext, useTheme } from './ThemeContext';
import { ThemeProvider } from './ThemeProvider';
import { generateCSSVarsObject } from '@trushnin-ui/tokens';

/**
 * Тестовый компонент для проверки useTheme
 * Используется в тестах для проверки работы хука
 */
function TestComponent() {
  const theme = useTheme();
  return <div data-testid="theme-value">{theme.cssVariables['--trushnin-ui-color-blue-500']}</div>;
}

describe('useTheme', () => {
  it('должен возвращать тему из контекста', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const defaultCSSVars = generateCSSVarsObject();
    expect(getByTestId('theme-value').textContent).toBe(
      defaultCSSVars['--trushnin-ui-color-blue-500']
    );
  });

  it('должен выбрасывать ошибку при использовании вне ThemeProvider', () => {
    // Подавляем вывод ошибки в консоль для теста
    const consoleError = console.error;
    console.error = () => {};

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    console.error = consoleError;
  });

  it('должен предоставлять доступ ко всем CSS переменным', () => {
    function AllVarsTestComponent() {
      const theme = useTheme();
      const varCount = Object.keys(theme.cssVariables).length;
      return <div data-testid="var-count">{varCount}</div>;
    }

    const { getByTestId } = render(
      <ThemeProvider>
        <AllVarsTestComponent />
      </ThemeProvider>
    );

    const defaultCSSVars = generateCSSVarsObject();
    const expectedCount = Object.keys(defaultCSSVars).length;
    expect(getByTestId('var-count').textContent).toBe(String(expectedCount));
  });
});

describe('ThemeContext', () => {
  it('должен быть создан с начальным значением null', () => {
    expect(ThemeContext).toBeDefined();
    expect(ThemeContext._currentValue).toBeNull();
  });
});
