import * as React from 'react'
import { DashboardLayout } from '../design-system/templates/dashboard-layout'
import { TaskTable } from '../design-system/containers/task-table'
import { TaskForm } from '../design-system/containers/task-form'
import type { TaskFormValues } from '../types/task'
import { useNavigate } from '@tanstack/react-router'
import { useTasksQuery, useAddTaskMutation } from '../services/tasks'

export default function Dashboard() {
  const navigate = useNavigate()
  const { data: tasks = [], isLoading } = useTasksQuery()
  const addTask = useAddTaskMutation()

  const handleAdd = React.useCallback((values: TaskFormValues) => {
    addTask.mutate(values)
  }, [addTask])

  return (
    <DashboardLayout title="Tasks" headerRight={null}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 p-4 dark:border-neutral-800">
            <h2 className="mb-3 text-base font-semibold">Adicionar tarefa</h2>
            <TaskForm onSubmit={handleAdd} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 p-2 dark:border-neutral-800">
            {isLoading ? (
              <div className="p-4 text-sm text-gray-600 dark:text-neutral-300">Carregando…</div>
            ) : (
              <TaskTable
                data={tasks}
                onRowClick={(task) => navigate({ to: '/tasks/$id', params: { id: task.id } })}
              />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}


