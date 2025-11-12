import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSOS } from './buttonSOS';

const meta = {
  title: 'Calmio/ButtonSOS',
  component: ButtonSOS,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSOS>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'SOS',
  },
};