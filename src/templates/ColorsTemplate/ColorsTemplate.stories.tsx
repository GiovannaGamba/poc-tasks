import type { Meta, StoryObj } from '@storybook/react';
import ColorsTemplate from './ColorsTemplate';

const meta: Meta<typeof ColorsTemplate> = {
  title: 'Templates/ColorsTemplate',
  component: ColorsTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ColorsTemplate

Um template reutilizável para exibir paletas de cores configuradas no Tailwind CSS.

### Características:
- **Responsivo**: Se adapta a diferentes tamanhos de tela
- **Customizável**: Permite mostrar/ocultar seções específicas
- **Flexível**: Suporta paletas de cores personalizadas
- **Documentado**: Exibe classes Tailwind e códigos hexadecimais

### Props:
- \`title\`: Título da página (padrão: "Paleta de Cores do Projeto")
- \`description\`: Descrição da página
- \`showExamples\`: Mostra seção de exemplos de uso
- \`showTextExamples\`: Mostra seção de testes de texto colorido
- \`showLimitedColors\`: Mostra paletas de cores limitadas
- \`showFullPalettes\`: Mostra paletas completas (50-900)
- \`customColorPalettes\`: Array de paletas de cores personalizadas

### Uso:
\`\`\`tsx
import ColorsTemplate from './ColorsTemplate';

// Uso básico
<ColorsTemplate />

// Com configurações personalizadas
<ColorsTemplate 
  title="Minha Paleta de Cores"
  showExamples={false}
  customColorPalettes={[
    {
      title: 'Brand Colors',
      colorName: 'brand',
      shades: ['100', '500', '900']
    }
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal da página',
    },
    description: {
      control: 'text',
      description: 'Descrição da página',
    },
    showExamples: {
      control: 'boolean',
      description: 'Mostra seção de exemplos de uso',
    },
    showTextExamples: {
      control: 'boolean',
      description: 'Mostra seção de testes de texto colorido',
    },
    showLimitedColors: {
      control: 'boolean',
      description: 'Mostra paletas de cores limitadas',
    },
    showFullPalettes: {
      control: 'boolean',
      description: 'Mostra paletas completas (50-900)',
    },
    customColorPalettes: {
      control: 'object',
      description: 'Array de paletas de cores personalizadas',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
