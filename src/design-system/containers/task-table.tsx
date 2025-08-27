import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table'
import { TaskRow } from '../components/task-row'
import type { Task } from '../../types/task'

export type TaskTableProps = {
  data: Task[]
  columns?: ColumnDef<Task, any>[]
  onRowClick?: (task: Task) => void
  className?: string
}

export function TaskTable({ data, columns, onRowClick, className }: TaskTableProps) {
  const defaultColumns: ColumnDef<Task, any>[] = columns ?? [
    { header: 'Título', accessorKey: 'title' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Responsável', accessorKey: 'assignee' },
  ]

  const table = useReactTable({ data, columns: defaultColumns, getCoreRowModel: getCoreRowModel() })

  return (
    <table className={["w-full border-separate border-spacing-0", className].filter(Boolean).join(' ')}>
      <thead className="text-left text-sm text-gray-600 dark:text-neutral-300">
        {table.getHeaderGroups().map(hg => (
          <tr key={hg.id}>
            {hg.headers.map(h => (
              <th key={h.id} className="px-4 py-2 font-medium">
                {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <TaskRow key={row.id} row={row} onClick={onRowClick} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskTable
