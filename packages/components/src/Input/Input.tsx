/**
 * Компонент Input (текстовое поле)
 * Используется для ввода текстовых данных с поддержкой различных состояний
 * @param size - размер поля (xs, sm, md, lg, xl)
 * @param error - состояние ошибки
 * @param disabled - состояние отключения
 * @param placeholder - текст-подсказка
 * @param label - метка поля
 * @param helperText - вспомогательный текст
 * @param icon - иконка слева
 * @param iconRight - иконка справа
 * @param fullWidth - растягивание на всю ширину
 * @param className - дополнительные CSS классы
 */

import React from 'react';
import { className } from '@trushnin-ui/utils';
import { Text } from '@trushnin-ui/primitives';
import styles from './Input.module.css';

/**
 * Пропсы для компонента Input
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Размер поля
   * По умолчанию 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Состояние ошибки
   * По умолчанию false
   */
  error?: boolean;
  /**
   * Состояние отключения
   * По умолчанию false
   */
  disabled?: boolean;
  /**
   * Текст-подсказка
   */
  placeholder?: string;
  /**
   * Метка поля
   */
  label?: string;
  /**
   * Вспомогательный текст
   */
  helperText?: string;
  /**
   * Иконка слева
   */
  icon?: React.ReactNode;
  /**
   * Иконка справа
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
}

/**
 * Компонент Input
 * Применяет стили через CSS Modules и использует токены через CSS переменные
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      disabled = false,
      placeholder,
      label,
      helperText,
      icon,
      iconRight,
      fullWidth = false,
      className: customClassName,
      id,
      ...rest
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperTextId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div
        className={className(styles.inputWrapper, {
          [styles['inputWrapper--full-width']]: fullWidth,
        })}
      >
        {label && (
          <Text
            as="label"
            htmlFor={inputId}
            className={styles.inputLabel}
            size="sm"
            weight="medium"
          >
            {label}
          </Text>
        )}
        <div
          className={className(
            styles.inputContainer,
            styles[`inputContainer--size-${size}`],
            {
              [styles['inputContainer--error']]: error,
              [styles['inputContainer--disabled']]: disabled,
              [styles['inputContainer--with-icon']]: icon,
              [styles['inputContainer--with-icon-right']]: iconRight,
            },
            customClassName
          )}
        >
          {icon && <span className={styles.inputIcon}>{icon}</span>}
          <input
            ref={ref}
            id={inputId}
            type="text"
            disabled={disabled}
            placeholder={placeholder}
            aria-invalid={error}
            aria-describedby={helperTextId}
            className={styles.input}
            {...rest}
          />
          {iconRight && <span className={styles.inputIconRight}>{iconRight}</span>}
        </div>
        {helperText && (
          <Text
            id={helperTextId}
            className={className(styles.inputHelperText, {
              [styles['inputHelperText--error']]: error,
            })}
            size="xs"
            color={error ? 'error' : 'tertiary'}
          >
            {helperText}
          </Text>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
