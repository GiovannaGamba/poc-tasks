import { get, post, del } from './http';

export type WorkflowItem = {
  id: string;
  nome: string;
  status: 'em_andamento' | 'concluido' | 'pendente';
};

export type CreateWorkflowData = Omit<WorkflowItem, 'id'>;

const resource = '/workflow';

export const getWorkflowItems = () => get<WorkflowItem[]>(resource);
export const createWorkflowItem = (data: CreateWorkflowData) => post<WorkflowItem>(resource, data);
export const deleteWorkflowItem = (id: string | number) => del<void>(`${resource}/${id}`);
