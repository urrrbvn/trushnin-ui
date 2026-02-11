import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  typographyStyles,
} from './typography';

/**
 * Stories для визуализации типографических токенов
 * Демонстрирует все доступные настройки типографики
 */
const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Типографические токены: шрифты, размеры, веса, межстрочные интервалы',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Семейства шрифтов
 * Используются в компонентах Text и других текстовых элементах
 */
export const FontFamilies: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Семейства шрифтов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(fontFamilies).map(([name, value]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}
            >
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ textTransform: 'capitalize' }}>{name}</strong>
              </div>
              <div style={{ fontFamily: value, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Размеры шрифтов
 * Используются для создания типографических стилей
 */
export const FontSizes: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Размеры шрифтов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(fontSizes).map(([name, value]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div style={{ fontSize: value, marginBottom: '0.25rem' }}>
                    {name} - The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {value} ({parseFloat(value) * 16}px)
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Веса шрифтов
 * Используются для создания акцентов в тексте
 */
export const FontWeights: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Веса шрифтов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(fontWeights).map(([name, value]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div style={{ fontWeight: value, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                    {name} - The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Weight: {value}</div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Межстрочные интервалы
 * Используются для настройки читаемости текста
 */
export const LineHeights: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Межстрочные интервалы</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(lineHeights).map(([name, value]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div style={{ width: '70%' }}>
                  <div style={{ lineHeight: value, fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {name} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris.
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Line height: {value}</div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Межбуквенные интервалы
 * Используются для настройки кернинга
 */
export const LetterSpacings: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Межбуквенные интервалы</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(letterSpacings).map(([name, value]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div
                    style={{ letterSpacing: value, fontSize: '1.25rem', marginBottom: '0.25rem' }}
                  >
                    {name} - The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Letter spacing: {value}
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Типографические стили
 * Предустановленные комбинации размеров, весов и интервалов
 */
export const TypographyStyles: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Типографические стили</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(typographyStyles).map(([name, style]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}
            >
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ textTransform: 'uppercase' }}>{name}</strong>
              </div>
              <div
                style={{
                  ...style,
                  marginBottom: '0.5rem',
                }}
              >
                {name === 'h1' && 'Heading 1 - The quick brown fox jumps over the lazy dog'}
                {name === 'h2' && 'Heading 2 - The quick brown fox jumps over the lazy dog'}
                {name === 'h3' && 'Heading 3 - The quick brown fox jumps over the lazy dog'}
                {name === 'h4' && 'Heading 4 - The quick brown fox jumps over the lazy dog'}
                {name === 'h5' && 'Heading 5 - The quick brown fox jumps over the lazy dog'}
                {name === 'h6' && 'Heading 6 - The quick brown fox jumps over the lazy dog'}
                {name === 'body' &&
                  'Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                {name === 'bodySmall' &&
                  'Body small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                {name === 'caption' && 'Caption text - The quick brown fox jumps over the lazy dog'}
                {name === 'label' && 'Label text - The quick brown fox jumps over the lazy dog'}
                {name === 'code' && 'const example = "code text";'}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                fontSize: {style.fontSize}, fontWeight: {style.fontWeight}, lineHeight:{' '}
                {style.lineHeight}
                {style.letterSpacing && `, letterSpacing: ${style.letterSpacing}`}
                {'fontFamily' in style && style.fontFamily && `, fontFamily: ${style.fontFamily}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
