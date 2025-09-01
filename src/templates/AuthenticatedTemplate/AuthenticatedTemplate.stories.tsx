import AuthenticatedTemplate from '../AuthenticatedTemplate/AuthenticatedTemplate';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AuthenticatedTemplate> = {
  title: 'Templates/AuthenticatedTemplate',
  component: AuthenticatedTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AuthenticatedTemplate>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-neutral-600">
          Este é o conteúdo principal da página autenticada.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-900">Card 1</h3>
            <p className="text-primary-700 text-sm">Conteúdo do card</p>
          </div>
          <div className="bg-success-50 p-4 rounded-lg">
            <h3 className="font-semibold text-success-900">Card 2</h3>
            <p className="text-success-700 text-sm">Conteúdo do card</p>
          </div>
          <div className="bg-secondary-50 p-4 rounded-lg">
            <h3 className="font-semibold text-secondary-900">Card 3</h3>
            <p className="text-secondary-700 text-sm">Conteúdo do card</p>
          </div>
        </div>
      </div>
    </AuthenticatedTemplate>
  ),
};
