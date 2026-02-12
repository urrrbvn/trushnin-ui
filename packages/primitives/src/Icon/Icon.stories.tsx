/**
 * Stories для визуализации компонента Icon
 * Демонстрирует использование обертки для иконок
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { ThemeProvider } from '@trushnin-ui/theme';

/**
 * Метаданные для Storybook
 */
const meta: Meta<typeof Icon> = {
  title: 'Primitives/Icon',
  component: Icon,
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
        component: 'Обертка для иконок с применением размеров и цветов из токенов',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * Простая иконка (shield)
 */
const ShieldIcon = () => (
  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
);

/**
 * Иконка сердца
 */
const HeartIcon = () => (
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
);

/**
 * Иконка звезды
 */
const StarIcon = () => (
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
);

/**
 * Базовый пример использования Icon
 */
export const Default: Story = {
  render: () => (
    <Icon>
      <ShieldIcon />
    </Icon>
  ),
};

/**
 * Различные размеры
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon size="xs">
        <ShieldIcon />
      </Icon>
      <Icon size="sm">
        <ShieldIcon />
      </Icon>
      <Icon size="md">
        <ShieldIcon />
      </Icon>
      <Icon size="lg">
        <ShieldIcon />
      </Icon>
      <Icon size="xl">
        <ShieldIcon />
      </Icon>
    </div>
  ),
};

/**
 * Семантические цвета
 */
export const SemanticColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Icon color="primary" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="secondary" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="tertiary" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="error" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="success" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="warning" size="lg">
        <ShieldIcon />
      </Icon>
    </div>
  ),
};

/**
 * Произвольные цвета
 */
export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Icon color="#ff6b6b" size="lg">
        <HeartIcon />
      </Icon>
      <Icon color="#4ecdc4" size="lg">
        <HeartIcon />
      </Icon>
      <Icon color="#ffe66d" size="lg">
        <StarIcon />
      </Icon>
      <Icon color="#a8e6cf" size="lg">
        <StarIcon />
      </Icon>
    </div>
  ),
};

/**
 * Наследование цвета текста (currentColor)
 */
export const InheritColor: Story = {
  render: () => (
    <div style={{ color: 'var(--trushnin-ui-color-semantic-primary-default)' }}>
      <Icon size="lg">
        <ShieldIcon />
      </Icon>
      <span style={{ marginLeft: '0.5rem' }}>Иконка наследует цвет текста</span>
    </div>
  ),
};

/**
 * Различные иконки
 */
export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Icon color="primary" size="lg">
        <ShieldIcon />
      </Icon>
      <Icon color="error" size="lg">
        <HeartIcon />
      </Icon>
      <Icon color="warning" size="lg">
        <StarIcon />
      </Icon>
    </div>
  ),
};

/**
 * Использование в тексте
 */
export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon color="primary" size="md">
          <ShieldIcon />
        </Icon>
        <span>Иконка слева от текста</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>Иконка справа от текста</span>
        <Icon color="primary" size="md">
          <ShieldIcon />
        </Icon>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon color="error" size="sm">
          <HeartIcon />
        </Icon>
        <span>Маленькая иконка</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon color="success" size="xl">
          <StarIcon />
        </Icon>
        <span>Большая иконка</span>
      </div>
    </div>
  ),
};
