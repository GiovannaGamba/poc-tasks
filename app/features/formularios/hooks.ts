import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFormulariosItems, createFormularioItem, deleteFormularioItem } from './services/formularios.service';

export function useFormulariosItems() {
  return useQuery({
    queryKey: ['formularios'],
    queryFn: getFormulariosItems,
  });
}

export function useCreateFormularioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createFormularioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formularios'] });
    },
  });
}

export function useDeleteFormularioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteFormularioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formularios'] });
    },
  });
}
