import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFormulariosItems, createFormularioItem, deleteFormularioItem } from '../../data/formularios';

// Query keys organizadas
export const formulariosKeys = {
  root: ['formularios'] as const,
  all: () => [...formulariosKeys.root, 'items'] as const,
  item: (id: number) => [...formulariosKeys.root, 'item', id] as const,
};

// Hook para buscar todos os formulários
export function useFormulariosItems() {
  return useQuery({
    queryKey: formulariosKeys.all(),
    queryFn: getFormulariosItems,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  });
}

// Hook para criar novo formulário
export function useCreateFormularioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createFormularioItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a formulários
      queryClient.invalidateQueries({ queryKey: formulariosKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao criar formulário:', error);
    },
  });
}

// Hook para deletar formulário
export function useDeleteFormularioItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteFormularioItem,
    onSuccess: () => {
      // Invalida todas as queries relacionadas a formulários
      queryClient.invalidateQueries({ queryKey: formulariosKeys.root });
    },
    onError: (error) => {
      console.error('Erro ao deletar formulário:', error);
    },
  });
}
