import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'object' },
    isLoading: { control: 'boolean' },
    emptyMessage: { control: 'text' },
    createButtonText: { control: 'text' },
    showActions: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Dados de exemplo
const sampleData = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', status: 'ativo', cargo: 'Desenvolvedor' },
  { id: 2, nome: 'Maria Santos', email: 'maria@email.com', status: 'inativo', cargo: 'Designer' },
  { id: 3, nome: 'Pedro Costa', email: 'pedro@email.com', status: 'ativo', cargo: 'Product Manager' },
  { id: 4, nome: 'Ana Oliveira', email: 'ana@email.com', status: 'pendente', cargo: 'QA Engineer' },
];

const sampleColumns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Nome', accessor: 'nome' },
  { header: 'Email', accessor: 'email' },
  { header: 'Status', accessor: 'status' },
  { header: 'Cargo', accessor: 'cargo' },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns as any,
  },
};