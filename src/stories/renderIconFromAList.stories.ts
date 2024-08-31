import type { Meta, StoryObj } from '@storybook/react';
import MemoizedRenderIconFromAList from '../components/renderIconFromAList/renderIconFromAList';

// Un array de ejemplo con las tecnologías
const ArrayDeIconosDePrueba = [
  'HTML',
  'CSS',
  'Javascript',
  'ASD',
  'Typescript',
  'React',
  'Postgres',
];

// Definición del meta para la historia
const meta = {
  title: 'MemoizedRenderIconFromAList',
  component: MemoizedRenderIconFromAList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    technologies: {
      control: {
        type: 'object',
      },
      description: 'Lista de tecnologías a renderizar',
      defaultValue: ArrayDeIconosDePrueba, // Este es el valor por defecto
    },
  },
} satisfies Meta<typeof MemoizedRenderIconFromAList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Definición de la historia
export const ArrayDeIconos: Story = {
  args: {
    technologies: ArrayDeIconosDePrueba,
  },
};
