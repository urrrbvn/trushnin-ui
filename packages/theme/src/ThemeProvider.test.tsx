/**
 * Тесты для ThemeProvider
 * Проверяют корректность применения CSS переменных и предоставления темы через контекст
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './ThemeContext';
import { generateCSSVarsObject } from '@trushnin-ui/tokens';

/**
 * Тестовый компонент для проверки доступа к теме
 * Используется в тестах для проверки работы useTheme
 */
function TestComponent() {
  const theme = useTheme();
  return (
    <div data-testid="theme-test">
      {theme.cssVariables['--trushnin-ui-color-blue-500'] ? 'Theme available' : 'No theme'}
    </div>
  );
}

describe('ThemeProvider', () => {
  it('должен применять CSS переменные по умолчанию', () => {
    const defaultCSSVars = generateCSSVarsObject();
    const { container } = render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInstanceOf(HTMLDivElement);

    // Проверяем, что CSS переменные применены через inline стили
    const inlineStyle = wrapper.getAttribute('style');
    expect(inlineStyle).toBeTruthy();
    expect(inlineStyle).toContain('--trushnin-ui-color-blue-500');
    expect(inlineStyle).toContain(defaultCSSVars['--trushnin-ui-color-blue-500']);
  });

  it('должен применять кастомные CSS переменные', () => {
    const customCSSVars = {
      '--trushnin-ui-color-blue-500': '#ff0000',
      '--trushnin-ui-color-gray-500': '#00ff00',
    };

    const { container } = render(
      <ThemeProvider theme={{ cssVariables: customCSSVars }}>
        <div>Test</div>
      </ThemeProvider>
    );

    const wrapper = container.firstChild as HTMLElement;
    const inlineStyle = wrapper.getAttribute('style');
    expect(inlineStyle).toBeTruthy();
    expect(inlineStyle).toContain('--trushnin-ui-color-blue-500');
    expect(inlineStyle).toContain('#ff0000');
  });

  it('должен предоставлять доступ к теме через контекст', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-test').textContent).toBe('Theme available');
  });

  it('должен предоставлять кастомную тему через контекст', () => {
    const customCSSVars = {
      '--trushnin-ui-color-blue-500': '#ff0000',
    };

    function CustomTestComponent() {
      const theme = useTheme();
      return (
        <div data-testid="custom-theme-test">
          {theme.cssVariables['--trushnin-ui-color-blue-500']}
        </div>
      );
    }

    render(
      <ThemeProvider theme={{ cssVariables: customCSSVars }}>
        <CustomTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('custom-theme-test').textContent).toBe('#ff0000');
  });

  it('должен рендерить дочерние компоненты', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child content</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('child').textContent).toBe('Child content');
  });

  it('должен применять все CSS переменные из токенов', () => {
    const defaultCSSVars = generateCSSVarsObject();
    const { container } = render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );

    const wrapper = container.firstChild as HTMLElement;
    const inlineStyle = wrapper.getAttribute('style');

    // Проверяем несколько ключевых переменных
    const testVars = [
      '--trushnin-ui-color-blue-500',
      '--trushnin-ui-font-size-base',
      '--trushnin-ui-spacing-4',
    ];

    testVars.forEach((varName) => {
      expect(inlineStyle).toContain(varName);
      expect(inlineStyle).toContain(defaultCSSVars[varName]);
    });
  });
});
