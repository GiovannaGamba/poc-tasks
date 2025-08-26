import { forwardRef } from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link'

type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function mergeClassNames(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 focus-visible:ring-gray-400',
  outline:
    'border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-800',
  ghost: 'hover:bg-gray-100 dark:hover:bg-neutral-800',
  destructive:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
  link: 'bg-transparent underline-offset-4 hover:underline text-blue-600 hover:text-blue-700',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg',
  icon: 'h-10 w-10 p-0',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const computedClassName = mergeClassNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  )

  return (
    <button
      ref={ref}
      className={computedClassName}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? (
        <span className="pointer-events-none inline-flex items-center gap-2">
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="sr-only">Carregando…</span>
        </span>
      ) : (
        <>
          {leftIcon ? <span className="-ml-0.5">{leftIcon}</span> : null}
          <span>{children}</span>
          {rightIcon ? <span className="-mr-0.5">{rightIcon}</span> : null}
        </>
      )}
    </button>
  )
})

export default Button


