import type { Meta, StoryObj } from '@storybook/react';
import Marquee from '../components/maarquee/marquee';


const meta = {
  title: 'Marquee',
  component: Marquee,
//   parameters: {
//     layout: 'centered',
//   },
  tags: ['autodocs'],
//   argTypes: {
//     text: 'string'
//   },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarqueeComponent: Story = {};
