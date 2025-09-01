import LoginContainer from '../LoginContainer/LoginContainer';  
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginContainer> = {
  title: 'Containers/LoginContainer',
  component: LoginContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
