import UnauthenticatedTemplate from './UnauthenticatedTemplate';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UnauthenticatedTemplate> = {
  title: 'Templates/UnauthenticatedTemplate',
  component: UnauthenticatedTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
