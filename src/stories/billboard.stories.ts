import type { Meta, StoryObj } from '@storybook/react';
import Billboard from '../components/billboard/billboard';

const meta = {
  title: 'Billboard',
  component: Billboard,
//   parameters: {
//     layout: 'centered',
//   },
  tags: ['autodocs'],
  argTypes: {
    text: 'string'
  },
} satisfies Meta<typeof Billboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeatBillboard: Story = {
  args: {
    text: 'hola mi nombre es andres'
  },
};
