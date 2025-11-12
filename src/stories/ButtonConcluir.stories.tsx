import type { Meta, StoryObj } from '@storybook/react';
import { ButtonConcluir } from './ButtonConcluir';

const meta = {
  title: 'Calmio/ButtonConcluir',
  component: ButtonConcluir,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonConcluir>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Concluir',
  },
};