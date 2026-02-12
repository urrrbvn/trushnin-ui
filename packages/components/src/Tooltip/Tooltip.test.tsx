/**
 * Тесты для компонента Tooltip
 * Проверяют рендеринг, позиционирование и показ/скрытие тултипа
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Button } from '../Button';

/**
 * Обертка для тестирования с ThemeProvider
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Tooltip', () => {
  beforeEach(() => {
    // Создаем портал для тултипа
    const portalRoot = document.createElement('div');
    portalRoot.id = 'tooltip-root';
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portalRoot = document.getElementById('tooltip-root');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('рендерится с триггером', () => {
    render(
      <TestWrapper>
        <Tooltip content="Tooltip content">
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    expect(trigger).toBeInTheDocument();
  });

  it('показывает тултип при наведении', async () => {
    render(
      <TestWrapper>
        <Tooltip content="Tooltip content" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
  });

  it('скрывает тултип при уходе мыши', async () => {
    render(
      <TestWrapper>
        <Tooltip content="Tooltip content" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);

    await waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });
  });

  it('применяет позицию по умолчанию top', async () => {
    render(
      <TestWrapper>
        <Tooltip content="Tooltip content" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByText('Tooltip content');
      expect(tooltip).toHaveClass('tooltip--top');
    });
  });

  it('применяет различные позиции', async () => {
    const { rerender } = render(
      <TestWrapper>
        <Tooltip content="Tooltip content" placement="bottom" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByText('Tooltip content');
      expect(tooltip).toHaveClass('tooltip--bottom');
    });

    rerender(
      <TestWrapper>
        <Tooltip content="Tooltip content" placement="left" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      </TestWrapper>
    );

    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByText('Tooltip content');
      expect(tooltip).toHaveClass('tooltip--left');
    });
  });

  it('работает с focus событиями', async () => {
    render(
      <TestWrapper>
        <Tooltip content="Tooltip content" delay={0}>
          <button>Focus me</button>
        </Tooltip>
      </TestWrapper>
    );

    const trigger = screen.getByText('Focus me');
    fireEvent.focus(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
  });
});
