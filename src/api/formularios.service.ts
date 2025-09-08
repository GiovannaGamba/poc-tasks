import api from './axios';

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
export const createFormularioItem = (data: CreateFormularioData) => api.post<FormularioItem>('/formularios', data);
export const deleteFormularioItem = (id: string | number) => api.delete<void>(`/formularios/${id}`);


