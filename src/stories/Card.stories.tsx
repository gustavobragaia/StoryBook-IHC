import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { BarChart2, MessageCircle, Activity } from 'lucide-react';

const meta = {
  title: 'Calmio/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rotina: Story = {
  args: {
    icon: <BarChart2 size={20} color="#8A8A8A" />,
    title: 'Construindo uma rotina',
    description: 'Veja seu progresso',
  },
};

export const Diario: Story = {
  args: {
    icon: <MessageCircle size={20} color="#8A8A8A" />,
    title: 'Diário de conversas',
    description: 'Veja seu histórico',
  },
};

export const Exercicio: Story = {
  args: {
    icon: <Activity size={20} color="#8A8A8A" />,
    title: 'Exercício recomendado',
    description: '30min - 90min',
  },
};