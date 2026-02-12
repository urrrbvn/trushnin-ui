/**
 * Stories для визуализации компонента NumberInput
 * Демонстрирует использование числового поля с различными ограничениями
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from './NumberInput';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Stack } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
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
        component: 'Текстовое поле для ввода только числовых данных с поддержкой ограничений',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Минимальное значение',
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
    },
    step: {
      control: 'number',
      description: 'Шаг изменения значения',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер поля',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

/**
 * Базовый пример использования NumberInput
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter number',
  },
};

/**
 * NumberInput с ограничениями
 */
export const WithConstraints: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <NumberInput
        label="Age"
        min={0}
        max={120}
        placeholder="Enter age"
        helperText="Must be between 0 and 120"
      />
      <NumberInput
        label="Price"
        min={0}
        step={0.01}
        placeholder="0.00"
        helperText="Enter price in dollars"
      />
      <NumberInput label="Quantity" min={1} max={100} step={1} placeholder="Enter quantity" />
    </Stack>
  ),
};

/**
 * NumberInput с различными состояниями
 */
export const States: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <NumberInput placeholder="Normal" />
      <NumberInput placeholder="Disabled" disabled />
      <NumberInput placeholder="Error" error helperText="Invalid number" />
    </Stack>
  ),
};
