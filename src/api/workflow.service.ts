import api from './axios';

export interface WorkflowItem {
  id: string | number;
  etapa: string;
  responsavel: string;
  itens: number;
  prioridade: 'baixa' | 'média' | 'alta' | 'urgente';
  status: 'pendente' | 'em_andamento' | 'concluído' | 'bloqueado';
  deadline: string;
}

export type CreateWorkflowData = Omit<WorkflowItem, 'id'>;

export const getWorkflowItems = () => api.get<WorkflowItem[]>('/workflow');
export const createWorkflowItem = (data: CreateWorkflowData) => api.post<WorkflowItem>('/workflow', data);
export const deleteWorkflowItem = (id: string | number) => api.delete<void>(`/workflow/${id}`);


