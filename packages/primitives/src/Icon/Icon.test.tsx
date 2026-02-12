/**
 * Тесты для компонента Icon
 * Проверяют рендеринг, применение размеров и цветов
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 * Используется для применения CSS переменных в тестах
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Icon', () => {
  it('рендерится с базовыми пропсами', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon.tagName).toBe('svg');
  });

  it('применяет размер по умолчанию', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      width: 'var(--trushnin-ui-size-height-md)',
      height: 'var(--trushnin-ui-size-height-md)',
    });
  });

  it('применяет кастомный размер', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" size="lg">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      width: 'var(--trushnin-ui-size-height-lg)',
      height: 'var(--trushnin-ui-size-height-lg)',
    });
  });

  it('применяет семантический цвет', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" color="primary">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({ color: 'var(--trushnin-ui-color-semantic-text-primary)' });
  });

  it('применяет цвет error', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" color="error">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({ color: 'var(--trushnin-ui-color-semantic-error-default)' });
  });

  it('применяет произвольный цвет', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" color="#ff0000">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({ color: '#ff0000' });
  });

  it('использует currentColor по умолчанию', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    // В jsdom currentColor нормализуется в lowercase
    const colorValue = icon.style.color.toLowerCase();
    expect(colorValue).toBe('currentcolor');
  });

  it('применяет fill и stroke для SVG', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      fill: 'currentColor',
      stroke: 'none',
    });
  });

  it('применяет кастомный className', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" className="custom-class">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-class');
  });

  it('передает остальные SVG атрибуты', () => {
    render(
      <TestWrapper>
        <Icon data-testid="icon" aria-label="Test icon" role="img">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </Icon>
      </TestWrapper>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('aria-label', 'Test icon');
    expect(icon).toHaveAttribute('role', 'img');
  });
});
