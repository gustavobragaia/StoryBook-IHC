import type { Meta, StoryObj } from '@storybook/react';
import { CardExercicio } from './CardExercicio';

const meta = {
  title: 'Calmio/CardExercicio',
  component: CardExercicio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardExercicio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titulo: 'Pose braços de águia',
    descricao: 'Sente-se de joelhos com...',
    concluido: true,
  },
};