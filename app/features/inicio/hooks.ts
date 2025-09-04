import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getInicioItems, createInicioItem, deleteInicioItem, updateInicioItem, getInicioItem } from '../../api/services/inicio.service';
import { useApiError } from '../../hooks/useApiError';
import type { InicioItem, CreateInicioData } from '../../types';

export const inicioKeys = {
  root: ['inicio'] as const,
  all: () => [...inicioKeys.root, 'items'] as const,
  item: (id: string | number) => [...inicioKeys.root, 'item', id] as const,
};

export function useInicioItems() {
  return useQuery({
    queryKey: inicioKeys.all(),
    queryFn: getInicioItems,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: (failureCount, error) => { 
      if (error && typeof error === 'object' && 'status' in error) {
        const status = (error as any).status;
        if (status >= 400 && status < 500) {
          return false;
        }
      }
      return failureCount < 3;
    },
  });
}

export function useInicioItem(id: string | number) {
  return useQuery({
    queryKey: inicioKeys.item(id),
    queryFn: () => getInicioItem(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

export function useCreateInicioItem() {
  const queryClient = useQueryClient();
  const { getErrorMessage } = useApiError();
  
  return useMutation({
    mutationFn: (data: CreateInicioData) => createInicioItem(data),
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: inicioKeys.all() });
      const previous = queryClient.getQueryData<InicioItem[]>(inicioKeys.all());
      const temp: InicioItem = { 
        id: `temp-${Date.now()}`, 
        criadoEm: new Date().toISOString(),
        ...newItem 
      } as unknown as InicioItem;
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) => [...old, temp]);
      return { previous, tempId: temp.id };
    },
    onError: (error, _vars, ctx) => {
      console.error('Erro ao criar item:', getErrorMessage(error));
      if (ctx?.previous) queryClient.setQueryData(inicioKeys.all(), ctx.previous);
    },
    onSuccess: (created, _vars, ctx) => {
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) =>
        old.map((item) => (item.id === ctx?.tempId ? created : item))
      );
    },
    onSettled: () => {
      // Garantir consistência com servidor
      queryClient.invalidateQueries({ queryKey: inicioKeys.all() });
    },
  });
}

export function useUpdateInicioItem() {
  const queryClient = useQueryClient();
  const { getErrorMessage } = useApiError();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: Partial<CreateInicioData> }) => 
      updateInicioItem(id, data),
    onError: (error) => {
      console.error('Erro ao atualizar item:', getErrorMessage(error));
    },
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(inicioKeys.item(updatedItem.id), updatedItem);
      queryClient.invalidateQueries({ queryKey: inicioKeys.all() });
    },
  });
}

export function useDeleteInicioItem() {
  const queryClient = useQueryClient();
  const { getErrorMessage } = useApiError();
  
  return useMutation({
    mutationFn: (id: string | number) => deleteInicioItem(String(id)),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: inicioKeys.all() });
      const previous = queryClient.getQueryData<InicioItem[]>(inicioKeys.all());
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) => 
        old.filter((i) => i.id !== String(id))
      );
      return { previous };
    },
    onError: (error, _vars, ctx) => {
      console.error('Erro ao deletar item:', getErrorMessage(error));
      if (ctx?.previous) queryClient.setQueryData(inicioKeys.all(), ctx.previous);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: inicioKeys.all() });
    },
  });
}
