/**
 * Stories для визуализации компонента Input
 * Демонстрирует использование текстового поля с различными размерами, состояниями и иконками
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Icon } from '@trushnin-ui/primitives';
import { Stack } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
        component: 'Текстовое поле для ввода данных с поддержкой различных состояний и иконок',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер поля',
    },
    error: {
      control: 'boolean',
      description: 'Состояние ошибки',
    },
    disabled: {
      control: 'boolean',
      description: 'Состояние отключения',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Растягивание на всю ширину',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Базовый пример использования Input
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

/**
 * Все размеры полей
 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Input size="xs" placeholder="Extra Small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra Large" />
    </Stack>
  ),
};

/**
 * Поля с метками и вспомогательным текстом
 */
export const WithLabel: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Input
        label="Email"
        placeholder="Enter your email"
        helperText="We'll never share your email"
      />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <Input label="Email" error helperText="Please enter a valid email" />
    </Stack>
  ),
};

/**
 * Поля с иконками
 */
export const WithIcons: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Input
        icon={
          <Icon size="sm">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </Icon>
        }
        placeholder="Search users"
      />
      <Input
        iconRight={
          <Icon size="sm">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </Icon>
        }
        placeholder="Search"
      />
      <Input
        icon={
          <Icon size="sm">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </Icon>
        }
        iconRight={
          <Icon size="sm">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </Icon>
        }
        placeholder="Email"
      />
    </Stack>
  ),
};

/**
 * Состояния полей
 */
export const States: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Input placeholder="Normal state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error helperText="This field is required" />
    </Stack>
  ),
};

/**
 * Поле на всю ширину
 */
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Input fullWidth placeholder="Full width input" />
    </div>
  ),
};
