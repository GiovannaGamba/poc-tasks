import { z } from 'zod';

export const inicioItemSchema = z.object({
  id: z.union([z.string(), z.number()]),
  nome: z.string(),
  status: z.enum(['ativo', 'inativo', 'pendente']),
  owner: z.string(),
  categoria: z.string(),
  criadoEm: z.string(),
});
export const inicioListSchema = z.array(inicioItemSchema);
export const inicioCreateSchema = inicioItemSchema.pick({ nome: true, status: true, owner: true, categoria: true });

export const workflowItemSchema = z.object({
  id: z.union([z.string(), z.number()]),
  etapa: z.string(),
  responsavel: z.string(),
  itens: z.number(),
  prioridade: z.enum(['baixa', 'média', 'alta', 'urgente']),
  status: z.enum(['pendente', 'em_andamento', 'concluído', 'bloqueado']),
  deadline: z.string(),
});
export const workflowListSchema = z.array(workflowItemSchema);
export const workflowCreateSchema = workflowItemSchema.pick({ etapa: true, responsavel: true, itens: true, prioridade: true, status: true, deadline: true });

export const formularioItemSchema = z.object({
  id: z.union([z.string(), z.number()]),
  titulo: z.string(),
  versao: z.string(),
  submissões: z.number(),
  status: z.enum(['ativo', 'rascunho', 'arquivado']),
  criadoPor: z.string(),
});
export const formularioListSchema = z.array(formularioItemSchema);
export const formularioCreateSchema = formularioItemSchema.pick({ titulo: true, versao: true, submissões: true, status: true, criadoPor: true });


