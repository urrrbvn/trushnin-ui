/**
 * Кнопка-иконка
 * Используется для создания квадратных кнопок с иконкой без текста
 * @param variant - вариант кнопки (primary, secondary, outline, ghost, danger)
 * @param size - размер кнопки (xs, sm, md, lg, xl)
 * @param disabled - состояние отключения
 * @param loading - состояние загрузки
 * @param aria-label - метка для доступности (обязательно)
 * @param className - дополнительные CSS классы
 * @param children - иконка
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './IconButton.module.css';

/**
 * Пропсы для компонента IconButton
 */
export interface IconButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
> {
  /**
   * Вариант кнопки
   * По умолчанию 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /**
   * Размер кнопки
   * По умолчанию 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Состояние отключения
   * По умолчанию false
   */
  disabled?: boolean;
  /**
   * Состояние загрузки
   * По умолчанию false
   */
  loading?: boolean;
  /**
   * Метка для доступности (обязательно)
   * Используется для screen readers
   */
  'aria-label': string;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * Иконка
   */
  children: React.ReactNode;
}

/**
 * Компонент IconButton
 * Применяет стили через CSS Modules и использует токены через CSS переменные
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      className: customClassName,
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        onClick={handleClick}
        className={className(
          styles.iconButton,
          styles[`iconButton--variant-${variant}`],
          styles[`iconButton--size-${size}`],
          {
            [styles['iconButton--disabled']]: isDisabled,
            [styles['iconButton--loading']]: loading,
          },
          customClassName
        )}
        {...rest}
      >
        {loading ? (
          <span className={styles['iconButton__spinner']} aria-hidden="true">
            <svg
              className={styles['iconButton__spinner-svg']}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles['iconButton__spinner-circle']}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="32"
                strokeDashoffset="32"
              >
                <animate
                  attributeName="stroke-dasharray"
                  dur="2s"
                  values="0 32;16 16;0 32;0 32"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  dur="2s"
                  values="0;-16;-32;-32"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
