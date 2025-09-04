import { api } from '../client';
import type { WorkflowItem, CreateWorkflowData } from '../../types';

const resource = '/workflow';

export const getWorkflowItems = (): Promise<WorkflowItem[]> => 
  api.get<WorkflowItem[]>(resource);

export const createWorkflowItem = (data: CreateWorkflowData): Promise<WorkflowItem> => 
  api.post<WorkflowItem>(resource, data);

export const updateWorkflowItem = (id: string | number, data: Partial<CreateWorkflowData>): Promise<WorkflowItem> => 
  api.put<WorkflowItem>(`${resource}/${id}`, data);

export const deleteWorkflowItem = (id: string | number): Promise<void> => 
  api.delete<void>(`${resource}/${id}`);

export const getWorkflowItem = (id: string | number): Promise<WorkflowItem> => 
  api.get<WorkflowItem>(`${resource}/${id}`);
