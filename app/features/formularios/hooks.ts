import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFormulariosItems, createFormularioItem, deleteFormularioItem } from './services/formularios.service';
import type { FormularioItem, CreateFormularioData } from './types/formularios.types';

export const formulariosKeys = {
  root: ['formularios'] as const,
  all: () => [...formulariosKeys.root, 'items'] as const,
  item: (id: string | number) => [...formulariosKeys.root, 'item', id] as const,
};

export function useFormulariosItems() {
  return useQuery({
    queryKey: formulariosKeys.all(),
    queryFn: getFormulariosItems,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

export function useCreateFormularioItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateFormularioData) => createFormularioItem(data),
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: formulariosKeys.all() });
      const previous = queryClient.getQueryData<FormularioItem[]>(formulariosKeys.all());
      const temp: FormularioItem = { id: `temp-${Date.now()}`, ...newItem } as unknown as FormularioItem;
      queryClient.setQueryData<FormularioItem[]>(formulariosKeys.all(), (old = []) => [...old, temp]);
      return { previous, tempId: temp.id };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(formulariosKeys.all(), ctx.previous);
    },
    onSuccess: (created, _vars, ctx) => {
      queryClient.setQueryData<FormularioItem[]>(formulariosKeys.all(), (old = []) =>
        old.map((item) => (item.id === ctx?.tempId ? created : item))
      );
    },
    onSettled: () => {
      // opcional
      // queryClient.invalidateQueries({ queryKey: formulariosKeys.root });
    },
  });
}

export function useDeleteFormularioItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | number) => deleteFormularioItem(String(id)),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: formulariosKeys.all() });
      const previous = queryClient.getQueryData<FormularioItem[]>(formulariosKeys.all());
      queryClient.setQueryData<FormularioItem[]>(formulariosKeys.all(), (old = []) => old.filter((i) => i.id !== String(id)));
      return { previous };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(formulariosKeys.all(), ctx.previous);
    },
    onSettled: () => {
      // opcional
      // queryClient.invalidateQueries({ queryKey: formulariosKeys.root });
    },
  });
}
