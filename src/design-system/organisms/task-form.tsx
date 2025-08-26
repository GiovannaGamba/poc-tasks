import * as React from 'react'
import { FormField } from '../molecules/form-field'
import { Button } from '../atoms/button'
import type { TaskStatus, TaskFormProps, TaskFormValues } from '../../types/task'

export function TaskForm({ defaultValues, onSubmit, className }: TaskFormProps) {
  const [values, setValues] = React.useState<TaskFormValues>({
    title: defaultValues?.title ?? '',
    assignee: defaultValues?.assignee ?? '',
    status: defaultValues?.status ?? 'pending',
  })

  function handleChange<K extends keyof TaskFormValues>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues(v => ({ ...v, [key]: e.target.value as TaskFormValues[K] }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit} className={["space-y-4", className].filter(Boolean).join(' ')}>
      <FormField
        name="title"
        label="Título"
        placeholder="Digite o título"
        required
        value={values.title}
        onChange={handleChange('title')}
      />

      <FormField
        name="assignee"
        label="Responsável"
        placeholder="Nome do responsável"
        required
        value={values.assignee}
        onChange={handleChange('assignee')}
      />

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-900 dark:text-neutral-100">Status</label>
        <select
          name="status"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          value={values.status}
          onChange={(e) => setValues(v => ({ ...v, status: e.target.value as TaskStatus }))}
        >
          <option value="pending">Pendente</option>
          <option value="completed">Concluída</option>
        </select>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="submit" variant="secondary">Salvar</Button>
      </div>
    </form>
  )
}

export default TaskForm
