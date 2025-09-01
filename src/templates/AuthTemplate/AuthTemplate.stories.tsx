import AuthTemplate from './AuthTemplate';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AuthTemplate> = {
  title: 'Templates/AuthTemplate',
  component: AuthTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AuthTemplate>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Conteúdo de exemplo</h1>
          <p className="text-neutral-600 text-center mt-4">
            Este é um exemplo de conteúdo dentro do AuthTemplate
          </p>
        </div>
      </div>
    </AuthTemplate>
  ),
};
