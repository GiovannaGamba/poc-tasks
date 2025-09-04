import { get, post, del } from './http';

export type FormularioItem = {
  id: string;
  nome: string;
  versao: string;
};

export type CreateFormularioData = Omit<FormularioItem, 'id'>;

const resource = '/formularios';

export const getFormulariosItems = () => get<FormularioItem[]>(resource);
export const createFormularioItem = (data: CreateFormularioData) => post<FormularioItem>(resource, data);
export const deleteFormularioItem = (id: string | number) => del<void>(`${resource}/${id}`);
