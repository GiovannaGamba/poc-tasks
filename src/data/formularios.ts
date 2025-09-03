export interface FormularioItem {
  id: number;
  titulo: string;
  versao: string;
  submissões: number;
  status: 'ativo' | 'rascunho' | 'arquivado';
  criadoPor: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface CreateFormularioData {
  titulo: string;
  versao: string;
  submissões: number;
  status: 'ativo' | 'rascunho' | 'arquivado';
  criadoPor: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simular banco de dados
let mockFormulariosData: FormularioItem[] = [
  {
    id: 201,
    titulo: 'Formulário de Contato',
    versao: '1.0.0',
    submissões: 156,
    status: 'ativo',
    criadoPor: 'Ana Silva',
    criadoEm: '2024-01-10T08:00:00Z',
    atualizadoEm: '2024-01-20T14:30:00Z',
  },
  {
    id: 202,
    titulo: 'Avaliação de Produto',
    versao: '2.1.0',
    submissões: 89,
    status: 'ativo',
    criadoPor: 'Carlos Santos',
    criadoEm: '2024-01-12T10:00:00Z',
    atualizadoEm: '2024-01-18T16:00:00Z',
  },
  {
    id: 203,
    titulo: 'Cadastro de Usuário',
    versao: '1.5.2',
    submissões: 234,
    status: 'ativo',
    criadoPor: 'Maria Costa',
    criadoEm: '2024-01-08T09:00:00Z',
    atualizadoEm: '2024-01-15T11:00:00Z',
  },
  {
    id: 204,
    titulo: 'Feedback de Serviço',
    versao: '1.0.0',
    submissões: 67,
    status: 'rascunho',
    criadoPor: 'João Lima',
    criadoEm: '2024-01-20T14:00:00Z',
    atualizadoEm: '2024-01-20T14:00:00Z',
  },
  {
    id: 205,
    titulo: 'Pesquisa de Satisfação',
    versao: '3.0.0',
    submissões: 445,
    status: 'ativo',
    criadoPor: 'Pedro Oliveira',
    criadoEm: '2024-01-05T07:00:00Z',
    atualizadoEm: '2024-01-22T10:00:00Z',
  },
];

export async function getFormulariosItems(): Promise<FormularioItem[]> {
  await delay(1000);
  return [...mockFormulariosData];
}

export async function createFormularioItem(data: CreateFormularioData): Promise<FormularioItem> {
  await delay(1000);
  const newItem: FormularioItem = {
    id: Date.now(),
    ...data,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
  mockFormulariosData.push(newItem);
  return newItem;
}

export async function deleteFormularioItem(id: number): Promise<void> {
  await delay(1000);
  const index = mockFormulariosData.findIndex(item => item.id === id);
  if (index === -1) throw new Error('Formulário não encontrado');
  mockFormulariosData.splice(index, 1);
}
