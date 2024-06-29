import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveColumns from '../components/responsiveColumns/responsiveColumns';

const meta = {
  title: 'ResponsiveColumns',
  component: ResponsiveColumns,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResponsiveColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColumnasResponsives: Story = {};
