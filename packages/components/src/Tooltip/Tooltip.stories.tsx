/**
 * Stories для визуализации компонента Tooltip
 * Демонстрирует использование тултипа с различными позициями и содержимым
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Icon } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
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
        component: 'Компонент для отображения подсказок при наведении или фокусе на элементы',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно триггера',
    },
    delay: {
      control: 'number',
      description: 'Задержка перед показом тултипа (в миллисекундах)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Базовый пример использования Tooltip
 */
export const Default: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Различные позиции тултипа
 */
export const Placements: Story = {
  render: () => (
    <div
      style={{
        padding: '6rem',
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip content="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip с иконкой
 */
export const WithIcon: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Delete item">
        <IconButton aria-label="Delete" variant="danger">
          <Icon size="sm">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </Icon>
        </IconButton>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip с длинным текстом
 */
export const LongText: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="This is a very long tooltip text that should wrap to multiple lines when it exceeds the maximum width">
        <Button>Hover for long text</Button>
      </Tooltip>
    </div>
  ),
};
