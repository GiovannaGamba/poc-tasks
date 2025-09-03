export interface WorkflowItem {
  id: number;
  etapa: string;
  responsavel: string;
  itens: number;
  prioridade: 'baixa' | 'média' | 'alta' | 'urgente';
  status: 'pendente' | 'em_andamento' | 'concluído' | 'bloqueado';
  deadline: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface CreateWorkflowData {
  etapa: string;
  responsavel: string;
  itens: number;
  prioridade: 'baixa' | 'média' | 'alta' | 'urgente';
  status: 'pendente' | 'em_andamento' | 'concluído' | 'bloqueado';
  deadline: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simular banco de dados
let mockWorkflowData: WorkflowItem[] = [
  {
    id: 101,
    etapa: 'Triagem de Requisições',
    responsavel: 'João Silva',
    itens: 34,
    prioridade: 'alta',
    status: 'em_andamento',
    deadline: '2024-02-15',
    criadoEm: '2024-01-15T10:00:00Z',
    atualizadoEm: '2024-01-20T14:30:00Z',
  },
  {
    id: 102,
    etapa: 'Validação Técnica',
    responsavel: 'Maria Santos',
    itens: 21,
    prioridade: 'média',
    status: 'pendente',
    deadline: '2024-02-20',
    criadoEm: '2024-01-16T09:00:00Z',
    atualizadoEm: '2024-01-16T09:00:00Z',
  },
  {
    id: 103,
    etapa: 'Desenvolvimento',
    responsavel: 'Pedro Costa',
    itens: 15,
    prioridade: 'urgente',
    status: 'em_andamento',
    deadline: '2024-02-10',
    criadoEm: '2024-01-17T11:00:00Z',
    atualizadoEm: '2024-01-18T16:00:00Z',
  },
  {
    id: 104,
    etapa: 'Testes',
    responsavel: 'Ana Oliveira',
    itens: 28,
    prioridade: 'média',
    status: 'bloqueado',
    deadline: '2024-02-25',
    criadoEm: '2024-01-10T08:00:00Z',
    atualizadoEm: '2024-01-12T12:00:00Z',
  },
  {
    id: 105,
    etapa: 'Deploy',
    responsavel: 'Carlos Lima',
    itens: 8,
    prioridade: 'alta',
    status: 'concluído',
    deadline: '2024-01-30',
    criadoEm: '2024-01-08T14:00:00Z',
    atualizadoEm: '2024-01-30T10:00:00Z',
  },
];

export async function getWorkflowItems(): Promise<WorkflowItem[]> {
  await delay(1000);
  return [...mockWorkflowData];
}

export async function createWorkflowItem(data: CreateWorkflowData): Promise<WorkflowItem> {
  await delay(1000);
  const newItem: WorkflowItem = {
    id: Date.now(),
    ...data,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
  mockWorkflowData.push(newItem);
  return newItem;
}

export async function deleteWorkflowItem(id: number): Promise<void> {
  await delay(1000);
  const index = mockWorkflowData.findIndex(item => item.id === id);
  if (index === -1) throw new Error('Workflow não encontrado');
  mockWorkflowData.splice(index, 1);
}
