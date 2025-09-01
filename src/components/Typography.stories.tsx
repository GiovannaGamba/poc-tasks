import Typography from './Typhography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'body1', 'subtitle1'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Este é um texto de corpo padrão.',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Este é um subtítulo.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="h1">
        Heading 1 - Título Principal
      </Typography>
      <Typography variant="h2">
        Heading 2 - Subtítulo
      </Typography>
      <Typography variant="subtitle1">
        Subtitle1 - Texto de subtítulo
      </Typography>
      <Typography variant="body1">
        Body1 - Este é um parágrafo de texto normal.
      </Typography>
    </div>
  ),
};
