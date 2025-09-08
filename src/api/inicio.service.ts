import api from './axios';

export interface InicioItem {
  id: string | number;
  nome: string;
  status: 'ativo' | 'inativo' | 'pendente';
  owner: string;
  categoria: string;
  criadoEm: string;
}

export type CreateInicioData = Omit<InicioItem, 'id' | 'criadoEm'>;

export const getInicioItems = () => api.get<InicioItem[]>('/inicio');
export const createInicioItem = (data: CreateInicioData) => api.post<InicioItem>('/inicio', data);
export const deleteInicioItem = (id: string | number) => api.delete<void>(`/inicio/${id}`);


