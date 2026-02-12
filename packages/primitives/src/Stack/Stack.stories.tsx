/**
 * Stories для визуализации компонента Stack
 * Демонстрирует использование компонента для вертикального/горизонтального расположения
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';
import { Box } from '../Box';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Stack> = {
  title: 'Primitives/Stack',
  component: Stack,
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
          'Компонент для вертикального/горизонтального расположения элементов с автоматическим gap между элементами',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

/**
 * Базовый пример использования Stack
 */
export const Default: Story = {
  render: () => (
    <Stack>
      <Box
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Элемент 1
      </Box>
      <Box
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Элемент 2
      </Box>
      <Box
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Элемент 3
      </Box>
    </Stack>
  ),
};

/**
 * Вертикальное расположение (по умолчанию)
 */
export const Vertical: Story = {
  render: () => (
    <Stack direction="column">
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 1
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 2
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 3
      </Box>
    </Stack>
  ),
};

/**
 * Горизонтальное расположение
 */
export const Horizontal: Story = {
  render: () => (
    <Stack direction="row">
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 1
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 2
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 3
      </Box>
    </Stack>
  ),
};

/**
 * Различные размеры gap
 */
export const GapSizes: Story = {
  render: () => (
    <Stack direction="column" gap={8}>
      <Stack direction="row" gap={1}>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 1
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 1
        </Box>
      </Stack>
      <Stack direction="row" gap={4}>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 4
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 4
        </Box>
      </Stack>
      <Stack direction="row" gap={8}>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 8
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Gap 8
        </Box>
      </Stack>
    </Stack>
  ),
};

/**
 * Выравнивание по поперечной оси
 */
export const Alignment: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Stack
        direction="row"
        align="flex-start"
        style={{
          height: '80px',
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
        }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          flex-start
        </Box>
      </Stack>
      <Stack
        direction="row"
        align="center"
        style={{
          height: '80px',
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
        }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          center
        </Box>
      </Stack>
      <Stack
        direction="row"
        align="flex-end"
        style={{
          height: '80px',
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
        }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          flex-end
        </Box>
      </Stack>
      <Stack
        direction="row"
        align="stretch"
        style={{
          height: '80px',
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
        }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          stretch
        </Box>
      </Stack>
    </Stack>
  ),
};

/**
 * Выравнивание по главной оси
 */
export const Justify: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Stack
        direction="row"
        justify="flex-start"
        style={{ border: '1px solid var(--trushnin-ui-color-semantic-border-default)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          flex-start
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item
        </Box>
      </Stack>
      <Stack
        direction="row"
        justify="center"
        style={{ border: '1px solid var(--trushnin-ui-color-semantic-border-default)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          center
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item
        </Box>
      </Stack>
      <Stack
        direction="row"
        justify="flex-end"
        style={{ border: '1px solid var(--trushnin-ui-color-semantic-border-default)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          flex-end
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item
        </Box>
      </Stack>
      <Stack
        direction="row"
        justify="space-between"
        style={{ border: '1px solid var(--trushnin-ui-color-semantic-border-default)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          space-between
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item
        </Box>
      </Stack>
      <Stack
        direction="row"
        justify="space-around"
        style={{ border: '1px solid var(--trushnin-ui-color-semantic-border-default)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          space-around
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item
        </Box>
      </Stack>
    </Stack>
  ),
};

/**
 * Перенос элементов (wrap)
 */
export const Wrap: Story = {
  render: () => (
    <Stack
      direction="row"
      wrap
      gap={4}
      style={{
        width: '300px',
        border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
      }}
    >
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 1
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 2
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 3
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 4
      </Box>
      <Box
        padding={4}
        style={{
          backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
          color: 'white',
        }}
      >
        Элемент 5
      </Box>
    </Stack>
  ),
};

/**
 * Комплексный пример
 */
export const Complex: Story = {
  render: () => (
    <Stack direction="column" gap={8}>
      <Stack direction="row" justify="space-between" align="center">
        <Box
          padding={4}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Левый элемент
        </Box>
        <Box
          padding={4}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Правый элемент
        </Box>
      </Stack>
      <Stack direction="row" gap={4} wrap>
        <Box
          padding={4}
          style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
        >
          Карточка 1
        </Box>
        <Box
          padding={4}
          style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
        >
          Карточка 2
        </Box>
        <Box
          padding={4}
          style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
        >
          Карточка 3
        </Box>
      </Stack>
    </Stack>
  ),
};
