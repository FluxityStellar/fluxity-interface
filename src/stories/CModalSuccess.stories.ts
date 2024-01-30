import type { Meta, StoryObj } from '@storybook/react';

import CModalSuccess from '../components/CModalSuccess';

const meta = {
  title: 'Components/CModalSuccess',
  component: CModalSuccess,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CModalSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalSuccess: Story = {
  args: {
    isOpen: true,
    setIsOpen: true,
  },
};