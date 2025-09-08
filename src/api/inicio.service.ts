import api from './axios';
import { inicioCreateSchema, inicioItemSchema } from './schemas';

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
export const createInicioItem = async (data: CreateInicioData) => {
  const valid = inicioCreateSchema.parse(data);
  const created = await api.post<InicioItem>('/inicio', valid);
  return inicioItemSchema.parse(created);
};
export const deleteInicioItem = (id: string | number) => api.delete<void>(`/inicio/${id}`);


