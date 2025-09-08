import api from './axios';
import { workflowCreateSchema, workflowItemSchema } from './schemas';

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
export const createWorkflowItem = async (data: CreateWorkflowData) => {
  const valid = workflowCreateSchema.parse(data);
  const created = await api.post<WorkflowItem>('/workflow', valid);
  return workflowItemSchema.parse(created);
};
export const deleteWorkflowItem = (id: string | number) => api.delete<void>(`/workflow/${id}`);


