import React from 'react';
import { Typography } from '../Typography/Typhography';
import { ButtonTeste } from '../ButtonTeste/ButtonTeste';

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, item: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  isLoading?: boolean;
  emptyMessage?: string;
  onCreate?: () => void;
  onDelete?: (id: string | number) => void;
  createButtonText?: string;
  showActions?: boolean;
}

export function Table<T extends { id: string | number }>({
  data,
  columns,
  isLoading = false,
  emptyMessage = 'Nenhum dado encontrado.',
  onCreate,
  onDelete,
  createButtonText = 'Adicionar',
  showActions = true,
}: TableProps<T>) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Typography variant="body-3" className="text-neutral-500">Carregando...</Typography>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <Typography variant="body-3" className="text-neutral-500 mb-4">{emptyMessage}</Typography>
        {onCreate && (
          <ButtonTeste
            type="primary"
            style="filled"
            state="enabled"
            onClick={onCreate}
          >
            {createButtonText}
          </ButtonTeste>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {onCreate && (
        <div className="flex justify-end">
          <ButtonTeste
            type="primary"
            style="filled"
            state="enabled"
            onClick={onCreate}
          >
            {createButtonText}
          </ButtonTeste>
        </div>
      )}
      
      <div className="overflow-auto rounded-lg border border-neutral-200 bg-white">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.accessor)}
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
              {showActions && onDelete && (
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Ações
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-neutral-50 transition-colors">
                {columns.map((column) => (
                  <td key={String(column.accessor)} className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {column.render 
                      ? column.render((row as any)[column.accessor], row)
                      : String((row as any)[column.accessor] ?? '')
                    }
                  </td>
                ))}
                {showActions && onDelete && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    <button
                      onClick={() => onDelete(row.id)}
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                      title="Deletar"
                    >
                      🗑️
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
