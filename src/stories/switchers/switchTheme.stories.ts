import type { Meta, StoryObj } from '@storybook/react';
import SwitchTheme from '../../components/switchTheme/switchTheme';

const meta = {
  title: 'Switchers/SwitchTheme',
  component: SwitchTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switch: Story = {};
