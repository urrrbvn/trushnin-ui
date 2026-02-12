/**
 * Текстовый компонент с типографическими вариантами
 * Используется для отображения текста с применением типографических токенов
 * @param as - HTML тег для рендеринга (по умолчанию 'span')
 * @param variant - типографический стиль из токенов
 * @param size - размер шрифта (переопределяет variant)
 * @param weight - вес шрифта (переопределяет variant)
 * @param color - цвет текста (использует семантические цвета из токенов)
 * @param align - выравнивание текста
 * @param className - дополнительные CSS классы
 * @param children - текстовое содержимое
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './Text.module.css';
import { typographyStyles } from '@trushnin-ui/tokens';
import type { TypographyStyle, FontSize, FontWeight } from '@trushnin-ui/tokens';

/**
 * Пропсы для компонента Text
 */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML тег для рендеринга
   * По умолчанию 'span'
   */
  as?:
    | 'span'
    | 'p'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'strong'
    | 'em'
    | 'small';
  /**
   * Типографический стиль из токенов
   * Применяет предустановленную комбинацию размера, веса и интервалов
   */
  variant?: TypographyStyle;
  /**
   * Размер шрифта (переопределяет variant)
   * Использует токены fontSizes
   */
  size?: FontSize;
  /**
   * Вес шрифта (переопределяет variant)
   * Использует токены fontWeights
   */
  weight?: FontWeight;
  /**
   * Цвет текста
   * Использует семантические цвета из токенов или произвольное значение
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
   * Выравнивание текста
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * Текстовое содержимое
   */
  children?: React.ReactNode;
}

/**
 * Текстовый компонент
 * Применяет типографические стили через CSS переменные из токенов
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = 'span',
      variant,
      size,
      weight,
      color,
      align,
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

    // Применение variant (если не переопределен size/weight)
    if (variant && !size && !weight) {
      const style = typographyStyles[variant];
      computedStyle.fontSize = style.fontSize;
      computedStyle.fontWeight = String(style.fontWeight);
      computedStyle.lineHeight = String(style.lineHeight);
      computedStyle.letterSpacing = style.letterSpacing;
      if ('fontFamily' in style && style.fontFamily) {
        computedStyle.fontFamily = style.fontFamily;
      } else {
        computedStyle.fontFamily = `var(--trushnin-ui-font-family-sans)`;
      }
    } else {
      // Применение отдельных свойств
      if (size) {
        computedStyle.fontSize = `var(--trushnin-ui-font-size-${size})`;
      }
      if (weight) {
        computedStyle.fontWeight = `var(--trushnin-ui-font-weight-${weight})`;
      }
      // Применение font-family по умолчанию
      if (variant === 'code') {
        computedStyle.fontFamily = `var(--trushnin-ui-font-family-mono)`;
      } else {
        computedStyle.fontFamily = `var(--trushnin-ui-font-family-sans)`;
      }
    }

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
      // Цвет по умолчанию
      computedStyle.color = `var(--trushnin-ui-color-semantic-text-primary)`;
    }

    // Применение выравнивания
    if (align) {
      computedStyle.textAlign = align;
    }

    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={className(styles.text, customClassName)}
        style={computedStyle}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
