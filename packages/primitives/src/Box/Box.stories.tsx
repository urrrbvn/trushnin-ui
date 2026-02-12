/**
 * Stories для визуализации компонента Box
 * Демонстрирует использование универсального контейнера с различными пропсами
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
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
          'Универсальный контейнерный компонент для создания контейнеров с настраиваемыми отступами, размерами и layout свойствами',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

/**
 * Базовый пример использования Box
 */
export const Default: Story = {
  render: () => (
    <Box
      padding={4}
      style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
    >
      Базовый контейнер с padding
    </Box>
  ),
};

/**
 * Различные размеры padding
 */
export const PaddingSizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        padding={2}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Padding: 2 (8px)
      </Box>
      <Box
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Padding: 4 (16px)
      </Box>
      <Box
        padding={8}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Padding: 8 (32px)
      </Box>
    </Box>
  ),
};

/**
 * Различные размеры margin
 */
export const MarginSizes: Story = {
  render: () => (
    <Box>
      <Box
        margin={2}
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Margin: 2
      </Box>
      <Box
        margin={4}
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Margin: 4
      </Box>
      <Box
        margin={8}
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Margin: 8
      </Box>
    </Box>
  ),
};

/**
 * Padding для разных сторон
 */
export const PaddingSides: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        padding={{ top: 4, right: 8, bottom: 4, left: 8 }}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Padding: top=4, right=8, bottom=4, left=8
      </Box>
      <Box
        padding={{ top: 8, right: 4, bottom: 8, left: 4 }}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Padding: top=8, right=4, bottom=8, left=4
      </Box>
    </Box>
  ),
};

/**
 * Различные display свойства
 */
export const DisplayTypes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        display="block"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Display: block
      </Box>
      <Box
        display="inline-block"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Display: inline-block
      </Box>
      <Box
        display="flex"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Display: flex
      </Box>
    </Box>
  ),
};

/**
 * Flex свойства
 */
export const FlexProperties: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        display="flex"
        flexDirection="row"
        gap={4}
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 1
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 2
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 3
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 1
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 2
        </Box>
        <Box
          padding={2}
          style={{
            backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
            color: 'white',
          }}
        >
          Item 3
        </Box>
      </Box>
    </Box>
  ),
};

/**
 * Размеры width и height
 */
export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        width="sm"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Width: sm (256px)
      </Box>
      <Box
        width="md"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Width: md (384px)
      </Box>
      <Box
        width="lg"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Width: lg (512px)
      </Box>
      <Box
        width="full"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Width: full (100%)
      </Box>
    </Box>
  ),
};

/**
 * Кастомные HTML теги
 */
export const CustomTags: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        as="section"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Section tag
      </Box>
      <Box
        as="article"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Article tag
      </Box>
      <Box
        as="header"
        padding={4}
        style={{ backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)' }}
      >
        Header tag
      </Box>
    </Box>
  ),
};
