import { api } from '../../../shared/services/client';
import type { InicioItem, CreateInicioData } from '../types/inicio.types';

const resource = '/inicio';

export const getInicioItems = (): Promise<InicioItem[]> => 
  api.get<InicioItem[]>(resource);

export const createInicioItem = (data: CreateInicioData): Promise<InicioItem> => 
  api.post<InicioItem>(resource, data);

export const deleteInicioItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);
