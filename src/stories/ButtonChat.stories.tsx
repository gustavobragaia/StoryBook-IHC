import type { Meta, StoryObj } from '@storybook/react';
import { ButtonChat } from './ButtonChat';

const meta = {
  title: 'Calmio/ButtonChat',
  component: ButtonChat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Chat',
  },
};