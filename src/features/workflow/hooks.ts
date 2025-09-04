import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWorkflowItems, createWorkflowItem, deleteWorkflowItem, type WorkflowItem, type CreateWorkflowData } from '../../services/workflow.service';

export const workflowKeys = {
  root: ['workflow'] as const,
  all: () => [...workflowKeys.root, 'items'] as const,
  item: (id: string | number) => [...workflowKeys.root, 'item', id] as const,
};

export function useWorkflowItems() {
  return useQuery({
    queryKey: workflowKeys.all(),
    queryFn: getWorkflowItems,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

export function useCreateWorkflowItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateWorkflowData) => createWorkflowItem(data),
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: workflowKeys.all() });
      const previous = queryClient.getQueryData<WorkflowItem[]>(workflowKeys.all());
      const temp: WorkflowItem = { id: `temp-${Date.now()}`, ...newItem } as unknown as WorkflowItem;
      queryClient.setQueryData<WorkflowItem[]>(workflowKeys.all(), (old = []) => [...old, temp]);
      return { previous, tempId: temp.id };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(workflowKeys.all(), ctx.previous);
    },
    onSuccess: (created, _vars, ctx) => {
      queryClient.setQueryData<WorkflowItem[]>(workflowKeys.all(), (old = []) =>
        old.map((item) => (item.id === ctx?.tempId ? created : item))
      );
    },
    onSettled: () => {
      // opcional
      // queryClient.invalidateQueries({ queryKey: workflowKeys.root });
    },
  });
}

export function useDeleteWorkflowItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | number) => deleteWorkflowItem(String(id)),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: workflowKeys.all() });
      const previous = queryClient.getQueryData<WorkflowItem[]>(workflowKeys.all());
      queryClient.setQueryData<WorkflowItem[]>(workflowKeys.all(), (old = []) => old.filter((i) => i.id !== String(id)));
      return { previous };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(workflowKeys.all(), ctx.previous);
    },
    onSettled: () => {
      // opcional
      // queryClient.invalidateQueries({ queryKey: workflowKeys.root });
    },
  });
}
