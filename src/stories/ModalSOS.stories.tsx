import type { Meta, StoryObj } from '@storybook/react';
import { ModalSOS } from './ModalSOS';

const meta = {
  title: 'Calmio/ModalSOS',
  component: ModalSOS,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalSOS>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => alert('Fechando modal'),
    onCallContact: () => alert('Ligando para contato de segurança...'),
    onCallCVV: () => alert('Ligando para o CVV...'),
  },
};