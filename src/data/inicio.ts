export interface InicioItem {
  id: number;
  nome: string;
  status: 'ativo' | 'inativo' | 'pendente';
  owner: string;
  categoria: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface CreateInicioData {
  nome: string;
  status: 'ativo' | 'inativo' | 'pendente';
  owner: string;
  categoria: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let mockInicioData: InicioItem[] = [
  {
    id: 1,
    nome: 'Boas-vindas ao Sistema',
    status: 'ativo',
    owner: 'Equipe A',
    categoria: 'Sistema',
    criadoEm: '2024-01-15T10:00:00Z',
    atualizadoEm: '2024-01-20T14:30:00Z',
  },
  {
    id: 2,
    nome: 'KPIs do Dia',
    status: 'ativo',
    owner: 'Equipe B',
    categoria: 'Métricas',
    criadoEm: '2024-01-16T09:00:00Z',
    atualizadoEm: '2024-01-16T09:00:00Z',
  },
  {
    id: 3,
    nome: 'Notificações',
    status: 'pendente',
    owner: 'Equipe C',
    categoria: 'Comunicação',
    criadoEm: '2024-01-17T11:00:00Z',
    atualizadoEm: '2024-01-18T16:00:00Z',
  },
  {
    id: 4,
    nome: 'Relatórios Semanais',
    status: 'inativo',
    owner: 'Equipe D',
    categoria: 'Relatórios',
    criadoEm: '2024-01-10T08:00:00Z',
    atualizadoEm: '2024-01-12T12:00:00Z',
  },
];

export async function getInicioItems(): Promise<InicioItem[]> {
  await delay(1000);
  return [...mockInicioData];
}

export async function createInicioItem(data: CreateInicioData): Promise<InicioItem> {
  await delay(1000);
  const newItem: InicioItem = {
    id: Date.now(),
    ...data,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
  mockInicioData.push(newItem);
  return newItem;
}

export async function deleteInicioItem(id: number): Promise<void> {
  await delay(1000);
  const index = mockInicioData.findIndex(item => item.id === id);
  if (index === -1) throw new Error('Item não encontrado');
  mockInicioData.splice(index, 1);
}
