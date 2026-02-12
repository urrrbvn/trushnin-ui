/**
 * Стилизованная кнопка с поддержкой иконок
 * Используется для создания интерактивных кнопок с различными вариантами и размерами
 * @param variant - вариант кнопки (primary, secondary, outline, ghost, danger)
 * @param size - размер кнопки (xs, sm, md, lg, xl)
 * @param disabled - состояние отключения
 * @param loading - состояние загрузки
 * @param icon - иконка слева от текста
 * @param iconRight - иконка справа от текста
 * @param fullWidth - растягивание на всю ширину
 * @param className - дополнительные CSS классы
 * @param children - содержимое кнопки
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import styles from './Button.module.css';

/**
 * Пропсы для компонента Button
 */
export interface ButtonProps extends Omit<
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
   * Иконка слева от текста
   */
  icon?: React.ReactNode;
  /**
   * Иконка справа от текста
   */
  iconRight?: React.ReactNode;
  /**
   * Растягивание на всю ширину
   * По умолчанию false
   */
  fullWidth?: boolean;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * Содержимое кнопки
   */
  children?: React.ReactNode;
}

/**
 * Компонент Button
 * Применяет стили через CSS Modules и использует токены через CSS переменные
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      icon,
      iconRight,
      fullWidth = false,
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
          styles.button,
          styles[`button--variant-${variant}`],
          styles[`button--size-${size}`],
          {
            [styles['button--disabled']]: isDisabled,
            [styles['button--loading']]: loading,
            [styles['button--full-width']]: fullWidth,
          },
          customClassName
        )}
        {...rest}
      >
        {loading && (
          <span className={styles['button__spinner']} aria-hidden="true">
            <svg
              className={styles['button__spinner-svg']}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles['button__spinner-circle']}
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
        )}
        {!loading && icon && <span className={styles['button__icon']}>{icon}</span>}
        {children && <span className={styles['button__content']}>{children}</span>}
        {!loading && iconRight && <span className={styles['button__icon-right']}>{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
