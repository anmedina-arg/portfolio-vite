import type { Meta, StoryObj } from '@storybook/react';
import GSAPComponent from '../components/gsap/GSAPComponent';

const meta = {
  title: 'GSAPComponent',
  component: GSAPComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GSAPComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimatedBox: Story = {};
