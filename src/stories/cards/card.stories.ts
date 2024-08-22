import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/cards/Card';
import { projects } from '../../mockData/projects';


const meta = {
  title: 'Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    project: projects[0]
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartaConProyecto: Story = {
  args: {
    project: projects[0]
  },
};
