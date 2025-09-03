import type { Meta, StoryObj } from '@storybook/react';
import { CreateModal } from './CreateModal';

const meta: Meta<typeof CreateModal> = {
  title: 'Components/CreateModal',
  component: CreateModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    fields: { control: 'object' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Campos básicos
const basicFields = [
  { name: 'nome', label: 'Nome', type: 'text' as const, required: true },
  { name: 'email', label: 'Email', type: 'text' as const, required: true },
  { name: 'idade', label: 'Idade', type: 'number' as const, required: false },
];

// Story básica
export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Criar Usuário',
    fields: basicFields,
    onSubmit: (data) => {
      alert(`Dados enviados: ${JSON.stringify(data, null, 2)}`);
    },
    onClose: () => {},
  },
};
