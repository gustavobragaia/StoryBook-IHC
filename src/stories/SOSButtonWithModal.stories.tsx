import type { Meta, StoryObj } from '@storybook/react';
import { SOSButtonWithModal } from './SOSButtonWithModal';

const meta = {
  title: 'Calmio/SOSButtonWithModal',
  component: SOSButtonWithModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SOSButtonWithModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};