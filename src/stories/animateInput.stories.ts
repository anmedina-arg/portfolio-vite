import type { Meta, StoryObj } from '@storybook/react';
import AnimateInput from '../components/inputs/animateInput';

const meta = {
  title: 'AnimateInput',
  component: AnimateInput,
//   parameters: {
//     layout: 'centered',
//   },
  tags: ['autodocs'],
//   argTypes: {
//     text: 'string'
//   },
} satisfies Meta<typeof AnimateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputAnimado: Story = {
//   args: {
//     text: 'hola mi nombre es andres'
//   },
};
