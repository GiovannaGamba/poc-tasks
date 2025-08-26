import type { Row } from "@tanstack/react-table"

export type TaskStatus = 'pending' | 'completed'

export type Task = {
    id: string
    title: string
    assignee: string
    status: TaskStatus
  }
  
  export type TaskRowProps = {
    row: Row<Task>
    onClick?: (task: Task) => void
    className?: string
  }

  export type TaskFormValues = {
    title: string
    assignee: string
    status: TaskStatus
  }
  
  export type TaskFormProps = {
    defaultValues?: Partial<TaskFormValues>
    onSubmit: (values: TaskFormValues) => void
    className?: string
  }