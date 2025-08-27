import { forwardRef, useId } from 'react'
import { Input, type InputProps } from '../components/input'

export type FormFieldProps = {
  label: string
  description?: string
  error?: string
  requiredMark?: boolean
  containerClassName?: string
  inputClassName?: string
} & Omit<InputProps, 'label' | 'helperText' | 'error'>

function mergeClassNames(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(function FormField(
  {
    label,
    description,
    error,
    requiredMark = false,
    id,
    containerClassName,
    inputClassName,
    required,
    ...rest
  },
  ref,
) {
  const reactId = useId()
  const fieldId = id || rest.name || reactId
  const describedById = description ? `${fieldId}-desc` : undefined
  const errorId = error ? `${fieldId}-err` : undefined

  return (
    <div className={mergeClassNames('space-y-1.5', containerClassName)}>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-900 dark:text-neutral-100">
        {label}
        {requiredMark || required ? <span className="ml-0.5 text-red-600">*</span> : null}
      </label>
      <Input
        ref={ref}
        id={fieldId}
        aria-invalid={!!error || undefined}
        aria-describedby={mergeClassNames(describedById, errorId)}
        className={undefined}
        inputClassName={inputClassName}
        {...rest}
      />
      {description ? (
        <p id={describedById} className="text-xs text-gray-500 dark:text-neutral-400">
          {description}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
})

export default FormField


