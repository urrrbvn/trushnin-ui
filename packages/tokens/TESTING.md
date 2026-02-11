# Инструкция по запуску тестов

## Описание

Тесты для пакета `@trushnin-ui/tokens` написаны с использованием **Vitest** и проверяют корректность работы функций генерации CSS переменных.

## Запуск тестов

### Из корня проекта

```bash
# Запустить все тесты в проекте
pnpm test

# Запустить тесты только для пакета tokens
pnpm --filter @trushnin-ui/tokens test
```

### Из директории пакета tokens

```bash
cd packages/tokens

# Запустить тесты один раз
pnpm test

# Запустить тесты в режиме watch (автоматический перезапуск при изменениях)
pnpm test:watch

# Запустить тесты с UI интерфейсом
pnpm test:ui
```

## Что тестируется

### Функция `generateCSSVars()`

- Возвращает валидную CSS строку с селектором `:root`
- Генерирует CSS переменные с правильным префиксом `--trushnin-ui-`
- Включает переменные для всех категорий токенов:
  - Цвета (colors, semanticColors)
  - Типографика (fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings)
  - Отступы (spacing, semanticSpacing, sizes)
  - Breakpoints
  - Формы и эффекты (borderRadius, shadows, transitions)
- Правильно форматирует CSS переменные
- Заканчивается переносом строки

### Функция `generateCSSVarsObject()`

- Возвращает объект с CSS переменными
- Генерирует переменные с правильным префиксом
- Включает все категории токенов
- Значения соответствуют исходным токенам

### Согласованность функций

- Обе функции генерируют одинаковые переменные
- Значения для одних и тех же токенов совпадают в обеих функциях

## Структура тестов

```
packages/tokens/
├── src/
│   └── generateCSSVars.test.ts  # Тесты для функций генерации CSS
└── vitest.config.ts              # Конфигурация Vitest
```

## Конфигурация

Конфигурация Vitest находится в файле `packages/tokens/vitest.config.ts`:

- `globals: true` - глобальные функции тестирования (describe, it, expect)
- `environment: 'node'` - окружение Node.js (без DOM)
- `include: ['src/**/*.test.ts']` - паттерн для поиска тестовых файлов

## Покрытие кода

Для просмотра покрытия кода запустите:

```bash
cd packages/tokens
pnpm test -- --coverage
```

Отчет о покрытии будет сгенерирован в директории `coverage/`.

## Отладка тестов

Для отладки конкретного теста используйте `test.only`:

```typescript
it.only('должна возвращать строку с :root селектором', () => {
  // ...
});
```

Для пропуска теста используйте `test.skip`:

```typescript
it.skip('пропущенный тест', () => {
  // ...
});
```

## Интеграция с CI/CD

Тесты автоматически запускаются в CI/CD pipeline (см. `.github/workflows/ci.yml`) при:

- Push в ветки `main` и `develop`
- Создании Pull Request
