import * as React from 'react'

export type DashboardLayoutProps = {
  title?: string
  headerRight?: React.ReactNode
  children: React.ReactNode
  className?: string
}

function mergeClassNames(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}

export function DashboardLayout({ title, headerRight, children, className }: DashboardLayoutProps) {
  return (
    <div className={mergeClassNames('min-h-dvh bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-100', className)}>
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-600" />
            <span className="text-sm font-semibold tracking-tight">Dashboard</span>
            {title ? (
              <h1 className="ml-3 text-base font-semibold leading-none text-gray-900 dark:text-neutral-100">{title}</h1>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {headerRight}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout


