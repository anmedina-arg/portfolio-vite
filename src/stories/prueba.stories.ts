import type { Meta, StoryObj } from '@storybook/react';
import Prueba from '../components/prueba/Prueba';

const meta = {
  title: 'Prueba',
  component: Prueba,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     icon: { control: IconBase }, // y esto?
  //     href: { control: 'text' },
  //     key: { control: 'text' },
  //     className: { control: 'text' },
  //     title: { control: 'text' },
  //   },
} satisfies Meta<typeof Prueba>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PruebaDeTexto: Story = {
  //   args: {
  //     icon: <HiOutlineHome />,
  //     href: '',
  //     key: '',
  //     className: '',
  //     title: 'titulo'
  //   },
};
