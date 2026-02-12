/**
 * Универсальный контейнерный компонент
 * Используется для создания контейнеров с настраиваемыми отступами, размерами и layout свойствами
 * @param as - HTML тег или React компонент для рендеринга
 * @param padding - внутренние отступы (использует токены spacing)
 * @param margin - внешние отступы (использует токены spacing)
 * @param width - ширина (использует токены sizes или произвольное значение)
 * @param height - высота (использует токены sizes или произвольное значение)
 * @param display - CSS display свойство
 * @param flexDirection - направление flex контейнера
 * @param alignItems - выравнивание элементов по поперечной оси
 * @param justifyContent - выравнивание элементов по главной оси
 * @param gap - расстояние между элементами (использует токены spacing)
 * @param className - дополнительные CSS классы
 * @param children - дочерние элементы
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './Box.module.css';
import type { Spacing } from '@trushnin-ui/tokens';

/**
 * Типы для размеров из токенов
 */
type SizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'auto';

/**
 * Пропсы для компонента Box
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML тег или React компонент для рендеринга
   * По умолчанию 'div'
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  /**
   * Внутренние отступы (использует токены spacing)
   * Может быть одним значением или объектом для разных сторон
   */
  padding?: Spacing | { top?: Spacing; right?: Spacing; bottom?: Spacing; left?: Spacing };
  /**
   * Внешние отступы (использует токены spacing)
   * Может быть одним значением или объектом для разных сторон
   */
  margin?: Spacing | { top?: Spacing; right?: Spacing; bottom?: Spacing; left?: Spacing };
  /**
   * Ширина (использует токены sizes или произвольное значение)
   */
  width?: SizeToken | string;
  /**
   * Высота (использует токены sizes или произвольное значение)
   */
  height?: SizeToken | string;
  /**
   * CSS display свойство
   */
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none';
  /**
   * Направление flex контейнера
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Выравнивание элементов по поперечной оси
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /**
   * Выравнивание элементов по главной оси
   */
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * Расстояние между элементами (использует токены spacing)
   */
  gap?: Spacing;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * Дочерние элементы
   */
  children?: React.ReactNode;
}

/**
 * Универсальный контейнерный компонент
 * Применяет стили через CSS переменные из токенов
 */
export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Component = 'div',
      padding,
      margin,
      width,
      height,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      gap,
      className: customClassName,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      ...style,
    };

    // Обработка padding
    if (padding) {
      if (typeof padding === 'object') {
        if (padding.top) {
          computedStyle.paddingTop = `var(--trushnin-ui-spacing-${padding.top})`;
        }
        if (padding.right) {
          computedStyle.paddingRight = `var(--trushnin-ui-spacing-${padding.right})`;
        }
        if (padding.bottom) {
          computedStyle.paddingBottom = `var(--trushnin-ui-spacing-${padding.bottom})`;
        }
        if (padding.left) {
          computedStyle.paddingLeft = `var(--trushnin-ui-spacing-${padding.left})`;
        }
      } else {
        computedStyle.padding = `var(--trushnin-ui-spacing-${padding})`;
      }
    }

    // Обработка margin
    if (margin) {
      if (typeof margin === 'object') {
        if (margin.top) {
          computedStyle.marginTop = `var(--trushnin-ui-spacing-${margin.top})`;
        }
        if (margin.right) {
          computedStyle.marginRight = `var(--trushnin-ui-spacing-${margin.right})`;
        }
        if (margin.bottom) {
          computedStyle.marginBottom = `var(--trushnin-ui-spacing-${margin.bottom})`;
        }
        if (margin.left) {
          computedStyle.marginLeft = `var(--trushnin-ui-spacing-${margin.left})`;
        }
      } else {
        computedStyle.margin = `var(--trushnin-ui-spacing-${margin})`;
      }
    }

    // Обработка width
    if (width) {
      if (['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full', 'auto'].includes(width)) {
        computedStyle.width = `var(--trushnin-ui-size-width-${width})`;
      } else {
        computedStyle.width = width;
      }
    }

    // Обработка height
    if (height) {
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(height)) {
        computedStyle.height = `var(--trushnin-ui-size-height-${height})`;
      } else {
        computedStyle.height = height;
      }
    }

    // Обработка display и flex свойств
    if (display) {
      computedStyle.display = display;
    }
    if (flexDirection) {
      computedStyle.flexDirection = flexDirection;
    }
    if (alignItems) {
      computedStyle.alignItems = alignItems;
    }
    if (justifyContent) {
      computedStyle.justifyContent = justifyContent;
    }
    if (gap) {
      computedStyle.gap = `var(--trushnin-ui-spacing-${gap})`;
    }

    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={className(styles.box, customClassName)}
        style={computedStyle}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
