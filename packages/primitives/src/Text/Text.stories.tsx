/**
 * Stories для визуализации компонента Text
 * Демонстрирует использование текстового компонента с типографическими вариантами
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
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
          'Текстовый компонент с типографическими вариантами для отображения текста с применением типографических токенов',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

/**
 * Базовый пример использования Text
 */
export const Default: Story = {
  render: () => <Text>Базовый текст</Text>,
};

/**
 * Типографические варианты
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="h1">Заголовок H1</Text>
      <Text variant="h2">Заголовок H2</Text>
      <Text variant="h3">Заголовок H3</Text>
      <Text variant="h4">Заголовок H4</Text>
      <Text variant="h5">Заголовок H5</Text>
      <Text variant="h6">Заголовок H6</Text>
      <Text variant="body">Основной текст (body)</Text>
      <Text variant="bodySmall">Малый текст (bodySmall)</Text>
      <Text variant="caption">Подпись (caption)</Text>
      <Text variant="label">Метка (label)</Text>
      <Text variant="code">Код (code): const x = 1;</Text>
    </div>
  ),
};

/**
 * Размеры шрифта
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="xs">Размер xs (12px)</Text>
      <Text size="sm">Размер sm (14px)</Text>
      <Text size="base">Размер base (16px)</Text>
      <Text size="lg">Размер lg (18px)</Text>
      <Text size="xl">Размер xl (20px)</Text>
      <Text size="2xl">Размер 2xl (24px)</Text>
      <Text size="3xl">Размер 3xl (30px)</Text>
    </div>
  ),
};

/**
 * Веса шрифта
 */
export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text weight="light">Вес light (300)</Text>
      <Text weight="normal">Вес normal (400)</Text>
      <Text weight="medium">Вес medium (500)</Text>
      <Text weight="semibold">Вес semibold (600)</Text>
      <Text weight="bold">Вес bold (700)</Text>
    </div>
  ),
};

/**
 * Цвета текста
 */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text color="primary">Основной цвет (primary)</Text>
      <Text color="secondary">Вторичный цвет (secondary)</Text>
      <Text color="tertiary">Третичный цвет (tertiary)</Text>
      <Text color="disabled">Неактивный цвет (disabled)</Text>
      <Text color="error">Цвет ошибки (error)</Text>
      <Text color="success">Цвет успеха (success)</Text>
      <Text color="warning">Цвет предупреждения (warning)</Text>
      <Text color="#ff6b6b">Произвольный цвет (#ff6b6b)</Text>
    </div>
  ),
};

/**
 * Выравнивание текста
 */
export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Text
        align="left"
        style={{
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
          padding: '1rem',
        }}
      >
        Выравнивание по левому краю (left)
      </Text>
      <Text
        align="center"
        style={{
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
          padding: '1rem',
        }}
      >
        Выравнивание по центру (center)
      </Text>
      <Text
        align="right"
        style={{
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
          padding: '1rem',
        }}
      >
        Выравнивание по правому краю (right)
      </Text>
      <Text
        align="justify"
        style={{
          border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
          padding: '1rem',
        }}
      >
        Выравнивание по ширине (justify). Этот текст будет выровнен по ширине, что означает, что
        пробелы между словами будут распределены равномерно, чтобы текст занимал всю доступную
        ширину контейнера.
      </Text>
    </div>
  ),
};

/**
 * Кастомные HTML теги
 */
export const CustomTags: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text as="p">Параграф (p)</Text>
      <Text as="div">Div элемент</Text>
      <Text as="span">Span элемент</Text>
      <Text as="strong">Жирный текст (strong)</Text>
      <Text as="em">Курсивный текст (em)</Text>
      <Text as="small">Малый текст (small)</Text>
      <Text as="label">Метка (label)</Text>
    </div>
  ),
};

/**
 * Комбинация свойств
 */
export const Combined: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="h3" color="primary">
        Заголовок с основным цветом
      </Text>
      <Text size="lg" weight="bold" color="error">
        Большой жирный текст с цветом ошибки
      </Text>
      <Text variant="body" align="center" color="secondary">
        Центрированный текст с вторичным цветом
      </Text>
      <Text variant="code" color="primary">
        const example = &apos;Код с основным цветом&apos;;
      </Text>
    </div>
  ),
};
