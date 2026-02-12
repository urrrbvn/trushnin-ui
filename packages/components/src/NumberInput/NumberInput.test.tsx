/**
 * Тесты для компонента NumberInput
 * Проверяют рендеринг, валидацию числовых значений и ограничения
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from './NumberInput';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('NumberInput', () => {
  it('рендерится с placeholder', () => {
    render(
      <TestWrapper>
        <NumberInput placeholder="Enter number" />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText('Enter number');
    expect(input).toBeInTheDocument();
  });

  it('принимает только числовые значения', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123' } });

    expect(handleChange).toHaveBeenCalledWith(123);
  });

  it('игнорирует нечисловые символы', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('принимает десятичные числа', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123.45' } });

    expect(handleChange).toHaveBeenCalledWith(123.45);
  });

  it('применяет минимальное значение', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput min={0} onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '-10' } });

    expect(handleChange).toHaveBeenCalledWith(0);
  });

  it('применяет максимальное значение', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput max={100} onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '200' } });

    expect(handleChange).toHaveBeenCalledWith(100);
  });

  it('возвращает null для пустой строки', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });

    expect(handleChange).toHaveBeenCalledWith(null);
  });

  it('работает в контролируемом режиме', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <TestWrapper>
        <NumberInput value={10} onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('10');

    rerender(
      <TestWrapper>
        <NumberInput value={20} onChange={handleChange} />
      </TestWrapper>
    );

    expect(input).toHaveValue('20');
  });

  it('работает в неуправляемом режиме', () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <NumberInput defaultValue={5} onChange={handleChange} />
      </TestWrapper>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('5');
  });
});
