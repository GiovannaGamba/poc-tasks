import { api } from '../../../shared/services/client';
import type { WorkflowItem, CreateWorkflowData } from '../types/workflow.types';

const resource = '/workflow';

export const getWorkflowItems = (): Promise<WorkflowItem[]> => 
  api.get<WorkflowItem[]>(resource);

export const createWorkflowItem = (data: CreateWorkflowData): Promise<WorkflowItem> => 
  api.post<WorkflowItem>(resource, data);

export const deleteWorkflowItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);
