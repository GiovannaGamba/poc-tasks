import api from './axios';
import { formularioCreateSchema, formularioItemSchema } from './schemas';

export interface FormularioItem {
  id: string | number;
  titulo: string;
  versao: string;
  submissões: number;
  status: 'ativo' | 'rascunho' | 'arquivado';
  criadoPor: string;
}

export type CreateFormularioData = Omit<FormularioItem, 'id'>;

export const getFormulariosItems = () => api.get<FormularioItem[]>('/formularios');
export const createFormularioItem = async (data: CreateFormularioData) => {
  const valid = formularioCreateSchema.parse(data);
  const created = await api.post<FormularioItem>('/formularios', valid);
  return formularioItemSchema.parse(created);
};
export const deleteFormularioItem = (id: string | number) => api.delete<void>(`/formularios/${id}`);


