import NavBar from './NavBar';  
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavBar> = {
  title: 'Containers/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    onNewChange: {
      action: 'onNewChange',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'João Silva',
    title: 'Início',
  },
};
