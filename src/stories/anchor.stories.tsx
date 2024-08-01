import type { Meta, StoryObj } from '@storybook/react';
import Anchor from '../components/anchor/Anchor';
import { HiOutlineHome } from "react-icons/hi";
import { IconBase } from 'react-icons'; // y esto??

const meta = {
  title: 'Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: IconBase }, // y esto?
    href: { control: 'text' },
    className: { control: 'text' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorPrimary: Story = {
  args: {
    icon: <HiOutlineHome />,
    href: '',
    className: '',
    title: 'titulo'
  },
};
