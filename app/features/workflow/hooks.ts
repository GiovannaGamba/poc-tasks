import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWorkflowItems, createWorkflowItem, deleteWorkflowItem } from './services/workflow.service';

export function useWorkflowItems() {
  return useQuery({
    queryKey: ['workflow'],
    queryFn: getWorkflowItems,
  });
}

export function useCreateWorkflowItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createWorkflowItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workflow'] });
    },
  });
}

export function useDeleteWorkflowItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteWorkflowItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workflow'] });
    },
  });
}
