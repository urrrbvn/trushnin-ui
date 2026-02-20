import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@trushnin-ui/tokens': path.resolve(dirname, '../packages/tokens/src'),
          '@trushnin-ui/theme': path.resolve(dirname, '../packages/theme/src'),
          '@trushnin-ui/primitives': path.resolve(dirname, '../packages/primitives/src'),
          '@trushnin-ui/components': path.resolve(dirname, '../packages/components/src'),
          '@trushnin-ui/utils': path.resolve(dirname, '../packages/utils/src'),
        },
      },
    });
  },
};
export default config;
