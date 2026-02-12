/**
 * Компонент NumberInput (числовое поле)
 * Используется для ввода только числовых данных с валидацией
 * @param min - минимальное значение
 * @param max - максимальное значение
 * @param step - шаг изменения значения
 * @param size - размер поля (xs, sm, md, lg, xl)
 * @param error - состояние ошибки
 * @param disabled - состояние отключения
 * @param placeholder - текст-подсказка
 * @param label - метка поля
 * @param helperText - вспомогательный текст
 * @param fullWidth - растягивание на всю ширину
 * @param className - дополнительные CSS классы
 */

import React, { useState } from 'react';
import { Input, InputProps } from '../Input';
import styles from './NumberInput.module.css';

/**
 * Пропсы для компонента NumberInput
 */
export interface NumberInputProps extends Omit<
  InputProps,
  'type' | 'onChange' | 'value' | 'defaultValue'
> {
  /**
   * Минимальное значение
   */
  min?: number;
  /**
   * Максимальное значение
   */
  max?: number;
  /**
   * Шаг изменения значения
   * По умолчанию 1
   */
  step?: number;
  /**
   * Callback при изменении значения
   */
  onChange?: (value: number | null) => void;
  /**
   * Значение поля
   */
  value?: number | null;
  /**
   * Значение по умолчанию
   */
  defaultValue?: number | null;
}

/**
 * Компонент NumberInput
 * Расширяет Input с валидацией только числовых значений
 */
export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { min, max, step = 1, onChange, value: controlledValue, defaultValue, onBlur, ...rest },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string>(
      defaultValue?.toString() || controlledValue?.toString() || ''
    );
    const isControlled = controlledValue !== undefined;
    const displayValue = isControlled ? controlledValue?.toString() || '' : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Разрешаем пустую строку, минус, точку и цифры
      if (inputValue === '' || inputValue === '-' || inputValue === '.') {
        if (!isControlled) {
          setInternalValue(inputValue);
        }
        onChange?.(null);
        return;
      }

      // Проверяем, что значение является числом
      const numValue = parseFloat(inputValue);
      if (!isNaN(numValue)) {
        // Проверяем ограничения
        let validValue = numValue;
        if (min !== undefined && validValue < min) {
          validValue = min;
        }
        if (max !== undefined && validValue > max) {
          validValue = max;
        }

        const validValueStr = validValue.toString();
        if (!isControlled) {
          setInternalValue(validValueStr);
        }
        onChange?.(validValue);
      } else {
        // Если не число, игнорируем ввод
        return;
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (inputValue === '' || inputValue === '-' || inputValue === '.') {
        if (!isControlled) {
          setInternalValue('');
        }
        onChange?.(null);
      }
      onBlur?.(e);
    };

    return (
      <Input
        ref={ref}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        step={step}
        {...rest}
      />
    );
  }
);

NumberInput.displayName = 'NumberInput';
