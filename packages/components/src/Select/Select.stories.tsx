/**
 * Stories для визуализации компонента Select
 * Демонстрирует использование выпадающего списка с различными опциями и состояниями
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Stack } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
        component: 'Выпадающий список для выбора значения из списка опций',
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
type Story = StoryObj<typeof Select>;

const basicOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
];

/**
 * Базовый пример использования Select
 */
export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select an option',
  },
};

/**
 * Все размеры селекта
 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Select options={basicOptions} size="xs" placeholder="Extra Small" />
      <Select options={basicOptions} size="sm" placeholder="Small" />
      <Select options={basicOptions} size="md" placeholder="Medium" />
      <Select options={basicOptions} size="lg" placeholder="Large" />
      <Select options={basicOptions} size="xl" placeholder="Extra Large" />
    </Stack>
  ),
};

/**
 * Select с меткой и вспомогательным текстом
 */
export const WithLabel: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Select
        options={basicOptions}
        label="Country"
        placeholder="Select country"
        helperText="Choose your country"
      />
      <Select
        options={basicOptions}
        label="Language"
        placeholder="Select language"
        error
        helperText="This field is required"
      />
    </Stack>
  ),
};

/**
 * Select с отключенными опциями
 */
export const WithDisabledOptions: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2', disabled: true },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4', disabled: true },
        ]}
        placeholder="Select option"
      />
    </div>
  ),
};

/**
 * Состояния селекта
 */
export const States: Story = {
  render: () => (
    <Stack direction="column" gap={4} style={{ width: '300px' }}>
      <Select options={basicOptions} placeholder="Normal state" />
      <Select options={basicOptions} placeholder="Disabled state" disabled />
      <Select
        options={basicOptions}
        placeholder="Error state"
        error
        helperText="This field is required"
      />
    </Stack>
  ),
};

/**
 * Select на всю ширину
 */
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Select options={basicOptions} fullWidth placeholder="Full width select" />
    </div>
  ),
};
