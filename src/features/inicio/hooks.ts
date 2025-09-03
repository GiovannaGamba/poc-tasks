import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getInicioItems, createInicioItem, deleteInicioItem } from '../../data/inicio';

// Query keys organizadas
export const inicioKeys = {
  root: ['inicio'] as const,
  all: () => [...inicioKeys.root, 'items'] as const,
  item: (id: number) => [...inicioKeys.root, 'item', id] as const,
};

// Hook para buscar todos os itens de início
export function useInicioItems() {
  return useQuery({
    queryKey: inicioKeys.all(),
    queryFn: getInicioItems,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  });
}

// Hook para criar novo item
export function useCreateInicioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createInicioItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a início
      queryClient.invalidateQueries({ queryKey: inicioKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao criar item de início:', error);
    },
  });
}

// Hook para deletar item
export function useDeleteInicioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteInicioItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a início
      queryClient.invalidateQueries({ queryKey: inicioKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao deletar item de início:', error);
    },
  });
}
