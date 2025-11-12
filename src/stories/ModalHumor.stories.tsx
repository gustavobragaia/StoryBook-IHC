import type { Meta, StoryObj } from '@storybook/react';
import { ModalHumor } from './ModalHumor';

const meta = {
  title: 'Calmio/ModalHumor',
  component: ModalHumor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalHumor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => alert('Modal fechado'),
  },
};