/**
 * Stories для визуализации компонента IconButton
 * Демонстрирует использование кнопки-иконки с различными вариантами, размерами и состояниями
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Icon } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Квадратная кнопка с иконкой без текста, используется для компактных действий',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Вариант кнопки',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Состояние отключения',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * Базовый пример использования IconButton
 */
export const Default: Story = {
  args: {
    'aria-label': 'Icon button',
    children: (
      <Icon size="sm">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </Icon>
    ),
  },
};

/**
 * Все варианты кнопок-иконок
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconButton aria-label="Primary" variant="primary">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Secondary" variant="secondary">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Outline" variant="outline">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Ghost" variant="ghost">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Danger" variant="danger">
        <Icon size="sm">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
        </Icon>
      </IconButton>
    </div>
  ),
};

/**
 * Все размеры кнопок-иконок
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <IconButton aria-label="Extra Small" size="xs">
        <Icon size="xs">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Small" size="sm">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Medium" size="md">
        <Icon size="md">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Large" size="lg">
        <Icon size="lg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Extra Large" size="xl">
        <Icon size="xl">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
    </div>
  ),
};

/**
 * Состояния кнопок-иконок
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconButton aria-label="Normal">
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Disabled" disabled>
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
      <IconButton aria-label="Loading" loading>
        <Icon size="sm">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </Icon>
      </IconButton>
    </div>
  ),
};
