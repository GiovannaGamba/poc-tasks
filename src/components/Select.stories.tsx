import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'enterprise'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },  
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'Opção 1', value: 'option1' },
  { label: 'Opção 2', value: 'option2' },
  { label: 'Opção 3', value: 'option3' },
];

const companyOptions = [
  { label: 'Contraktor - Produto', value: 'produto' },
  { label: 'Contraktor - Engenharia', value: 'engenharia' },
];

export const Default: Story = {
  args: {
    placeholder: 'Selecione uma opção',
    options: defaultOptions,
  },
};

export const Enterprise: Story = {
  args: {
    variant: 'enterprise',
    placeholder: 'Selecione uma empresa',
    options: companyOptions,
  },
};
