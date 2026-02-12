/**
 * Тесты для компонента Input
 * Проверяют рендеринг, применение пропсов, обработку событий и состояния
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Input', () => {
  it('рендерится с placeholder', () => {
    render(
      <TestWrapper>
        <Input placeholder="Enter text" />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('применяет размер md по умолчанию', () => {
    render(
      <TestWrapper>
        <Input data-testid="input-container" />
      </TestWrapper>
    );

    const container = screen.getByTestId('input-container');
    expect(container).toHaveClass('inputContainer--size-md');
  });

  it('применяет различные размеры', () => {
    const { rerender } = render(
      <TestWrapper>
        <Input data-testid="input-container" size="sm" />
      </TestWrapper>
    );

    let container = screen.getByTestId('input-container');
    expect(container).toHaveClass('inputContainer--size-sm');

    rerender(
      <TestWrapper>
        <Input data-testid="input-container" size="lg" />
      </TestWrapper>
    );

    container = screen.getByTestId('input-container');
    expect(container).toHaveClass('inputContainer--size-lg');
  });

  it('отображает метку', () => {
    render(
      <TestWrapper>
        <Input label="Email" />
      </TestWrapper>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('связывает метку с полем ввода', () => {
    render(
      <TestWrapper>
        <Input label="Email" id="email-input" />
      </TestWrapper>
    );

    const label = screen.getByText('Email');
    const input = screen.getByLabelText('Email');
    expect(label).toHaveAttribute('for', 'email-input');
    expect(input).toHaveAttribute('id', 'email-input');
  });

  it('отображает вспомогательный текст', () => {
    render(
      <TestWrapper>
        <Input helperText="Enter your email address" />
      </TestWrapper>
    );

    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('применяет состояние ошибки', () => {
    render(
      <TestWrapper>
        <Input data-testid="input-container" error helperText="Error message" />
      </TestWrapper>
    );

    const container = screen.getByTestId('input-container');
    const input = container.querySelector('input');
    const helperText = screen.getByText('Error message');

    expect(container).toHaveClass('inputContainer--error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(helperText).toHaveClass('inputHelperText--error');
  });

  it('применяет состояние disabled', () => {
    render(
      <TestWrapper>
        <Input data-testid="input-container" disabled />
      </TestWrapper>
    );

    const container = screen.getByTestId('input-container');
    const input = container.querySelector('input');

    expect(container).toHaveClass('inputContainer--disabled');
    expect(input).toBeDisabled();
  });

  it('обрабатывает ввод текста', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <Input onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('test');
  });

  it('отображает иконку слева', () => {
    const icon = <span data-testid="icon">Icon</span>;
    render(
      <TestWrapper>
        <Input icon={icon} />
      </TestWrapper>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('отображает иконку справа', () => {
    const iconRight = <span data-testid="icon-right">Icon</span>;
    render(
      <TestWrapper>
        <Input iconRight={iconRight} />
      </TestWrapper>
    );

    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  it('применяет fullWidth', () => {
    render(
      <TestWrapper>
        <Input data-testid="input-wrapper" fullWidth />
      </TestWrapper>
    );

    const wrapper = screen.getByTestId('input-wrapper');
    expect(wrapper).toHaveClass('inputWrapper--full-width');
  });
});
