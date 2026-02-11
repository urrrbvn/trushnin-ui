import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpoints, mediaQueries } from './breakpoints';

/**
 * Stories для визуализации токенов breakpoints
 * Демонстрирует все доступные точки останова и медиа-запросы
 */
const meta: Meta = {
  title: 'Tokens/Breakpoints',
  parameters: {
    docs: {
      description: {
        component: 'Токены для медиа-запросов: breakpoints и media queries для адаптивного дизайна',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Точки останова для адаптивного дизайна
 * Используются в CSS медиа-запросах и JavaScript для условного рендеринга
 */
export const Breakpoints: Story = {
  render: () => {
    const breakpointEntries = Object.entries(breakpoints).sort((a, b) => {
      const aValue = parseInt(a[1]);
      const bValue = parseInt(b[1]);
      return aValue - bValue;
    });

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Точки останова</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {breakpointEntries.map(([name, value]) => {
            const pixels = parseInt(value);

            return (
              <div
                key={name}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 500,
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{pixels}px</div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                    {value}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '1rem',
                    height: '4px',
                    width: `${(pixels / 1600) * 100}%`,
                    maxWidth: '100%',
                    backgroundColor: '#3b82f6',
                    borderRadius: '2px',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

/**
 * Медиа-запросы для использования в CSS
 * Используются в CSS Modules для создания адаптивных стилей
 */
export const MediaQueries: Story = {
  render: () => {
    const minWidthQueries = Object.entries(mediaQueries).filter(([key]) => !key.startsWith('max'));

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Медиа-запросы (min-width)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {minWidthQueries.map(([name, query]) => (
            <div
              key={name}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div
                    style={{ fontWeight: 500, marginBottom: '0.25rem', textTransform: 'uppercase' }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{query}</div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {query}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '2rem' }}>Медиа-запросы (max-width)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(mediaQueries)
            .filter(([key]) => key.startsWith('max'))
            .map(([name, query]) => (
              <div
                key={name}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 500,
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{query}</div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                    {query}
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
 * Визуализация breakpoints
 * Демонстрирует размеры экранов для разных breakpoints
 */
export const BreakpointVisualization: Story = {
  render: () => {
    const breakpointEntries = Object.entries(breakpoints)
      .filter(([name]) => name !== 'xs')
      .sort((a, b) => {
        const aValue = parseInt(a[1]);
        const bValue = parseInt(b[1]);
        return aValue - bValue;
      });

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Визуализация breakpoints</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {breakpointEntries.map(([name, value]) => {
            const pixels = parseInt(value);
            const width = Math.min((pixels / 1600) * 100, 100);

            return (
              <div
                key={name}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{ fontWeight: 500, marginBottom: '0.25rem', textTransform: 'uppercase' }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{pixels}px и выше</div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '60px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: `${width}%`,
                      height: '100%',
                      backgroundColor: '#3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 500,
                    }}
                  >
                    {pixels}px
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
 * Примеры использования breakpoints
 * Демонстрирует применение breakpoints в различных контекстах
 */
export const UsageExamples: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Примеры использования</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>CSS Media Queries</h3>
            <div
              style={{
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
              }}
            >
              <div style={{ marginBottom: '0.5rem' }}>{'/* Mobile first подход */'}</div>
              <div style={{ marginBottom: '0.5rem' }}>{`.container {`}</div>
              <div style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`padding: 1rem;`}</div>
              <div style={{ marginBottom: '0.5rem' }}>{`}`}</div>
              <div style={{ marginBottom: '0.5rem' }}>{`@media ${mediaQueries.md} {`}</div>
              <div style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`.container {`}</div>
              <div style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>{`padding: 2rem;`}</div>
              <div style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>JavaScript использование</h3>
            <div
              style={{
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
              }}
            >
              <div style={{ marginBottom: '0.5rem' }}>
                {`import { breakpoints } from '@trushnin-ui/tokens';`}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>{``}</div>
              <div style={{ marginBottom: '0.5rem' }}>
                {`const isMobile = window.innerWidth < parseInt(breakpoints.md);`}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                {`const isTablet = window.innerWidth >= parseInt(breakpoints.md) &&`}
              </div>
              <div style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                {`window.innerWidth < parseInt(breakpoints.lg);`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
