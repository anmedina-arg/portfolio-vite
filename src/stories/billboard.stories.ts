import type { Meta, StoryObj } from '@storybook/react';
import Billboard from '../components/billboard/billboard';

const meta = {
  title: 'Billboard',
  component: Billboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mainWord: { control: 'text' },  // Especifica un control de texto
    neonWord: { control: 'text' },  // Especifica un control de texto
  },
} satisfies Meta<typeof Billboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreatBillboard: Story = {
  args: {
    mainWord: 'frontend',
    neonWord: "developer"
  },
};
