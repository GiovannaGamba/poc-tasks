import { StatusTag } from '../components/status-tag'
import type { TaskRowProps } from '../../types/task'

export function TaskRow({ row, onClick, className }: TaskRowProps) {
  const task = row.original

  return (
    <tr
      data-task-id={task.id}
      className={[
        'cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800',
        className,
      ].filter(Boolean).join(' ')}
      onClick={() => onClick?.(task)}
    >
      <td className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-neutral-100">
        {task.title}
      </td>
      <td className="px-4 py-2 text-sm">
        <StatusTag status={task.status === 'completed' ? 'success' : 'warning'}>
          {task.status === 'completed' ? 'Concluída' : 'Pendente'}
        </StatusTag>
      </td>
      <td className="px-4 py-2 text-sm text-gray-700 dark:text-neutral-200">
        {task.assignee}
      </td>
    </tr>
  )
}

export default TaskRow


