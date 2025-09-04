import { api } from '../client';
import type { FormularioItem, CreateFormularioData } from '../../types';

const resource = '/formularios';

export const getFormulariosItems = (): Promise<FormularioItem[]> => 
  api.get<FormularioItem[]>(resource);

export const createFormularioItem = (data: CreateFormularioData): Promise<FormularioItem> => 
  api.post<FormularioItem>(resource, data);

export const updateFormularioItem = (id: string | number, data: Partial<CreateFormularioData>): Promise<FormularioItem> => 
  api.put<FormularioItem>(`${resource}/${id}`, data);

export const deleteFormularioItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);

export const getFormularioItem = (id: string | number): Promise<FormularioItem> => 
  api.get<FormularioItem>(`${resource}/${id}`);
