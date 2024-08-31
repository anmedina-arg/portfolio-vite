import type { Meta, StoryObj } from '@storybook/react';
import ShineButton from '../../components/ui/buttons/shineButton';

const meta = {
  title: 'Buttons/ShineButton',
  component: ShineButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'string',
    href: 'string',
  },
} satisfies Meta<typeof ShineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWhitShine: Story = {
  args: {
    label: 'Button',
    href: '#',
  },
};
