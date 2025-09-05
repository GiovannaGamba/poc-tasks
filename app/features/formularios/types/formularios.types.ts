export type FormularioItem = {
  id: string;
  titulo: string;
  versao: string;
  submissões: number;
  status: 'ativo' | 'rascunho' | 'arquivado';
  criadoPor: string;
};

export type CreateFormularioData = Omit<FormularioItem, 'id'>;
