import React from 'react'

type Status = 'success' | 'warning' | 'error' | 'info' | 'neutral'
type Size = 'sm' | 'md'

export type StatusTagProps = {
  status?: Status
  size?: Size
  children?: React.ReactNode
  className?: string
  dot?: boolean
  icon?: React.ReactNode
} & React.HTMLAttributes<HTMLSpanElement>

function mergeClassNames(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}

const statusStyles: Record<Status, { container: string; dot: string }> = {
  success: {
    container: 'bg-green-50 text-green-800 ring-1 ring-inset ring-green-200 dark:bg-emerald-900/20 dark:text-emerald-200 dark:ring-emerald-900',
    dot: 'bg-green-600',
  },
  warning: {
    container: 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-200 dark:ring-yellow-900',
    dot: 'bg-yellow-500',
  },
  error: {
    container: 'bg-red-50 text-red-800 ring-1 ring-inset ring-red-200 dark:bg-red-900/20 dark:text-red-200 dark:ring-red-900',
    dot: 'bg-red-600',
  },
  info: {
    container: 'bg-blue-50 text-blue-800 ring-1 ring-inset ring-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:ring-blue-900',
    dot: 'bg-blue-600',
  },
  neutral: {
    container: 'bg-gray-100 text-gray-800 ring-1 ring-inset ring-gray-200 dark:bg-neutral-800/40 dark:text-neutral-200 dark:ring-neutral-800',
    dot: 'bg-gray-500',
  },
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
}

export function StatusTag({
  status = 'neutral',
  size = 'md',
  children,
  className,
  dot = true,
  icon,
  ...rest
}: StatusTagProps) {
  return (
    <span
      className={mergeClassNames(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        statusStyles[status].container,
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span className="-ml-0.5 inline-flex items-center">{icon}</span>
      ) : dot ? (
        <span
          className={mergeClassNames(
            'h-1.5 w-1.5 rounded-full',
            statusStyles[status].dot,
          )}
        />
      ) : null}
      <span>{children}</span>
    </span>
  )
}

export default StatusTag


