export type InicioItem = {
  id: string;
  nome: string;
  status: 'ativo' | 'inativo' | 'pendente';
  owner: string;
  categoria: string;
  criadoEm: string;
};

export type CreateInicioData = Omit<InicioItem, 'id' | 'criadoEm'>;