import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from './ChatBubble';

const meta = {
  title: 'Calmio/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BotMessage: Story = {
  args: {
    sender: 'bot',
    message:
      'Olá Lucas. Eu sou o chatbot do Calmio e estou aqui para te ajudar com suas emoções. Isso não é uma terapia, apenas uma IA treinada com a supervisão de psicólogos. Nosso aplicativo não menospreza a importância de um profissional.',
  },
};

export const UserMessage: Story = {
  args: {
    sender: 'user',
    message: 'Entendi, obrigado pelo aviso 😊',
  },
};