import { AuthenticatedTemplate } from "../templates/AuthenticatedTemplate/AuthenticatedTemplate";
import { Typography } from "../components/Typography/Typhography";
import { Table, CreateModal } from "../components";
import React, { useState } from "react";
import { 
  useInicioItems, 
  useCreateInicioItem, 
  useDeleteInicioItem,
  useWorkflowItems,
  useCreateWorkflowItem,
  useDeleteWorkflowItem,
  useFormulariosItems,
  useCreateFormularioItem,
  useDeleteFormularioItem,
  type CreateInicioData,
  type CreateWorkflowData,
  type CreateFormularioData,
} from "../features";

type DomainConfig = {
  data: any[] | undefined;
  isLoading: boolean;
  columns: Array<{ header: string; accessor: string }>;
  createFields?: Array<{ name: string; label: string; type: 'text' | 'number' | 'select'; options?: string[]; required?: boolean }>;
  onCreate?: () => void;
  onDelete?: (id: string | number) => void;
  createButtonText?: string;
  title?: string;
  onSubmit?: (data: any) => void;
  showCreateButton?: boolean;
  emptyMessage?: string;
};

export function Authenticated() {
  const [activeDomain, setActiveDomain] = useState<string>('inicio');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Hooks do domínio Início
  const { data: inicioData, isLoading: inicioLoading } = useInicioItems();
  const createInicio = useCreateInicioItem();
  const deleteInicio = useDeleteInicioItem();

  // Hooks do domínio Workflow
  const { data: workflowData, isLoading: workflowLoading } = useWorkflowItems();
  const createWorkflow = useCreateWorkflowItem();
  const deleteWorkflow = useDeleteWorkflowItem();

  // Hooks do domínio Formulários
  const { data: formulariosData, isLoading: formulariosLoading } = useFormulariosItems();
  const createFormulario = useCreateFormularioItem();
  const deleteFormulario = useDeleteFormularioItem();

  // Configuração dinâmica baseada no domínio ativo
  const getDomainConfig = (): DomainConfig | null => {
    switch (activeDomain) {
      case 'inicio':
        return {
          data: inicioData,
          isLoading: inicioLoading,
          columns: [
            { header: 'ID', accessor: 'id' },
            { header: 'Nome', accessor: 'nome' },
            { header: 'Status', accessor: 'status' },
            { header: 'Owner', accessor: 'owner' },
            { header: 'Categoria', accessor: 'categoria' },
            { header: 'Criado em', accessor: 'criadoEm' },
          ],
          createFields: [
            { name: 'nome', label: 'Nome', type: 'text', required: true },
            { name: 'status', label: 'Status', type: 'select', options: ['ativo', 'inativo', 'pendente'], required: true },
            { name: 'owner', label: 'Owner', type: 'text', required: true },
            { name: 'categoria', label: 'Categoria', type: 'text', required: true },
          ],
          onCreate: () => setShowCreateModal(true),
          onDelete: (id: string | number) => {
            if (window.confirm('Tem certeza que deseja deletar este item?')) {
              deleteInicio.mutate(Number(id));
            }
          },
          createButtonText: 'criar',
          title: 'Criar Item de Início',
          onSubmit: (data: CreateInicioData) => {
            createInicio.mutate(data);
            setShowCreateModal(false);
          },
          showCreateButton: true,
        };

      case 'workflow':
        return {
          data: workflowData,
          isLoading: workflowLoading,
          columns: [
            { header: 'ID', accessor: 'id' },
            { header: 'Etapa', accessor: 'etapa' },
            { header: 'Responsável', accessor: 'responsavel' },
            { header: 'Itens', accessor: 'itens' },
            { header: 'Prioridade', accessor: 'prioridade' },
            { header: 'Status', accessor: 'status' },
            { header: 'Deadline', accessor: 'deadline' },
          ],
          createFields: [
            { name: 'etapa', label: 'Etapa', type: 'text', required: true },
            { name: 'responsavel', label: 'Responsável', type: 'text', required: true },
            { name: 'itens', label: 'Quantidade de Itens', type: 'number', required: true },
            { name: 'prioridade', label: 'Prioridade', type: 'select', options: ['baixa', 'média', 'alta', 'urgente'], required: true },
            { name: 'status', label: 'Status', type: 'select', options: ['pendente', 'em_andamento', 'concluído', 'bloqueado'], required: true },
            { name: 'deadline', label: 'Deadline', type: 'text', required: true },
          ],
          onCreate: () => setShowCreateModal(true),
          onDelete: (id: string | number) => {
            if (window.confirm('Tem certeza que deseja deletar este item?')) {
              deleteWorkflow.mutate(Number(id));
            }
          },
          createButtonText: 'Adicionar Workflow',
          title: 'Criar Workflow',
          onSubmit: (data: CreateWorkflowData) => {
            createWorkflow.mutate(data);
            setShowCreateModal(false);
          },
          showCreateButton: true,
        };

      case 'formularios':
        return {
          data: formulariosData,
          isLoading: formulariosLoading,
          columns: [
            { header: 'ID', accessor: 'id' },
            { header: 'Título', accessor: 'titulo' },
            { header: 'Versão', accessor: 'versao' },
            { header: 'Submissões', accessor: 'submissões' },
            { header: 'Status', accessor: 'status' },
            { header: 'Criado por', accessor: 'criadoPor' },
          ],
          createFields: [
            { name: 'titulo', label: 'Título', type: 'text', required: true },
            { name: 'versao', label: 'Versão', type: 'text', required: true },
            { name: 'submissões', label: 'Número de Submissões', type: 'number', required: true },
            { name: 'status', label: 'Status', type: 'select', options: ['ativo', 'rascunho', 'arquivado'], required: true },
            { name: 'criadoPor', label: 'Criado por', type: 'text', required: true },
          ],
          onCreate: () => setShowCreateModal(true),
          onDelete: (id: string | number) => {
            if (window.confirm('Tem certeza que deseja deletar este item?')) {
              deleteFormulario.mutate(Number(id));
            }
          },
          createButtonText: 'Adicionar Formulário',
          title: 'Criar Formulário',
          onSubmit: (data: CreateFormularioData) => {
            createFormulario.mutate(data);
            setShowCreateModal(false);
          },
          showCreateButton: true,
        };

      case 'requisicoes':
        return {
          data: [],
          isLoading: false,
          columns: [],
          showCreateButton: false,
          emptyMessage: 'Funcionalidade de Requisições em breve...',
        };

      case 'modelos':
        return {
          data: [],
          isLoading: false,
          columns: [],
          showCreateButton: false,
          emptyMessage: 'Funcionalidade de Modelos em breve...',
        };

      case 'documentos':
        return {
          data: [],
          isLoading: false,
          columns: [],
          showCreateButton: false,
          emptyMessage: 'Funcionalidade de Documentos em breve...',
        };

      case 'contatos':
        return {
          data: [],
          isLoading: false,
          columns: [],
          showCreateButton: false,
          emptyMessage: 'Funcionalidade de Contatos em breve...',
        };

      default:
        return {
          data: [],
          isLoading: false,
          columns: [],
          showCreateButton: false,
          emptyMessage: 'Domínio não implementado ainda...',
        };
    }
  };

  const domainConfig = getDomainConfig();

  // Handler para mudança de domínio (será chamado pela sidebar)
  const handleDomainChange = (domain: string) => {
    setActiveDomain(domain);
  };

  return (
    <AuthenticatedTemplate onDomainChange={handleDomainChange}>
      <div className="max-w-7xl mx-auto">
        <Typography component="h2" variant="heading-2" className="mb-6 capitalize">
          {activeDomain}
        </Typography>
        
        {domainConfig && (
          <>
            <Table
              columns={domainConfig.columns as any}
              data={domainConfig.data || []}
              isLoading={domainConfig.isLoading}
              onCreate={domainConfig.showCreateButton ? domainConfig.onCreate : undefined}
              onDelete={domainConfig.showCreateButton ? domainConfig.onDelete : undefined}
              createButtonText={domainConfig.createButtonText}
              emptyMessage={domainConfig.emptyMessage}
            />

            {domainConfig.showCreateButton && (
              <CreateModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSubmit={domainConfig.onSubmit!}
                title={domainConfig.title!}
                fields={domainConfig.createFields!}
                isLoading={createInicio.isPending || createWorkflow.isPending || createFormulario.isPending}
              />
            )}
          </>
        )}
      </div>
    </AuthenticatedTemplate>
  );
}

export default Authenticated;


