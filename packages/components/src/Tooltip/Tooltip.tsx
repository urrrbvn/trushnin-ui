/**
 * Компонент Tooltip
 * Используется для отображения подсказок при наведении на элементы
 * @param content - содержимое тултипа
 * @param placement - позиция тултипа относительно триггера
 * @param delay - задержка перед показом тултипа (в миллисекундах)
 * @param children - элемент-триггер
 */

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { className } from '@trushnin-ui/utils';
import styles from './Tooltip.module.css';

/**
 * Пропсы для компонента Tooltip
 */
export interface TooltipProps {
  /**
   * Содержимое тултипа
   */
  content: React.ReactNode;
  /**
   * Позиция тултипа относительно триггера
   * По умолчанию 'top'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Задержка перед показом тултипа (в миллисекундах)
   * По умолчанию 200
   */
  delay?: number;
  /**
   * Элемент-триггер
   */
  children: React.ReactElement;
  /**
   * Дополнительные CSS классы для тултипа
   */
  className?: string;
}

/**
 * Компонент Tooltip
 * Управляет позиционированием и видимостью тултипа
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  delay = 200,
  children,
  className: customClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + scrollX + 8;
        break;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible, placement]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const trigger = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      children.props.onBlur?.(e);
    },
  });

  return (
    <>
      {trigger}
      {isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className={className(styles.tooltip, styles[`tooltip--${placement}`], customClassName)}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
            }}
            role="tooltip"
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
