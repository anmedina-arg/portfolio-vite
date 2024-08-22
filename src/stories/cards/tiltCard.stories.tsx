import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/cards/Card';
import TiltEffectComponent from '../../components/tiltEffectComponent/tiltEffectComponent';
import { projects } from '../../mockData/projects';

const meta = {
  title: 'Cards/TiltEffectComponent',
  component: TiltEffectComponent,
  // subcomponents: {Card},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   children: {< Card project={projects[0]} />}
  // },
} satisfies Meta<typeof TiltEffectComponent>;

export default meta;

type Story = StoryObj<typeof TiltEffectComponent>;

export const Prueba: Story = {
  render: (args) => (
    <TiltEffectComponent {...args}>
      <Card project={projects[0]} />
    </TiltEffectComponent>
  ),
};
