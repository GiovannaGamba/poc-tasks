import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getInicioItems, createInicioItem, deleteInicioItem } from './inicio.service';
import { getWorkflowItems, createWorkflowItem, deleteWorkflowItem } from './workflow.service';
import { getFormulariosItems, createFormularioItem, deleteFormularioItem } from './formularios.service';

// inicio
export function useInicioItems() {
  return useQuery({ queryKey: ['inicio'], queryFn: getInicioItems });
}
export function useCreateInicioItem() {
  const qc = useQueryClient();
  return useMutation({ 
    mutationFn: createInicioItem, 
    onSuccess: () => qc.invalidateQueries({ queryKey: ['inicio'] }) 
  });
}
export function useDeleteInicioItem() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: deleteInicioItem, onSuccess: () => qc.invalidateQueries({ queryKey: ['inicio'] }) });
}

// workflow
export function useWorkflowItems() {
  return useQuery({ queryKey: ['workflow'], queryFn: getWorkflowItems });
}
export function useCreateWorkflowItem() {
  const qc = useQueryClient();
  return useMutation({ 
    mutationFn: createWorkflowItem, 
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workflow'] }) 
  });
}
export function useDeleteWorkflowItem() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: deleteWorkflowItem, onSuccess: () => qc.invalidateQueries({ queryKey: ['workflow'] }) });
}

// formularios
export function useFormulariosItems() {
  return useQuery({ queryKey: ['formularios'], queryFn: getFormulariosItems });
}
export function useCreateFormularioItem() {
  const qc = useQueryClient();
  return useMutation({ 
    mutationFn: createFormularioItem, 
    onSuccess: () => qc.invalidateQueries({ queryKey: ['formularios'] }) 
  });
}
export function useDeleteFormularioItem() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: deleteFormularioItem, onSuccess: () => qc.invalidateQueries({ queryKey: ['formularios'] }) });
}


