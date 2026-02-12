/**
 * Компонент Popover
 * Используется для отображения всплывающего контента относительно триггера
 * @param content - содержимое попапа
 * @param placement - позиция попапа относительно триггера
 * @param trigger - способ открытия (click, hover)
 * @param open - контролируемое состояние открытия
 * @param onOpenChange - callback при изменении состояния открытия
 * @param children - элемент-триггер
 */

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { className } from '@trushnin-ui/utils';
import styles from './Popover.module.css';

/**
 * Пропсы для компонента Popover
 */
export interface PopoverProps {
  /**
   * Содержимое попапа
   */
  content: React.ReactNode;
  /**
   * Позиция попапа относительно триггера
   * По умолчанию 'bottom'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Способ открытия попапа
   * По умолчанию 'click'
   */
  trigger?: 'click' | 'hover';
  /**
   * Контролируемое состояние открытия
   */
  open?: boolean;
  /**
   * Callback при изменении состояния открытия
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Элемент-триггер
   */
  children: React.ReactElement;
  /**
   * Дополнительные CSS классы для попапа
   */
  className?: string;
}

/**
 * Компонент Popover
 * Управляет позиционированием и видимостью попапа
 */
export const Popover: React.FC<PopoverProps> = ({
  content,
  placement = 'bottom',
  trigger = 'click',
  open: controlledOpen,
  onOpenChange,
  children,
  className: customClassName,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - popoverRect.height - 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.left + scrollX - popoverRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.right + scrollX + 8;
        break;
    }

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
  }, [isOpen, placement]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        isOpen &&
        triggerRef.current &&
        popoverRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (isOpen && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, trigger]);

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (trigger === 'click') {
      setOpen(!isOpen);
    }
    children.props.onClick?.(e);
  };

  const handleTriggerMouseEnter = (e: React.MouseEvent) => {
    if (trigger === 'hover') {
      setOpen(true);
    }
    children.props.onMouseEnter?.(e);
  };

  const handleTriggerMouseLeave = (e: React.MouseEvent) => {
    if (trigger === 'hover') {
      setOpen(false);
    }
    children.props.onMouseLeave?.(e);
  };

  const triggerElement = React.cloneElement(children, {
    ref: triggerRef,
    onClick: handleTriggerClick,
    onMouseEnter: handleTriggerMouseEnter,
    onMouseLeave: handleTriggerMouseLeave,
  });

  return (
    <>
      {triggerElement}
      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            className={className(styles.popover, styles[`popover--${placement}`], customClassName)}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
            }}
            onMouseEnter={trigger === 'hover' ? () => setOpen(true) : undefined}
            onMouseLeave={trigger === 'hover' ? () => setOpen(false) : undefined}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

Popover.displayName = 'Popover';
