/**
 * Обертка для иконок
 * Используется для унификации отображения иконок с применением размеров из токенов
 * @param size - размер иконки (использует токены sizes)
 * @param color - цвет иконки (использует семантические цвета из токенов)
 * @param className - дополнительные CSS классы
 * @param children - SVG или другой контент иконки
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './Icon.module.css';

/**
 * Пропсы для компонента Icon
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Размер иконки
   * Использует токены sizes для высоты и ширины
   * По умолчанию 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Цвет иконки
   * Использует семантические цвета из токенов или произвольное значение
   * По умолчанию наследует цвет текста
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'error'
    | 'success'
    | 'warning'
    | string;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * SVG или другой контент иконки
   */
  children?: React.ReactNode;
}

/**
 * Компонент Icon
 * Применяет размеры и цвета через CSS переменные из токенов
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', color, className: customClassName, style, children, ...rest }, ref) => {
    const computedStyle: React.CSSProperties = {
      ...style,
    };

    // Применение размера
    const sizeMap: Record<string, string> = {
      xs: 'var(--trushnin-ui-size-height-xs)',
      sm: 'var(--trushnin-ui-size-height-sm)',
      md: 'var(--trushnin-ui-size-height-md)',
      lg: 'var(--trushnin-ui-size-height-lg)',
      xl: 'var(--trushnin-ui-size-height-xl)',
    };

    computedStyle.width = sizeMap[size];
    computedStyle.height = sizeMap[size];

    // Применение цвета
    if (color) {
      const semanticColors = [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'error',
        'success',
        'warning',
      ];
      if (semanticColors.includes(color)) {
        if (color === 'error' || color === 'success' || color === 'warning') {
          computedStyle.color = `var(--trushnin-ui-color-semantic-${color}-default)`;
        } else {
          computedStyle.color = `var(--trushnin-ui-color-semantic-text-${color})`;
        }
      } else {
        computedStyle.color = color;
      }
    } else {
      // Наследование цвета текста
      computedStyle.color = 'currentColor';
    }

    // Установка fill и stroke для SVG
    computedStyle.fill = 'currentColor';
    computedStyle.stroke = 'none';

    return (
      <svg
        ref={ref}
        className={className(styles.icon, customClassName)}
        style={computedStyle}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
