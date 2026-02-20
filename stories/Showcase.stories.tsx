/**
 * Trushnin UI - Showcase Story
 *
 * Общая визуальная демонстрация всех компонентов и возможностей библиотеки.
 * Этот story показывает все компоненты, примитивы, варианты и состояния в сжатом виде.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '@trushnin-ui/theme';
import {
  Button,
  IconButton,
  Input,
  NumberInput,
  Select,
  Tooltip,
  Popover,
} from '@trushnin-ui/components';
import { Box, Text, Stack, Icon } from '@trushnin-ui/primitives';

const meta: Meta = {
  title: 'Showcase/All Components',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Полная демонстрация всех компонентов и возможностей Trushnin UI библиотеки',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Главный showcase - демонстрация всех компонентов
 */
export const AllComponents: Story = {
  render: () => (
    <Stack direction="column" gap={8}>
      {/* Заголовок */}
      <Box>
        <Text variant="h1" style={{ marginBottom: '0.5rem' }}>
          Trushnin UI Component Library
        </Text>
        <Text variant="body" color="secondary">
          Полная демонстрация всех компонентов, вариантов и возможностей библиотеки
        </Text>
      </Box>

      {/* Buttons Section */}
      <Box>
        <Text variant="h2" style={{ marginBottom: '1.5rem' }}>
          Buttons
        </Text>
        <Stack direction="column" gap={6}>
          {/* Button Variants */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Button Variants
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </Stack>
          </Box>

          {/* Button Sizes */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Button Sizes
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </Stack>
          </Box>

          {/* Button States */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Button States
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button fullWidth style={{ maxWidth: '300px' }}>
                Full Width
              </Button>
            </Stack>
          </Box>

          {/* Buttons with Icons */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Buttons with Icons
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <Button
                icon={
                  <Icon size="sm">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </Icon>
                }
              >
                Left Icon
              </Button>
              <Button
                iconRight={
                  <Icon size="sm">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </Icon>
                }
              >
                Right Icon
              </Button>
            </Stack>
          </Box>

          {/* Icon Buttons */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Icon Buttons
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <IconButton aria-label="Primary" variant="primary">
                <Icon size="sm">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </Icon>
              </IconButton>
              <IconButton aria-label="Secondary" variant="secondary">
                <Icon size="sm">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </Icon>
              </IconButton>
              <IconButton aria-label="Outline" variant="outline">
                <Icon size="sm">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </Icon>
              </IconButton>
              <IconButton aria-label="Danger" variant="danger">
                <Icon size="sm">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </Icon>
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Form Inputs Section */}
      <Box>
        <Text variant="h2" style={{ marginBottom: '1.5rem' }}>
          Form Inputs
        </Text>
        <Stack direction="column" gap={6}>
          {/* Input Sizes */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Input Sizes
            </Text>
            <Stack direction="column" gap={3} style={{ width: '400px' }}>
              <Input size="xs" placeholder="Extra Small" />
              <Input size="sm" placeholder="Small" />
              <Input size="md" placeholder="Medium" />
              <Input size="lg" placeholder="Large" />
              <Input size="xl" placeholder="Extra Large" />
            </Stack>
          </Box>

          {/* Input States */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Input States
            </Text>
            <Stack direction="column" gap={3} style={{ width: '400px' }}>
              <Input placeholder="Normal state" />
              <Input placeholder="Disabled state" disabled />
              <Input placeholder="Error state" error helperText="This field is required" />
              <Input label="With Label" placeholder="Enter text" helperText="Helper text here" />
            </Stack>
          </Box>

          {/* Input with Icons */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Input with Icons
            </Text>
            <Stack direction="column" gap={3} style={{ width: '400px' }}>
              <Input
                icon={
                  <Icon size="sm">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </Icon>
                }
                placeholder="Search users"
              />
              <Input
                iconRight={
                  <Icon size="sm">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </Icon>
                }
                placeholder="Search"
              />
            </Stack>
          </Box>

          {/* Number Input */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Number Input
            </Text>
            <Stack direction="column" gap={3} style={{ width: '400px' }}>
              <NumberInput placeholder="Enter number" />
              <NumberInput
                label="Age"
                min={0}
                max={120}
                placeholder="Enter age"
                helperText="Must be between 0 and 120"
              />
              <NumberInput
                label="Price"
                min={0}
                step={0.01}
                placeholder="0.00"
                helperText="Enter price in dollars"
              />
              <NumberInput placeholder="Error state" error helperText="Invalid number" />
            </Stack>
          </Box>

          {/* Select */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Select
            </Text>
            <Stack direction="column" gap={3} style={{ width: '400px' }}>
              <Select
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                  { value: '4', label: 'Option 4' },
                ]}
                placeholder="Select an option"
              />
              <Select
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                ]}
                label="Country"
                placeholder="Select country"
                helperText="Choose your country"
              />
              <Select
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                ]}
                placeholder="Error state"
                error
                helperText="This field is required"
              />
              <Select
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
                placeholder="Disabled state"
                disabled
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Overlays Section */}
      <Box>
        <Text variant="h2" style={{ marginBottom: '1.5rem' }}>
          Overlays
        </Text>
        <Stack direction="column" gap={6}>
          {/* Tooltips */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Tooltips
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <Tooltip content="Top tooltip" placement="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" placement="right">
                <Button>Right</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" placement="left">
                <Button>Left</Button>
              </Tooltip>
              <Tooltip content="Delete item">
                <IconButton aria-label="Delete" variant="danger">
                  <Icon size="sm">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </Icon>
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>

          {/* Popovers */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Popovers
            </Text>
            <Stack direction="row" gap={3} style={{ flexWrap: 'wrap' }}>
              <Popover
                content={
                  <Stack direction="column" gap={2}>
                    <Text variant="h4">Popover Title</Text>
                    <Text variant="bodySmall">This is a popover with rich content.</Text>
                    <Button size="sm" variant="primary">
                      Action
                    </Button>
                  </Stack>
                }
              >
                <Button>Click for Popover</Button>
              </Popover>
              <Popover content={<div>Simple popover content</div>} placement="right">
                <Button>Right Popover</Button>
              </Popover>
              <Popover content={<div>Hover to see popover</div>} trigger="hover">
                <Button>Hover for Popover</Button>
              </Popover>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Primitives Section */}
      <Box>
        <Text variant="h2" style={{ marginBottom: '1.5rem' }}>
          Primitives
        </Text>
        <Stack direction="column" gap={6}>
          {/* Text Variants */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Text Variants
            </Text>
            <Stack direction="column" gap={2}>
              <Text variant="h1">Heading H1</Text>
              <Text variant="h2">Heading H2</Text>
              <Text variant="h3">Heading H3</Text>
              <Text variant="h4">Heading H4</Text>
              <Text variant="h5">Heading H5</Text>
              <Text variant="h6">Heading H6</Text>
              <Text variant="body">Body</Text>
              <Text variant="bodySmall">Body Small</Text>
              <Text variant="caption">Caption</Text>
              <Text variant="label">Label</Text>
              <Text variant="code">Code: const x = 1;</Text>
            </Stack>
          </Box>

          {/* Stack Layout */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Stack Layout
            </Text>
            <Stack direction="row" gap={4} style={{ flexWrap: 'wrap' }}>
              <Box
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-gray-100)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <Text>Item 1</Text>
              </Box>
              <Box
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-gray-100)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <Text>Item 2</Text>
              </Box>
              <Box
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-gray-100)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <Text>Item 3</Text>
              </Box>
            </Stack>
          </Box>

          {/* Icons */}
          <Box>
            <Text variant="h4" style={{ marginBottom: '1rem' }}>
              Icons
            </Text>
            <Stack direction="row" gap={4} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <Icon size="xs">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </Icon>
              <Icon size="sm">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </Icon>
              <Icon size="md">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </Icon>
              <Icon size="lg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </Icon>
              <Icon size="xl">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </Icon>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Real World Example */}
      <Box>
        <Text variant="h2" style={{ marginBottom: '1.5rem' }}>
          Real World Example
        </Text>
        <Box
          style={{
            padding: '2rem',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--color-white)',
          }}
        >
          <Stack direction="column" gap={6}>
            <Box>
              <Text variant="h3" style={{ marginBottom: '0.5rem' }}>
                User Profile Form
              </Text>
              <Text variant="bodySmall" color="secondary">
                Example form demonstrating component integration
              </Text>
            </Box>

            <Stack direction="column" gap={4}>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                helperText="This will be displayed on your profile"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                icon={
                  <Icon size="sm">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </Icon>
                }
              />
              <NumberInput
                label="Age"
                min={18}
                max={100}
                placeholder="Enter your age"
                helperText="Must be 18 or older"
              />
              <Select
                label="Country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'de', label: 'Germany' },
                ]}
                placeholder="Select your country"
              />
            </Stack>

            <Stack direction="row" gap={3} style={{ justifyContent: 'flex-end' }}>
              <Button variant="outline">Cancel</Button>
              <Tooltip content="Save your profile information">
                <Button variant="primary">Save Profile</Button>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  ),
};
