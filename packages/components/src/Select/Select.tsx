/**
 * Компонент Select (выпадающий список)
 * Используется для выбора значения из списка опций
 * @param options - массив опций для выбора
 * @param value - выбранное значение (контролируемое)
 * @param defaultValue - значение по умолчанию (неуправляемое)
 * @param placeholder - текст-подсказка
 * @param size - размер поля (xs, sm, md, lg, xl)
 * @param error - состояние ошибки
 * @param disabled - состояние отключения
 * @param label - метка поля
 * @param helperText - вспомогательный текст
 * @param fullWidth - растягивание на всю ширину
 * @param onChange - callback при изменении значения
 * @param className - дополнительные CSS классы
 */

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { className } from '@trushnin-ui/utils';
import { Text } from '@trushnin-ui/primitives';
import { Icon } from '@trushnin-ui/primitives';
import styles from './Select.module.css';

/**
 * Опция для Select
 */
export interface SelectOption {
  /**
   * Значение опции
   */
  value: string | number;
  /**
   * Отображаемый текст
   */
  label: string;
  /**
   * Отключена ли опция
   */
  disabled?: boolean;
}

/**
 * Пропсы для компонента Select
 */
export interface SelectProps {
  /**
   * Массив опций для выбора
   */
  options: SelectOption[];
  /**
   * Выбранное значение (контролируемое)
   */
  value?: string | number | null;
  /**
   * Значение по умолчанию (неуправляемое)
   */
  defaultValue?: string | number | null;
  /**
   * Текст-подсказка
   */
  placeholder?: string;
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
   * Метка поля
   */
  label?: string;
  /**
   * Вспомогательный текст
   */
  helperText?: string;
  /**
   * Растягивание на всю ширину
   * По умолчанию false
   */
  fullWidth?: boolean;
  /**
   * Callback при изменении значения
   */
  onChange?: (value: string | number | null) => void;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  /**
   * ID поля
   */
  id?: string;
}

/**
 * Компонент Select
 * Управляет выпадающим списком и выбором опций
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value: controlledValue,
  defaultValue,
  placeholder = 'Select an option',
  size = 'md',
  error = false,
  disabled = false,
  label,
  helperText,
  fullWidth = false,
  onChange,
  className: customClassName,
  id,
}) => {
  const [internalValue, setInternalValue] = useState<string | number | null>(defaultValue || null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const selectedValue = isControlled ? controlledValue : internalValue;

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const setValue = (newValue: string | number | null) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const updatePosition = () => {
    if (!selectRef.current || !dropdownRef.current) return;

    const selectRect = selectRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const top = selectRect.bottom + scrollY + 4;
    const left = selectRect.left + scrollX;

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();

      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        selectRef.current &&
        dropdownRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: SelectOption) => {
    if (!option.disabled) {
      setValue(option.value);
      setIsOpen(false);
    }
  };

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = helperText ? `${selectId}-helper` : undefined;

  return (
    <div
      className={className(styles.selectWrapper, {
        [styles['selectWrapper--full-width']]: fullWidth,
      })}
    >
      {label && (
        <Text
          as="label"
          htmlFor={selectId}
          className={styles.selectLabel}
          size="sm"
          weight="medium"
        >
          {label}
        </Text>
      )}
      <div
        ref={selectRef}
        id={selectId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-invalid={error}
        aria-describedby={helperTextId}
        className={className(
          styles.select,
          styles[`select--size-${size}`],
          {
            [styles['select--error']]: error,
            [styles['select--disabled']]: disabled,
            [styles['select--open']]: isOpen,
          },
          customClassName
        )}
        onClick={handleToggle}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          } else if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <span className={styles.selectValue}>
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span className={styles.selectPlaceholder}>{placeholder}</span>
          )}
        </span>
        <Icon
          size="sm"
          className={className(styles.selectIcon, { [styles['selectIcon--open']]: isOpen })}
        >
          <path d="M6 9l6 6 6-6" />
        </Icon>
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={styles.selectDropdown}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
              minWidth: selectRef.current?.offsetWidth || 'auto',
            }}
            role="listbox"
          >
            {options.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === selectedValue}
                className={className(styles.selectOption, {
                  [styles['selectOption--selected']]: option.value === selectedValue,
                  [styles['selectOption--disabled']]: option.disabled,
                })}
                onClick={() => handleSelect(option)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !option.disabled) {
                    handleSelect(option);
                  }
                }}
                tabIndex={option.disabled ? -1 : 0}
              >
                {option.label}
              </div>
            ))}
          </div>,
          document.body
        )}
      {helperText && (
        <Text
          id={helperTextId}
          className={className(styles.selectHelperText, {
            [styles['selectHelperText--error']]: error,
          })}
          size="xs"
          color={error ? 'error' : 'tertiary'}
        >
          {helperText}
        </Text>
      )}
    </div>
  );
};

Select.displayName = 'Select';
