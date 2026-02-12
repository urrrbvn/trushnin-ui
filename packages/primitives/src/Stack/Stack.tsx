/**
 * Компонент для вертикального/горизонтального расположения элементов
 * Используется для создания контейнеров с автоматическим gap между элементами
 * @param direction - направление расположения элементов (row или column)
 * @param gap - расстояние между элементами (использует токены spacing)
 * @param align - выравнивание элементов по поперечной оси
 * @param justify - выравнивание элементов по главной оси
 * @param wrap - перенос элементов на новую строку
 * @param className - дополнительные CSS классы
 * @param children - дочерние элементы
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './Stack.module.css';
import type { Spacing } from '@trushnin-ui/tokens';

/**
 * Пропсы для компонента Stack
 */
export interface StackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'dir'> {
  /**
   * Направление расположения элементов
   * По умолчанию 'column'
   */
  direction?: 'row' | 'column';
  /**
   * Расстояние между элементами (использует токены spacing)
   * По умолчанию используется spacing-4
   */
  gap?: Spacing;
  /**
   * Выравнивание элементов по поперечной оси
   */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /**
   * Выравнивание элементов по главной оси
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * Перенос элементов на новую строку
   * По умолчанию false
   */
  wrap?: boolean;
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
 * Компонент Stack
 * Применяет flex стили через CSS переменные из токенов
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'column',
      gap = 4,
      align,
      justify,
      wrap = false,
      className: customClassName,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: direction,
      gap: `var(--trushnin-ui-spacing-${gap})`,
      ...style,
    };

    if (align) {
      computedStyle.alignItems = align;
    }
    if (justify) {
      computedStyle.justifyContent = justify;
    }
    if (wrap) {
      computedStyle.flexWrap = 'wrap';
    }

    return (
      <div
        ref={ref}
        className={className(styles.stack, customClassName)}
        style={computedStyle}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
