/**
 * Тесты для компонента Box
 * Проверяют рендеринг, применение пропсов и стилей
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Обертка для тестирования с ThemeProvider
 * Используется для применения CSS переменных в тестах
 */
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Box', () => {
  it('рендерится с базовыми пропсами', () => {
    render(
      <TestWrapper>
        <Box data-testid="box">Test content</Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toBeInTheDocument();
    expect(box).toHaveTextContent('Test content');
  });

  it('использует правильный HTML тег по умолчанию', () => {
    render(
      <TestWrapper>
        <Box data-testid="box">Content</Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('DIV');
  });

  it('использует кастомный тег через проп as', () => {
    render(
      <TestWrapper>
        <Box as="section" data-testid="box">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('SECTION');
  });

  it('применяет padding через токены', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" padding={4}>
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ padding: 'var(--trushnin-ui-spacing-4)' });
  });

  it('применяет margin через токены', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" margin={8}>
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ margin: 'var(--trushnin-ui-spacing-8)' });
  });

  it('применяет padding для разных сторон', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" padding={{ top: 4, right: 8, bottom: 4, left: 8 }}>
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({
      paddingTop: 'var(--trushnin-ui-spacing-4)',
      paddingRight: 'var(--trushnin-ui-spacing-8)',
      paddingBottom: 'var(--trushnin-ui-spacing-4)',
      paddingLeft: 'var(--trushnin-ui-spacing-8)',
    });
  });

  it('применяет width через токены', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" width="md">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ width: 'var(--trushnin-ui-size-width-md)' });
  });

  it('применяет произвольный width', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" width="200px">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ width: '200px' });
  });

  it('применяет display свойство', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" display="flex">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ display: 'flex' });
  });

  it('применяет flexDirection', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" display="flex" flexDirection="column">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ flexDirection: 'column' });
  });

  it('применяет gap через токены', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" gap={4}>
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveStyle({ gap: 'var(--trushnin-ui-spacing-4)' });
  });

  it('применяет кастомный className', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" className="custom-class">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveClass('custom-class');
  });

  it('передает остальные HTML атрибуты', () => {
    render(
      <TestWrapper>
        <Box data-testid="box" aria-label="Test box" role="region">
          Content
        </Box>
      </TestWrapper>
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveAttribute('aria-label', 'Test box');
    expect(box).toHaveAttribute('role', 'region');
  });
});
