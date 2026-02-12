/**
 * Тесты для компонента IconButton
 * Проверяют рендеринг, применение пропсов, обработку событий и состояния
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Icon } from '@trushnin-ui/primitives';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('IconButton', () => {
  const icon = (
    <Icon size="sm">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </Icon>
  );

  it('рендерится с иконкой', () => {
    render(
      <TestWrapper>
        <IconButton aria-label="Test button">{icon}</IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('требует aria-label', () => {
    render(
      <TestWrapper>
        <IconButton aria-label="Test button">{icon}</IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    expect(button).toHaveAttribute('aria-label', 'Test button');
  });

  it('применяет вариант primary по умолчанию', () => {
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" data-testid="button">
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('iconButton--variant-primary');
  });

  it('применяет различные варианты', () => {
    const { rerender } = render(
      <TestWrapper>
        <IconButton aria-label="Test button" data-testid="button" variant="secondary">
          {icon}
        </IconButton>
      </TestWrapper>
    );

    let button = screen.getByTestId('button');
    expect(button).toHaveClass('iconButton--variant-secondary');

    rerender(
      <TestWrapper>
        <IconButton aria-label="Test button" data-testid="button" variant="outline">
          {icon}
        </IconButton>
      </TestWrapper>
    );

    button = screen.getByTestId('button');
    expect(button).toHaveClass('iconButton--variant-outline');
  });

  it('применяет размер md по умолчанию', () => {
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" data-testid="button">
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('iconButton--size-md');
  });

  it('обрабатывает клики', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" onClick={handleClick}>
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('не обрабатывает клики когда disabled', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" disabled onClick={handleClick}>
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).toHaveClass('iconButton--disabled');
  });

  it('не обрабатывает клики когда loading', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" loading onClick={handleClick}>
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).toHaveClass('iconButton--loading');
  });

  it('отображает спиннер когда loading', () => {
    render(
      <TestWrapper>
        <IconButton aria-label="Test button" loading>
          {icon}
        </IconButton>
      </TestWrapper>
    );

    const button = screen.getByLabelText('Test button');
    const spinner = button.querySelector('.iconButton__spinner');
    expect(spinner).toBeInTheDocument();
  });
});
