/**
 * Тесты для компонента Button
 * Проверяют рендеринг, применение пропсов, обработку событий и состояния
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 * Используется для применения CSS переменных в тестах
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Button', () => {
  it('рендерится с текстом', () => {
    render(
      <TestWrapper>
        <Button>Click me</Button>
      </TestWrapper>
    );

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('применяет вариант primary по умолчанию', () => {
    render(
      <TestWrapper>
        <Button data-testid="button">Button</Button>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button--variant-primary');
  });

  it('применяет различные варианты', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button data-testid="button" variant="secondary">
          Button
        </Button>
      </TestWrapper>
    );

    let button = screen.getByTestId('button');
    expect(button).toHaveClass('button--variant-secondary');

    rerender(
      <TestWrapper>
        <Button data-testid="button" variant="outline">
          Button
        </Button>
      </TestWrapper>
    );

    button = screen.getByTestId('button');
    expect(button).toHaveClass('button--variant-outline');
  });

  it('применяет размер md по умолчанию', () => {
    render(
      <TestWrapper>
        <Button data-testid="button">Button</Button>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button--size-md');
  });

  it('применяет различные размеры', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button data-testid="button" size="sm">
          Button
        </Button>
      </TestWrapper>
    );

    let button = screen.getByTestId('button');
    expect(button).toHaveClass('button--size-sm');

    rerender(
      <TestWrapper>
        <Button data-testid="button" size="lg">
          Button
        </Button>
      </TestWrapper>
    );

    button = screen.getByTestId('button');
    expect(button).toHaveClass('button--size-lg');
  });

  it('обрабатывает клики', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <Button onClick={handleClick}>Click me</Button>
      </TestWrapper>
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('не обрабатывает клики когда disabled', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <Button disabled onClick={handleClick}>
          Click me
        </Button>
      </TestWrapper>
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button--disabled');
  });

  it('не обрабатывает клики когда loading', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <Button loading onClick={handleClick}>
          Click me
        </Button>
      </TestWrapper>
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button--loading');
  });

  it('отображает иконку слева', () => {
    const icon = <span data-testid="icon">Icon</span>;
    render(
      <TestWrapper>
        <Button icon={icon}>Button</Button>
      </TestWrapper>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('отображает иконку справа', () => {
    const iconRight = <span data-testid="icon-right">Icon</span>;
    render(
      <TestWrapper>
        <Button iconRight={iconRight}>Button</Button>
      </TestWrapper>
    );

    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  it('скрывает иконки когда loading', () => {
    const icon = <span data-testid="icon">Icon</span>;
    const iconRight = <span data-testid="icon-right">Icon</span>;
    render(
      <TestWrapper>
        <Button icon={icon} iconRight={iconRight} loading>
          Button
        </Button>
      </TestWrapper>
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('icon-right')).not.toBeInTheDocument();
  });

  it('применяет fullWidth', () => {
    render(
      <TestWrapper>
        <Button data-testid="button" fullWidth>
          Button
        </Button>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button--full-width');
  });

  it('передает остальные HTML атрибуты', () => {
    render(
      <TestWrapper>
        <Button data-testid="button" aria-label="Test button" type="submit">
          Button
        </Button>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('aria-label', 'Test button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('применяет кастомный className', () => {
    render(
      <TestWrapper>
        <Button data-testid="button" className="custom-class">
          Button
        </Button>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('custom-class');
  });
});
