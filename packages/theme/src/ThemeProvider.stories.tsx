import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './ThemeContext';
import { generateCSSVarsObject } from '@trushnin-ui/tokens';

/**
 * Stories для визуализации ThemeProvider
 * Демонстрирует применение темы и CSS переменных
 */
const meta: Meta<typeof ThemeProvider> = {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    docs: {
      description: {
        component:
          'Провайдер темы, который применяет CSS переменные из токенов и предоставляет доступ к теме через контекст',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

/**
 * Компонент для демонстрации использования темы
 * Используется в stories для показа применения CSS переменных
 */
function ThemeDemo() {
  const theme = useTheme();
  const cssVars = theme.cssVariables;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Демонстрация применения темы</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Цвета */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Цвета через CSS переменные</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--trushnin-ui-color-blue-500)',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 500,
              }}
            >
              Primary (CSS var)
            </div>
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 500,
              }}
            >
              Semantic Primary
            </div>
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--trushnin-ui-color-semantic-success-default)',
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
                backgroundColor: 'var(--trushnin-ui-color-semantic-error-default)',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 500,
              }}
            >
              Error
            </div>
          </div>
        </div>

        {/* Типографика */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Типографика через CSS переменные</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div
              style={{
                fontSize: 'var(--trushnin-ui-font-size-base)',
                color: 'var(--trushnin-ui-color-semantic-text-primary)',
              }}
            >
              Base font size (var(--trushnin-ui-font-size-base))
            </div>
            <div
              style={{
                fontSize: 'var(--trushnin-ui-font-size-lg)',
                color: 'var(--trushnin-ui-color-semantic-text-primary)',
              }}
            >
              Large font size (var(--trushnin-ui-font-size-lg))
            </div>
            <div
              style={{
                fontSize: 'var(--trushnin-ui-font-size-xl)',
                color: 'var(--trushnin-ui-color-semantic-text-primary)',
              }}
            >
              Extra large font size (var(--trushnin-ui-font-size-xl))
            </div>
          </div>
        </div>

        {/* Отступы */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Отступы через CSS переменные</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: 'var(--trushnin-ui-spacing-4)',
                backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)',
                border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
                borderRadius: '8px',
              }}
            >
              Padding: var(--trushnin-ui-spacing-4)
            </div>
            <div
              style={{
                padding: 'var(--trushnin-ui-spacing-8)',
                backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)',
                border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
                borderRadius: '8px',
              }}
            >
              Padding: var(--trushnin-ui-spacing-8)
            </div>
          </div>
        </div>

        {/* Информация о теме */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Информация о теме</h3>
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)',
              border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
            }}
          >
            <div>Всего CSS переменных: {Object.keys(cssVars).length}</div>
            <div style={{ marginTop: '0.5rem' }}>
              Пример: --trushnin-ui-color-blue-500 = {cssVars['--trushnin-ui-color-blue-500']}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Тема по умолчанию
 * Использует все токены из пакета tokens
 */
export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

/**
 * Кастомная тема
 * Демонстрирует возможность переопределения CSS переменных
 */
export const CustomTheme: Story = {
  render: () => {
    const customCSSVars = {
      ...generateCSSVarsObject(),
      '--trushnin-ui-color-blue-500': '#ff6b6b',
      '--trushnin-ui-color-semantic-primary-default': '#ff6b6b',
    };

    return (
      <ThemeProvider theme={{ cssVariables: customCSSVars }}>
        <div style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Кастомная тема</h2>
          <p style={{ marginBottom: '1rem' }}>
            В этой теме primary цвет изменен на красный (#ff6b6b)
          </p>
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 500,
              display: 'inline-block',
            }}
          >
            Custom Primary Color
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

/**
 * Вложенные провайдеры
 * Демонстрирует работу вложенных ThemeProvider (внутренний переопределяет внешний)
 */
export const NestedProviders: Story = {
  render: () => {
    const outerCSSVars = {
      ...generateCSSVarsObject(),
      '--trushnin-ui-color-blue-500': '#3b82f6',
    };

    const innerCSSVars = {
      ...generateCSSVarsObject(),
      '--trushnin-ui-color-blue-500': '#ff6b6b',
    };

    return (
      <ThemeProvider theme={{ cssVariables: outerCSSVars }}>
        <div style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Вложенные провайдеры</h2>
          <div style={{ marginBottom: '2rem' }}>
            <h3>Внешний провайдер (синий)</h3>
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--trushnin-ui-color-blue-500)',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Outer Provider
            </div>
          </div>
          <ThemeProvider theme={{ cssVariables: innerCSSVars }}>
            <div>
              <h3>Внутренний провайдер (красный)</h3>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-blue-500)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                  display: 'inline-block',
                }}
              >
                Inner Provider
              </div>
            </div>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    );
  },
};

/**
 * Примеры использования цветов
 * Демонстрирует применение различных цветов из темы
 */
export const ColorExamples: Story = {
  render: () => (
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Примеры использования цветов</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Семантические цвета */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Семантические цвета</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-primary-default)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Primary
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-secondary-default)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Secondary
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-success-default)',
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
                  backgroundColor: 'var(--trushnin-ui-color-semantic-warning-default)',
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
                  backgroundColor: 'var(--trushnin-ui-color-semantic-error-default)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                Error
              </div>
            </div>
          </div>

          {/* Цвета текста */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Цвета текста</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--trushnin-ui-color-semantic-text-primary)' }}>
                Primary text - основной текст
              </div>
              <div style={{ color: 'var(--trushnin-ui-color-semantic-text-secondary)' }}>
                Secondary text - вторичный текст
              </div>
              <div style={{ color: 'var(--trushnin-ui-color-semantic-text-tertiary)' }}>
                Tertiary text - третичный текст
              </div>
              <div style={{ color: 'var(--trushnin-ui-color-semantic-text-disabled)' }}>
                Disabled text - неактивный текст
              </div>
            </div>
          </div>

          {/* Цвета фона */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Цвета фона</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-background-default)',
                  border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
                  borderRadius: '8px',
                  color: 'var(--trushnin-ui-color-semantic-text-primary)',
                }}
              >
                Default Background
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-background-secondary)',
                  border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
                  borderRadius: '8px',
                  color: 'var(--trushnin-ui-color-semantic-text-primary)',
                }}
              >
                Secondary Background
              </div>
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--trushnin-ui-color-semantic-background-tertiary)',
                  border: '1px solid var(--trushnin-ui-color-semantic-border-default)',
                  borderRadius: '8px',
                  color: 'var(--trushnin-ui-color-semantic-text-primary)',
                }}
              >
                Tertiary Background
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};
