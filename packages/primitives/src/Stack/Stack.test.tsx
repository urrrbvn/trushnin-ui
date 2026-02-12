/**
 * Тесты для компонента Stack
 * Проверяют рендеринг, применение flex стилей и пропсов
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 * Используется для применения CSS переменных в тестах
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Stack', () => {
  it('рендерится с базовыми пропсами', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack">
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toBeInTheDocument();
    expect(stack).toHaveTextContent('Item 1');
    expect(stack).toHaveTextContent('Item 2');
  });

  it('применяет flex стили по умолчанию', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack">Content</Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--trushnin-ui-spacing-4)',
    });
  });

  it('применяет direction row', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" direction="row">
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ flexDirection: 'row' });
  });

  it('применяет кастомный gap', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" gap={8}>
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ gap: 'var(--trushnin-ui-spacing-8)' });
  });

  it('применяет align', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" align="center">
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ alignItems: 'center' });
  });

  it('применяет justify', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" justify="space-between">
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ justifyContent: 'space-between' });
  });

  it('применяет wrap', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" wrap>
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ flexWrap: 'wrap' });
  });

  it('не применяет wrap по умолчанию', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack">Content</Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).not.toHaveStyle({ flexWrap: 'wrap' });
  });

  it('применяет кастомный className', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" className="custom-class">
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('custom-class');
  });

  it('передает остальные HTML атрибуты', () => {
    render(
      <TestWrapper>
        <Stack data-testid="stack" aria-label="Test stack" role="group">
          Content
        </Stack>
      </TestWrapper>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveAttribute('aria-label', 'Test stack');
    expect(stack).toHaveAttribute('role', 'group');
  });
});
