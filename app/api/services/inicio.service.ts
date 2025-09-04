import { get, post, del } from './http';
import type { InicioItem, CreateInicioData } from '../../types';

const resource = '/inicio';

export const getInicioItems = () => get<InicioItem[]>(resource);
export const createInicioItem = (data: CreateInicioData) => post<InicioItem>(resource, data);
export const deleteInicioItem = (id: string | number) => del<void>(`${resource}/${id}`);
