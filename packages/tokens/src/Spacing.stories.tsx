import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacing, semanticSpacing, sizes } from './spacing';

/**
 * Stories для визуализации токенов отступов и размеров
 * Демонстрирует все доступные значения spacing и sizes
 */
const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Токены для отступов и размеров: spacing, semantic spacing, sizes',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Базовая шкала отступов
 * Используется для создания консистентных интервалов между элементами
 */
export const SpacingScale: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Базовая шкала отступов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(spacing).map(([name, value]) => {
            const pixels = parseFloat(value) * 16;

            return (
              <div
                key={name}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: value,
                      height: '3rem',
                      backgroundColor: '#3b82f6',
                      borderRadius: '4px',
                      minWidth: value,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Spacing {name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {value} ({pixels}px)
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                    {value}
                  </div>
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
 * Семантические отступы
 * Используются для стандартизации отступов в компонентах
 */
export const SemanticSpacing: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Семантические отступы</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(semanticSpacing).map(([category, values]) => (
            <div
              key={category}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}
            >
              <h3 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>{category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.entries(values).map(([name, value]) => {
                  const pixels = parseFloat(value) * 16;

                  return (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: value,
                          height: '2.5rem',
                          backgroundColor: '#3b82f6',
                          borderRadius: '4px',
                          minWidth: value,
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 500,
                            marginBottom: '0.25rem',
                            textTransform: 'capitalize',
                          }}
                        >
                          {name}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          {value} ({pixels}px)
                        </div>
                      </div>
                      <div
                        style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}
                      >
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Размеры компонентов
 * Используются для настройки высоты и ширины элементов интерфейса
 */
export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Размеры компонентов</h2>

        {/* Heights */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Высоты</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(sizes.height).map(([name, value]) => {
              const pixels = parseFloat(value) * 16;

              return (
                <div
                  key={name}
                  style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '200px',
                        height: value,
                        backgroundColor: '#3b82f6',
                        borderRadius: '4px',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 500,
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {name}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {value} ({pixels}px)
                      </div>
                    </div>
                    <div
                      style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Widths */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Ширины</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(sizes.width).map(([name, value]) => {
              const pixels = value.includes('rem') ? parseFloat(value) * 16 : null;

              return (
                <div
                  key={name}
                  style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: value,
                        height: '3rem',
                        backgroundColor: '#3b82f6',
                        borderRadius: '4px',
                        maxWidth: '100%',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 500,
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {name}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {value} {pixels ? `(${pixels}px)` : ''}
                      </div>
                    </div>
                    <div
                      style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Примеры использования отступов
 * Демонстрирует применение spacing в различных контекстах
 */
export const UsageExamples: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Примеры использования</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Padding examples */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Padding примеры</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(semanticSpacing.padding).map(([name, value]) => (
                <div
                  key={name}
                  style={{
                    padding: value,
                    backgroundColor: '#eff6ff',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ fontSize: '0.875rem', color: '#1e40af' }}>Padding {name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Margin examples */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Margin примеры</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.entries(semanticSpacing.margin).map(([name, value]) => (
                <div
                  key={name}
                  style={{
                    marginBottom: value,
                    padding: '1rem',
                    backgroundColor: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ fontSize: '0.875rem', color: '#374151' }}>Margin bottom {name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gap examples */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Gap примеры</h3>
            <div style={{ display: 'flex', gap: semanticSpacing.gap.md, flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  style={{
                    padding: semanticSpacing.padding.md,
                    backgroundColor: '#dcfce7',
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ fontSize: '0.875rem', color: '#166534' }}>Item {num}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
              Gap: {semanticSpacing.gap.md}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
