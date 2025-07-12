import type { Meta, StoryObj } from '@storybook/react';
import Tabs, { Tab } from '../components/tabs/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ComponentOne = () => {
  return (
    <div>
      <h1>Contenido de la Pestaña 1</h1>
      <p>Este es el contenido para la primera pestaña.</p>
    </div>
  );
};
const ComponentTwo = () => {
  return (
    <div>
      <h1>Contenido de la Pestaña 2</h1>
      <p>Este es el contenido para la segunda pestaña.</p>
    </div>
  );
};
const ComponentThree = () => {
  return (
    <div>
      <h1>Contenido de la Pestaña 3</h1>
      <p>Este es el contenido para la tercera pestaña.</p>
    </div>
  );
};

export const TabsComponent: Story = {
  args: {
    children: [
      <Tab key="1" label="Pestaña 1" component={<ComponentOne />} />,
      <Tab key="2" label="Pestaña 2" component={<ComponentTwo />} />,
      <Tab key="2" label="Pestaña 2" component={<ComponentThree />} />,
    ],
  },
  render: (args) => <Tabs {...args} />,
};
