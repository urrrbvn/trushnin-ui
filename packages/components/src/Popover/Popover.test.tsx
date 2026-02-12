/**
 * Тесты для компонента Popover
 * Проверяют рендеринг, позиционирование и показ/скрытие попапа
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Popover } from './Popover';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Button } from '../Button';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Popover', () => {
  beforeEach(() => {
    // Создаем портал для попапа
    const portalRoot = document.createElement('div');
    portalRoot.id = 'popover-root';
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portalRoot = document.getElementById('popover-root');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('рендерится с триггером', () => {
    render(
      <TestWrapper>
        <Popover content="Popover content">
          <button>Click me</button>
        </Popover>
      </TestWrapper>
    );

    const trigger = screen.getByText('Click me');
    expect(trigger).toBeInTheDocument();
  });

  it('открывается по клику', async () => {
    render(
      <TestWrapper>
        <Popover content="Popover content" trigger="click">
          <button>Click me</button>
        </Popover>
      </TestWrapper>
    );

    const trigger = screen.getByText('Click me');
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('закрывается по клику вне попапа', async () => {
    render(
      <TestWrapper>
        <Popover content="Popover content" trigger="click">
          <button>Click me</button>
        </Popover>
      </TestWrapper>
    );

    const trigger = screen.getByText('Click me');
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  it('открывается при наведении когда trigger="hover"', async () => {
    render(
      <TestWrapper>
        <Popover content="Popover content" trigger="hover">
          <button>Hover me</button>
        </Popover>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('поддерживает контролируемое состояние', async () => {
    const handleOpenChange = vi.fn();
    const { rerender } = render(
      <TestWrapper>
        <Popover content="Popover content" open={false} onOpenChange={handleOpenChange}>
          <button>Click me</button>
        </Popover>
      </TestWrapper>
    );

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Popover content="Popover content" open={true} onOpenChange={handleOpenChange}>
          <button>Click me</button>
        </Popover>
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });
});
