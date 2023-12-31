import type { Meta, StoryObj } from '@storybook/react';

import CSelect from '../components/CSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/CInput',
  component: CSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Select: Story = {
  args: {
    label: 'Token',
    details: 'Select a token',
    placeholder: 'Select token',
  },
};

export const SelectWithoutLabel: Story = {
  args: {
    placeholder: 'Select token',
  },
};

export const SelectWithoutDetails: Story = {
  args: {
    placeholder: 'Select token',
    label: 'Token',
  },
};
