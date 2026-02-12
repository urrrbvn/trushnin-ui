/**
 * Тесты для компонента Select
 * Проверяют рендеринг, выбор опций, открытие/закрытие списка
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Select } from './Select';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select', () => {
  beforeEach(() => {
    // Создаем портал для выпадающего списка
    const portalRoot = document.createElement('div');
    portalRoot.id = 'select-root';
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portalRoot = document.getElementById('select-root');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('рендерится с placeholder', () => {
    render(
      <TestWrapper>
        <Select options={options} placeholder="Choose option" />
      </TestWrapper>
    );

    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('открывает список при клике', async () => {
    render(
      <TestWrapper>
        <Select options={options} />
      </TestWrapper>
    );

    const select = screen.getByRole('combobox');
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  it('выбирает опцию при клике', async () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <Select options={options} onChange={handleChange} />
      </TestWrapper>
    );

    const select = screen.getByRole('combobox');
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('1');
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('работает в контролируемом режиме', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <TestWrapper>
        <Select options={options} value="1" onChange={handleChange} />
      </TestWrapper>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Select options={options} value="2" onChange={handleChange} />
      </TestWrapper>
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('работает в неуправляемом режиме', async () => {
    render(
      <TestWrapper>
        <Select options={options} defaultValue="1" />
      </TestWrapper>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('не открывается когда disabled', () => {
    render(
      <TestWrapper>
        <Select options={options} disabled />
      </TestWrapper>
    );

    const select = screen.getByRole('combobox');
    fireEvent.click(select);

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('не выбирает отключенную опцию', async () => {
    const handleChange = vi.fn();
    const optionsWithDisabled = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2', disabled: true },
    ];

    render(
      <TestWrapper>
        <Select options={optionsWithDisabled} onChange={handleChange} />
      </TestWrapper>
    );

    const select = screen.getByRole('combobox');
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    const disabledOption = screen.getByText('Option 2');
    fireEvent.click(disabledOption);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('отображает метку', () => {
    render(
      <TestWrapper>
        <Select options={options} label="Choose option" />
      </TestWrapper>
    );

    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('отображает вспомогательный текст', () => {
    render(
      <TestWrapper>
        <Select options={options} helperText="Select an option" />
      </TestWrapper>
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
