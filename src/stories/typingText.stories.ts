import type { Meta, StoryObj } from '@storybook/react';
import TypingText from '../components/typing-text/TypingText';

const meta = {
  title: 'TypingText',
  component: TypingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: 'string',
  },
} satisfies Meta<typeof TypingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypingTextAnimated: Story = {
  args: {
    text: 'hola mi nombre es andres',
  },
};
