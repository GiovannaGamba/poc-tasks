import { get, post, del } from './http';
import type { FormularioItem, CreateFormularioData } from '../../types';

const resource = '/formularios';

export const getFormulariosItems = () => get<FormularioItem[]>(resource);
export const createFormularioItem = (data: CreateFormularioData) => post<FormularioItem>(resource, data);
export const deleteFormularioItem = (id: string | number) => del<void>(`${resource}/${id}`);
