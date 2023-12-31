import type { Meta, StoryObj } from '@storybook/react';

import CInput from 'src/components/CInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/CInput',
  component: CInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultCInput: Story = {
  args: {
    icon: 'a',
    label: 'Receiver wallet address',
    details: 'address',
    placeholder: 'Address or Name in the Address Book',
  },
};

export const CInputWithoutIcon: Story = {
  args: {
    label: 'Receiver wallet address',
    details: 'address',
    placeholder: 'Address or Name in the Address Book',
  },
};

export const CInputWithoutLabel: Story = {
  args: {
    details: 'address',
    placeholder: 'Address or Name in the Address Book',
  },
};

export const CInputWithoutDetails: Story = {
  args: {
    placeholder: 'Address or Name in the Address Book',
  },
};

export const CInputWithoutPlaceholder: Story = {
  args: {},
};
