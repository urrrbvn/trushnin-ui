/**
 * Тесты для компонента Text
 * Проверяют рендеринг, применение типографических стилей и пропсов
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 * Используется для применения CSS переменных в тестах
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Text', () => {
  it('рендерится с базовыми пропсами', () => {
    render(
      <TestWrapper>
        <Text data-testid="text">Test content</Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Test content');
  });

  it('использует правильный HTML тег по умолчанию', () => {
    render(
      <TestWrapper>
        <Text data-testid="text">Content</Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text.tagName).toBe('SPAN');
  });

  it('использует кастомный тег через проп as', () => {
    render(
      <TestWrapper>
        <Text as="p" data-testid="text">
          Content
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text.tagName).toBe('P');
  });

  it('применяет variant для типографического стиля', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" variant="h1">
          Heading
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    // Проверяем, что стили применены (конкретные значения из typographyStyles)
    expect(text).toHaveStyle({
      fontSize: '2.25rem', // fontSizes['4xl']
      fontWeight: '700', // fontWeights.bold
    });
  });

  it('применяет size для переопределения размера', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" size="lg">
          Large text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ fontSize: 'var(--trushnin-ui-font-size-lg)' });
  });

  it('применяет weight для переопределения веса', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" weight="bold">
          Bold text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ fontWeight: 'var(--trushnin-ui-font-weight-bold)' });
  });

  it('применяет семантический цвет', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" color="primary">
          Primary text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ color: 'var(--trushnin-ui-color-semantic-text-primary)' });
  });

  it('применяет цвет error', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" color="error">
          Error text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ color: 'var(--trushnin-ui-color-semantic-error-default)' });
  });

  it('применяет произвольный цвет', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" color="#ff0000">
          Red text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ color: '#ff0000' });
  });

  it('применяет выравнивание текста', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" align="center">
          Centered text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveStyle({ textAlign: 'center' });
  });

  it('применяет font-family для variant code', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" variant="code">
          Code text
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    // Проверяем, что fontFamily содержит mono шрифт
    const fontFamily = text.style.fontFamily;
    expect(fontFamily).toContain('monospace');
  });

  it('применяет кастомный className', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" className="custom-class">
          Content
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveClass('custom-class');
  });

  it('передает остальные HTML атрибуты', () => {
    render(
      <TestWrapper>
        <Text data-testid="text" aria-label="Test text" role="text">
          Content
        </Text>
      </TestWrapper>
    );

    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('aria-label', 'Test text');
    expect(text).toHaveAttribute('role', 'text');
  });
});
