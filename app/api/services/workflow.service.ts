import { get, post, del } from './http';
import type { WorkflowItem, CreateWorkflowData } from '../../types';

const resource = '/workflow';

export const getWorkflowItems = () => get<WorkflowItem[]>(resource);
export const createWorkflowItem = (data: CreateWorkflowData) => post<WorkflowItem>(resource, data);
export const deleteWorkflowItem = (id: string | number) => del<void>(`${resource}/${id}`);
