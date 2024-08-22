import type { Meta, StoryObj } from '@storybook/react';
import SkillCard from '../../components/cards/SkillCard';
import { FRONTEND_SKIL } from '../../mockData/skills'
import { object } from 'yup';

const meta = {
  title: 'Cards/SkillCard',
  component: SkillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    skill: object
  },
} satisfies Meta<typeof SkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextIcon: Story = {
	args: {
		skill: FRONTEND_SKIL[5]
	}
};
