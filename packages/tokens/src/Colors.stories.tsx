import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors, semanticColors } from './colors';

/**
 * Stories для визуализации цветовой палитры и семантических цветов
 * Демонстрирует все доступные цвета токенов
 */
const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Цветовая палитра и семантические цвета дизайн-системы',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Базовая цветовая палитра
 * Используется для создания семантических цветов и кастомизации темы
 */
export const ColorPalette: Story = {
  render: () => {
    const colorNames = Object.keys(colors) as Array<keyof typeof colors>;

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Базовая цветовая палитра</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {colorNames.map((colorName) => {
            const colorScale = colors[colorName];
            const scaleKeys = Object.keys(colorScale) as Array<string>;

            return (
              <div
                key={colorName}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#f9fafb',
                    borderBottom: '1px solid #e5e7eb',
                  }}
                >
                  <strong style={{ textTransform: 'capitalize' }}>{colorName}</strong>
                </div>
                <div>
                  {scaleKeys.map((scale) => {
                    const colorValue = colorScale[scale];
                    const isLight = ['50', '100', '200', '300'].includes(String(scale));
                    const textColor = isLight ? '#111827' : '#ffffff';

                    return (
                      <div
                        key={scale}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: colorValue,
                          color: textColor,
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>{scale}</span>
                        <span style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                          {colorValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

/**
 * Семантические цвета
 * Используются в компонентах для обозначения состояний и назначения
 */
export const SemanticColors: Story = {
  render: () => {
    const semanticGroups = Object.keys(semanticColors) as Array<keyof typeof semanticColors>;

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Семантические цвета</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {semanticGroups.map((groupName) => {
            const group = semanticColors[groupName];
            const groupKeys = Object.keys(group) as Array<keyof typeof group>;

            return (
              <div
                key={groupName}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#f9fafb',
                    borderBottom: '1px solid #e5e7eb',
                  }}
                >
                  <strong style={{ textTransform: 'capitalize' }}>{groupName}</strong>
                </div>
                <div>
                  {groupKeys.map((key) => {
                    const colorValue = group[key];
                    const isLight = ['light', 'tertiary', 'secondary'].includes(String(key));
                    const textColor = isLight ? '#111827' : '#ffffff';

                    return (
                      <div
                        key={String(key)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: colorValue,
                          color: textColor,
                        }}
                      >
                        <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>
                          {String(key)}
                        </span>
                        <span style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                          {colorValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

/**
 * Примеры использования цветов
 * Демонстрирует применение цветов в различных контекстах
 */
export const UsageExamples: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Примеры использования</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Primary colors */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Primary цвета</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.primary.default,
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Primary Default
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.primary.hover,
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Primary Hover
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.primary.light,
                  color: '#111827',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Primary Light
              </div>
            </div>
          </div>

          {/* Status colors */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Цвета состояний</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.success.default,
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Success
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.warning.default,
                  color: '#111827',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Warning
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.error.default,
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Error
              </div>
            </div>
          </div>

          {/* Text colors */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Цвета текста</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: semanticColors.text.primary, fontSize: '1rem' }}>
                Primary text - {semanticColors.text.primary}
              </div>
              <div style={{ color: semanticColors.text.secondary, fontSize: '1rem' }}>
                Secondary text - {semanticColors.text.secondary}
              </div>
              <div style={{ color: semanticColors.text.tertiary, fontSize: '1rem' }}>
                Tertiary text - {semanticColors.text.tertiary}
              </div>
              <div style={{ color: semanticColors.text.disabled, fontSize: '1rem' }}>
                Disabled text - {semanticColors.text.disabled}
              </div>
            </div>
          </div>

          {/* Background colors */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Цвета фона</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.background.default,
                  border: `1px solid ${semanticColors.border.default}`,
                  borderRadius: '8px',
                  color: semanticColors.text.primary,
                }}
              >
                Default Background
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.background.secondary,
                  border: `1px solid ${semanticColors.border.default}`,
                  borderRadius: '8px',
                  color: semanticColors.text.primary,
                }}
              >
                Secondary Background
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: semanticColors.background.tertiary,
                  border: `1px solid ${semanticColors.border.default}`,
                  borderRadius: '8px',
                  color: semanticColors.text.primary,
                }}
              >
                Tertiary Background
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
