import { DashboardLayout } from '../design-system/templates/dashboard-layout'
import { StatusTag } from '../design-system/components/status-tag'
import { useParams } from '@tanstack/react-router'
import { useTaskQuery } from '../services/tasks'

export default function TaskDetail() {
  const { id } = useParams({ from: '/tasks/$id' })
  const { data: task, isLoading } = useTaskQuery(id)

  return (
    <DashboardLayout title="Detalhes da tarefa">
      {isLoading ? (
        <p className="text-sm text-gray-600 dark:text-neutral-300">Carregando…</p>
      ) : !task ? (
        <p className="text-sm text-gray-600 dark:text-neutral-300">Tarefa não encontrada.</p>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <div className="mt-2">
              <StatusTag status={task.status === 'completed' ? 'success' : 'warning'}>
                {task.status === 'completed' ? 'Concluída' : 'Pendente'}
              </StatusTag>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-neutral-300">Responsável</h3>
            <p className="mt-1 text-sm">{task.assignee}</p>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}


