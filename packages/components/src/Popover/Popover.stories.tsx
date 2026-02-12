/**
 * Stories для визуализации компонента Popover
 * Демонстрирует использование попапа с различными позициями и триггерами
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';
import { ThemeProvider } from '@trushnin-ui/theme';
import { Button } from '../Button';
import { Stack } from '@trushnin-ui/primitives';
import { Text } from '@trushnin-ui/primitives';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
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
        component: 'Компонент для отображения всплывающего контента относительно триггера',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция попапа относительно триггера',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: 'Способ открытия попапа',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * Базовый пример использования Popover
 */
export const Default: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Popover content={<div>This is a popover content</div>}>
        <Button>Click me</Button>
      </Popover>
    </div>
  ),
};

/**
 * Различные позиции попапа
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
      <Popover content={<div>Top popover</div>} placement="top">
        <Button>Top</Button>
      </Popover>
      <Popover content={<div>Right popover</div>} placement="right">
        <Button>Right</Button>
      </Popover>
      <Popover content={<div>Bottom popover</div>} placement="bottom">
        <Button>Bottom</Button>
      </Popover>
      <Popover content={<div>Left popover</div>} placement="left">
        <Button>Left</Button>
      </Popover>
    </div>
  ),
};

/**
 * Popover с hover триггером
 */
export const HoverTrigger: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Popover content={<div>Hover to see popover</div>} trigger="hover">
        <Button>Hover me</Button>
      </Popover>
    </div>
  ),
};

/**
 * Popover с богатым контентом
 */
export const RichContent: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Popover
        content={
          <Stack direction="column" gap={3}>
            <Text variant="heading-sm">Popover Title</Text>
            <Text>This is a popover with rich content including multiple elements.</Text>
            <Button size="sm" variant="primary">
              Action Button
            </Button>
          </Stack>
        }
      >
        <Button>Open Popover</Button>
      </Popover>
    </div>
  ),
};
