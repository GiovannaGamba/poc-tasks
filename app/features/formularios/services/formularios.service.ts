import { api } from '../../../shared/services/client';
import type { FormularioItem, CreateFormularioData } from '../types/formularios.types';

const resource = '/formularios';

export const getFormulariosItems = (): Promise<FormularioItem[]> => 
  api.get<FormularioItem[]>(resource);

export const createFormularioItem = (data: CreateFormularioData): Promise<FormularioItem> => 
  api.post<FormularioItem>(resource, data);

export const deleteFormularioItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);
