export type WorkflowItem = {
  id: string;
  etapa: string;
  responsavel: string;
  itens: number;
  prioridade: 'baixa' | 'média' | 'alta' | 'urgente';
  status: 'pendente' | 'em_andamento' | 'concluído' | 'bloqueado';
  deadline: string;
};

export type CreateWorkflowData = Omit<WorkflowItem, 'id'>;
