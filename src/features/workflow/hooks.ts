import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWorkflowItems, createWorkflowItem, deleteWorkflowItem } from '../../data/workflow';

// Query keys organizadas
export const workflowKeys = {
  root: ['workflow'] as const,
  all: () => [...workflowKeys.root, 'items'] as const,
  item: (id: number) => [...workflowKeys.root, 'item', id] as const,
};

// Hook para buscar todos os workflows
export function useWorkflowItems() {
  return useQuery({
    queryKey: workflowKeys.all(),
    queryFn: getWorkflowItems,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  });
}

// Hook para criar novo workflow
export function useCreateWorkflowItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createWorkflowItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a workflow
      queryClient.invalidateQueries({ queryKey: workflowKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao criar workflow:', error);
    },
  });
}

// Hook para deletar workflow
export function useDeleteWorkflowItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteWorkflowItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a workflow
      queryClient.invalidateQueries({ queryKey: workflowKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao deletar workflow:', error);
    },
  });
}
