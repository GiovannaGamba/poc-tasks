import { get, post, del } from './http';

export type InicioItem = {
  id: string;
  titulo: string;
  status: 'ativo' | 'inativo' | 'pendente';
};

export type CreateInicioData = Omit<InicioItem, 'id'>;

const resource = '/inicio';

export const getInicioItems = () => get<InicioItem[]>(resource);
export const createInicioItem = (data: CreateInicioData) => post<InicioItem>(resource, data);
export const deleteInicioItem = (id: string | number) => del<void>(`${resource}/${id}`);
