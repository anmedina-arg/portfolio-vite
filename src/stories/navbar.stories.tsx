import type { Meta, StoryObj } from '@storybook/react';
import Nav from '../components/nav/Nav';
import { itemsNav } from '../components/nav/NavItems';

const meta = {
	title: 'Nav',
	component: Nav,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavBar: Story = {
	args: {
		items: itemsNav
	}
};