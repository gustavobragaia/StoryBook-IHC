import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput } from './ChatInput';

const meta = {
  title: 'Calmio/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Responda ou diga “ajuda”',
    onSend: (msg) => alert(`Mensagem enviada: ${msg}`),
  },
};