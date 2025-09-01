import SideBar from './SideBar';
import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, Users, FileText } from 'lucide-react';

const meta: Meta<typeof SideBar> = {
  title: 'Containers/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    activeIndex: {
      control: { type: 'number' },
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
