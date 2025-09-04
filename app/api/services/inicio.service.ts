import { api } from '../client';
import type { InicioItem, CreateInicioData } from '../../types';

const resource = '/inicio';

export const getInicioItems = (): Promise<InicioItem[]> => 
  api.get<InicioItem[]>(resource);

export const createInicioItem = (data: CreateInicioData): Promise<InicioItem> => 
  api.post<InicioItem>(resource, data);

export const updateInicioItem = (id: string | number, data: Partial<CreateInicioData>): Promise<InicioItem> => 
  api.put<InicioItem>(`${resource}/${id}`, data);

export const deleteInicioItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);

export const getInicioItem = (id: string | number): Promise<InicioItem> => 
  api.get<InicioItem>(`${resource}/${id}`);
