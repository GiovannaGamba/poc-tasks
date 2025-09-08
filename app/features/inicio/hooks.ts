import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getInicioItems, createInicioItem, deleteInicioItem } from './services/inicio.service';

export function useInicioItems() {
  return useQuery({
    queryKey: ['inicio'],
    queryFn: getInicioItems,
  });
}

export function useCreateInicioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createInicioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inicio'] });
    },
  });
}

export function useDeleteInicioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteInicioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inicio'] });
    },
  });
}
