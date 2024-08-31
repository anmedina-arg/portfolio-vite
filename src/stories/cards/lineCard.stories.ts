import type { Meta, StoryObj } from '@storybook/react';
import { projects } from '../../mockData/projects';
import LineCard from '../../components/cards/lineCard';

const meta = {
  title: 'Cards/LineCard',
  component: LineCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    project: projects[0],
  },
} satisfies Meta<typeof LineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartaEnLinea: Story = {
  args: {
    project: projects[0],
  },
};
