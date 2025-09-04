import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typhography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Sistema de tipografia baseado na fonte Inter com diferentes variantes de tamanho, peso e espaçamento.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-1', 'heading-2', 'heading-3',
        'title-1', 'title-2',
        'body-1', 'body-2', 'body-3',
        'caption-1', 'caption-2',
        'detail-1', 'detail-2'
      ],
      description: 'Variante de tipografia',
    },
    component: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'Elemento HTML a ser renderizado',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do texto',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story para mostrar todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <Typography variant="heading-1" component="h1">
          Heading 1 - Título Principal (36px, 600, 48px)
        </Typography>
        <Typography variant="heading-2" component="h2">
          Heading 2 - Subtítulo (24px, 600, 32px)
        </Typography>
        <Typography variant="heading-3" component="h3">
          Heading 3 - Título Menor (18px, 600, 24px)
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="title-1" component="h4">
          Title 1 - Título Semi Bold (16px, 600, 22px)
        </Typography>
        <Typography variant="title-2" component="h5">
          Title 2 - Título Regular (16px, 400, 22px)
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="body-1" component="p">
          Body 1 - Texto Bold (14px, 700, 20px, 0.2%)
        </Typography>
        <Typography variant="body-2" component="p">
          Body 2 - Texto Medium (14px, 500, 20px, 0.2%)
        </Typography>
        <Typography variant="body-3" component="p">
          Body 3 - Texto Regular (14px, 400, 20px, 0.2%)
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="caption-1" component="span" className="block">
          Caption 1 - Legenda Bold (12px, 700, 18px, 0.2%)
        </Typography>
        <Typography variant="caption-2" component="span" className="block">
          Caption 2 - Legenda Medium (12px, 500, 18px, 0.2%)
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="detail-1" component="span" className="block">
          Detail 1 - Detalhe Bold (10px, 700, 16px, 0.3%)
        </Typography>
        <Typography variant="detail-2" component="span" className="block">
          Detail 2 - Detalhe Medium (10px, 500, 16px, 0.3%)
        </Typography>
      </div>
    </div>
  ),
};

// Story para mostrar uso prático
export const PracticalExample: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6 p-6">
      <Typography variant="heading-1" component="h1">
        Bem-vindo ao Sistema
      </Typography>
      
      <Typography variant="heading-2" component="h2">
        Gerenciamento de Usuários
      </Typography>
      
      <Typography variant="body-2" component="p">
        Este é um exemplo prático de como usar o sistema de tipografia em uma interface real. 
        O texto do corpo usa a variante body-2 para melhor legibilidade.
      </Typography>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <Typography variant="title-1" component="h3">
          Informações Importantes
        </Typography>
        <Typography variant="body-3" component="p">
          Este é um bloco de informação que usa title-1 para o cabeçalho e body-3 para o conteúdo.
        </Typography>
      </div>
      
      <div className="flex items-center gap-2">
        <Typography variant="caption-1" component="span">
          Status:
        </Typography>
        <Typography variant="caption-2" component="span" className="text-success-500">
          Ativo
        </Typography>
      </div>
      
      <Typography variant="detail-2" component="span" className="text-neutral-500">
        Última atualização: hoje às 14:30
      </Typography>
    </div>
  ),
};

// Story para mostrar diferentes componentes HTML
export const HTMLComponents: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <Typography variant="heading-2" component="h1">
        H1 com Heading 2
      </Typography>
      <Typography variant="title-1" component="h2">
        H2 com Title 1
      </Typography>
      <Typography variant="body-1" component="h3">
        H3 com Body 1
      </Typography>
      <Typography variant="body-2" component="p">
        Parágrafo com Body 2
      </Typography>
      <Typography variant="caption-1" component="span">
        Span com Caption 1
      </Typography>
    </div>
  ),
};

// Story para mostrar com controles
export const Interactive: Story = {
  args: {
    variant: 'body-2',
    component: 'p',
    children: 'Texto interativo - você pode alterar as propriedades nos controles!',
  },
};
