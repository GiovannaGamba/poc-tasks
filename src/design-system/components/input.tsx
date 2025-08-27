import { forwardRef } from 'react'

export type InputProps = {
  label?: string
  helperText?: string
  error?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  className?: string
  inputClassName?: string
  containerClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function mergeClassNames(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error,
    startIcon,
    endIcon,
    className,
    inputClassName,
    containerClassName,
    id,
    disabled,
    ...rest
  },
  ref,
) {
  const inputId = id || rest.name

  const baseInput =
    'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-600 focus:border-blue-600 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500'

  const inputPaddingWithIcons = mergeClassNames(
    startIcon ? 'pl-9' : undefined,
    endIcon ? 'pr-9' : undefined,
  )

  return (
    <label className={mergeClassNames('block text-sm', className)} htmlFor={inputId}>
      {label ? (
        <span className="mb-1.5 block font-medium text-gray-900 dark:text-neutral-100">
          {label}
        </span>
      ) : null}
      <div
        className={mergeClassNames(
          'relative',
          containerClassName,
        )}
      >
        {startIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            {startIcon}
          </span>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={mergeClassNames(
            baseInput,
            inputPaddingWithIcons,
            error && 'border-red-500 focus:ring-red-600 focus:border-red-600',
            inputClassName,
          )}
          disabled={disabled}
          {...rest}
        />
        {endIcon ? (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            {endIcon}
          </span>
        ) : null}
      </div>
      {error ? (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-sm text-gray-500 dark:text-neutral-400">{helperText}</p>
      ) : null}
    </label>
  )
})

export default Input


