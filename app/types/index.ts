// Tipos para o domínio Início
export type InicioItem = {
  id: string;
  nome: string;
  status: 'ativo' | 'inativo' | 'pendente';
  owner: string;
  categoria: string;
  criadoEm: string;
};

export type CreateInicioData = Omit<InicioItem, 'id' | 'criadoEm'>;

// Tipos para o domínio Workflow
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

// Tipos para o domínio Formulários
export type FormularioItem = {
  id: string;
  titulo: string;
  versao: string;
  submissões: number;
  status: 'ativo' | 'rascunho' | 'arquivado';
  criadoPor: string;
};

export type CreateFormularioData = Omit<FormularioItem, 'id'>;

// Tipos gerais
export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export type DomainType = 'inicio' | 'workflow' | 'formularios' | 'requisicoes' | 'modelos' | 'documentos' | 'contatos';
