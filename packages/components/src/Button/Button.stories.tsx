/**
 * Stories для визуализации компонента Button
 * Демонстрирует использование кнопки с различными вариантами, размерами и состояниями
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Icon } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
        component:
          'Стилизованная кнопка с поддержкой иконок, различных вариантов, размеров и состояний',
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
    fullWidth: {
      control: 'boolean',
      description: 'Растягивание на всю ширину',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Базовый пример использования Button
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/**
 * Все варианты кнопок
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

/**
 * Все размеры кнопок
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

/**
 * Кнопки с иконками
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button
        icon={
          <Icon size="sm">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </Icon>
        }
      >
        With Left Icon
      </Button>
      <Button
        iconRight={
          <Icon size="sm">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      >
        With Right Icon
      </Button>
      <Button
        icon={
          <Icon size="sm">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </Icon>
        }
        iconRight={
          <Icon size="sm">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      >
        With Both Icons
      </Button>
    </div>
  ),
};

/**
 * Состояния кнопок
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

/**
 * Кнопка на всю ширину
 */
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};

/**
 * Интерактивный пример
 */
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me',
  },
};
