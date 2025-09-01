import ProfileMenu from './ProfileMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileMenu> = {
  title: 'Containers/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    email: {
      control: { type: 'text' },
    },
    onManage: {
      action: 'onManage',
    },
    onLogout: {
      action: 'onLogout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'João Silva',
    email: 'joao.silva@contraktor.com.br',
  },
};
