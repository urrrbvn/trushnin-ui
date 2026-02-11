# Trushnin UI

React UI Kit с TypeScript, CSS Modules и поддержкой tree-shaking.

## Структура проекта

Проект организован как монорепо с использованием pnpm workspaces:

```
trushnin-ui/
├── packages/
│   ├── tokens/      # Design tokens
│   ├── theme/       # Тема и провайдеры
│   ├── utils/       # Утилиты
│   ├── primitives/  # Примитивные компоненты
│   ├── components/  # Стилизованные компоненты
│   └── ui/          # Публичное API
└── apps/
    └── demo/        # Демо-приложение
```

## Разработка

### Установка зависимостей

```bash
pnpm install
```

### Сборка

```bash
pnpm build
```

### Линтинг

```bash
pnpm lint
pnpm lint:fix
```

### Форматирование

```bash
pnpm format
```

### Проверка типов

```bash
pnpm type-check
```

### Тестирование

```bash
pnpm test
```

## Технологии

- **TypeScript** 5.x
- **React** 18+
- **Vite** - сборка библиотеки
- **CSS Modules** - изоляция стилей
- **ESLint** + **Prettier** - линтинг и форматирование
- **Vitest** - тестирование (планируется)

## Лицензия

MIT
