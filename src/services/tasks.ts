import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Task, TaskFormValues } from '../types/task'

let TASKS_DB: Task[] = [
  { id: '1', title: 'Criar layout', assignee: 'Maria', status: 'pending' },
  { id: '2', title: 'Revisar PR', assignee: 'João', status: 'completed' },
]

function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}

export async function getTasks(): Promise<Task[]> {
  await sleep(250)
  return [...TASKS_DB]
}

export async function getTaskById(id: string): Promise<Task | undefined> {
  await sleep(200)
  return TASKS_DB.find(t => t.id === id)
}

export async function addTask(input: TaskFormValues): Promise<Task> {
  await sleep(300)
  const newTask: Task = { id: String(Date.now()), ...input }
  TASKS_DB = [newTask, ...TASKS_DB]
  return newTask
}

// Query Keys
export const tasksKeys = {
  all: ['tasks'] as const,
  byId: (id: string) => [...tasksKeys.all, id] as const,
}

// Hooks
export function useTasksQuery() {
  return useQuery({ queryKey: tasksKeys.all, queryFn: getTasks })
}

export function useTaskQuery(id: string) {
  return useQuery({ queryKey: tasksKeys.byId(id), queryFn: () => getTaskById(id) })
}

export function useAddTaskMutation() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: addTask,
    onSuccess: async (created) => {
      await qc.invalidateQueries({ queryKey: tasksKeys.all })
      qc.setQueryData(tasksKeys.byId(created.id), created)
    },
  })
}


