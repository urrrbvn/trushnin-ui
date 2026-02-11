import type { Meta, StoryObj } from '@storybook/react-vite';
import { borderRadius, shadows, transitionDuration, transitionTiming, transitions } from './shapes';

/**
 * Stories для визуализации токенов форм, теней и переходов
 * Демонстрирует все доступные значения borderRadius, shadows и transitions
 */
const meta: Meta = {
  title: 'Tokens/Shapes',
  parameters: {
    docs: {
      description: {
        component: 'Токены для форм, теней и переходов: border radius, shadows, transitions',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Радиусы скругления
 * Используются для настройки border-radius в компонентах
 */
export const BorderRadius: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Радиусы скругления</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {Object.entries(borderRadius).map(([name, value]) => {
            const pixels = value.includes('rem')
              ? parseFloat(value) * 16
              : value === '9999px'
                ? 'full'
                : parseFloat(value) * 16;

            return (
              <div
                key={name}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
              >
                <div style={{ marginBottom: '1rem' }}>
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
                    {value} {typeof pixels === 'number' ? `(${pixels}px)` : ''}
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '80px',
                    backgroundColor: '#3b82f6',
                    borderRadius: value,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 500,
                  }}
                >
                  Preview
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
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
 * Тени
 * Используются для создания глубины и визуальной иерархии
 */
export const Shadows: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
        <h2 style={{ marginBottom: '2rem' }}>Тени</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {Object.entries(shadows).map(([name, value]) => (
            <div
              key={name}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center' }}>
                  Shadow
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ fontWeight: 500, marginBottom: '0.25rem', textTransform: 'capitalize' }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                  }}
                >
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
 * Длительности переходов
 * Используются для настройки времени анимаций и переходов
 */
export const TransitionDuration: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Длительности переходов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(transitionDuration).map(([name, value]) => {
            const milliseconds = parseFloat(value);

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
                        textTransform: 'capitalize',
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{milliseconds}ms</div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                    {value}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '1rem',
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '2px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${(milliseconds / 500) * 100}%`,
                      maxWidth: '100%',
                      height: '100%',
                      backgroundColor: '#3b82f6',
                      borderRadius: '2px',
                      transition: `width ${value} ease-in-out`,
                    }}
                  />
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
 * Функции плавности переходов
 * Используются для настройки easing функций анимаций
 */
export const TransitionTiming: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Функции плавности переходов</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(transitionTiming).map(([name, value]) => (
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
                      textTransform: 'capitalize',
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Easing function</div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
              <div
                style={{
                  marginTop: '1rem',
                  width: '100%',
                  height: '60px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#3b82f6',
                    transform: 'translateX(-100%)',
                    transition: `transform 1s ${value}`,
                    animation: 'slide 2s infinite',
                  }}
                />
              </div>
              <style>
                {`
                  @keyframes slide {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                  }
                `}
              </style>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Предустановленные переходы
 * Используются для быстрого применения анимаций в компонентах
 */
export const Transitions: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Предустановленные переходы</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(transitions).map(([name, value]) => (
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
                      textTransform: 'capitalize',
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Transition preset</div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#eff6ff',
                  borderRadius: '8px',
                  transition: `background-color ${value}`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                <div style={{ fontSize: '0.875rem' }}>Hover me to see transition</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Примеры использования
 * Демонстрирует применение shapes токенов в различных контекстах
 */
export const UsageExamples: Story = {
  render: () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Примеры использования</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Card example */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Карточка с тенью и скруглением</h3>
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.md,
                maxWidth: '400px',
                transition: transitions.default,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.lg;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = shadows.md;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Card Title</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                This card uses borderRadius.lg and shadows.md with transitions.default
              </div>
            </div>
          </div>

          {/* Button example */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Кнопка с переходами</h3>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                border: 'none',
                borderRadius: borderRadius.md,
                fontWeight: 500,
                cursor: 'pointer',
                transition: transitions.colors,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
              }}
            >
              Hover me
            </button>
          </div>
        </div>
      </div>
    );
  },
};
