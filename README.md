# Trushnin UI

> A modern, type-safe React UI component library built with TypeScript, CSS Modules, and full tree-shaking support.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Status: Beta** 🚧 - This library is currently in beta testing. We're actively working on stability and feature completeness.

## ✨ Features

- 🎨 **Modern Design System** - Built with design tokens and CSS Modules
- 📦 **Tree-shakeable** - Import only what you need, optimized bundle size
- 🔒 **Type-safe** - Full TypeScript support with comprehensive type definitions
- 🎯 **Accessible** - Built with accessibility in mind
- 🧩 **Modular** - Layered architecture with primitives and styled components
- 🎭 **Themeable** - Flexible theming system with CSS custom properties
- ⚡ **Fast** - Optimized builds with Vite

## 📦 Installation

```bash
npm install trushnin-ui@beta
# or
pnpm add trushnin-ui@beta
# or
yarn add trushnin-ui@beta
```

## 🚀 Quick Start

```tsx
import { ThemeProvider, Button, Input } from 'trushnin-ui';
import 'trushnin-ui/styles';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Input placeholder="Enter text..." />
    </ThemeProvider>
  );
}
```

## 📚 Components

### Styled Components

- **Button** - Versatile button component with multiple variants
- **IconButton** - Button with icon support
- **Input** - Text input with validation states
- **NumberInput** - Numeric input with controls
- **Select** - Dropdown select component
- **Tooltip** - Contextual tooltip component
- **Popover** - Popover container for rich content

### Primitives

- **Box** - Flexible container component
- **Text** - Typography component with semantic variants
- **Stack** - Layout component for vertical/horizontal stacking
- **Icon** - Icon wrapper component

## 🎨 Theming

Trushnin UI uses a token-based theming system:

```tsx
import { ThemeProvider, useTheme } from 'trushnin-ui';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

function YourApp() {
  const theme = useTheme();
  // Access theme tokens
  return <div>...</div>;
}
```

## 🏗️ Architecture

The library is organized in layers:

1. **Tokens** - Design tokens (colors, typography, spacing)
2. **Theme** - Theme provider and context
3. **Utils** - Utility functions
4. **Primitives** - Base components without business logic
5. **Components** - Styled, ready-to-use components
6. **UI** - Public API barrel exports

## 📖 Documentation

For detailed documentation, component APIs, and examples, visit our [Storybook](https://your-storybook-url.com) (coming soon).

## 🛠️ Development

This project uses a monorepo structure with pnpm workspaces:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## 🧪 Testing

The library includes comprehensive testing:

- **Unit Tests** - Vitest + React Testing Library
- **Visual Testing** - Storybook + Chromatic
- **E2E Tests** - Playwright

## 📝 License

MIT © urrrbvn

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Note**: This is a beta release. APIs may change before the stable 1.0.0 release. We appreciate your feedback and bug reports!
