import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getInicioItems, createInicioItem, deleteInicioItem } from '../../api/services/inicio.service';
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
  });
}

export function useCreateInicioItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateInicioData) => createInicioItem(data),
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: inicioKeys.all() });
      const previous = queryClient.getQueryData<InicioItem[]>(inicioKeys.all());
      const temp: InicioItem = { id: `temp-${Date.now()}`, ...newItem } as unknown as InicioItem;
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) => [...old, temp]);
      return { previous, tempId: temp.id };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(inicioKeys.all(), ctx.previous);
    },
    onSuccess: (created, _vars, ctx) => {
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) =>
        old.map((item) => (item.id === ctx?.tempId ? created : item))
      );
    },
    onSettled: () => {
      // opcional: garantir consistência com servidor
      // queryClient.invalidateQueries({ queryKey: inicioKeys.root });
    },
  });
}

export function useDeleteInicioItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | number) => deleteInicioItem(String(id)),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: inicioKeys.all() });
      const previous = queryClient.getQueryData<InicioItem[]>(inicioKeys.all());
      queryClient.setQueryData<InicioItem[]>(inicioKeys.all(), (old = []) => old.filter((i) => i.id !== String(id)));
      return { previous };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(inicioKeys.all(), ctx.previous);
    },
    onSettled: () => {
      // opcional
      // queryClient.invalidateQueries({ queryKey: inicioKeys.root });
    },
  });
}
