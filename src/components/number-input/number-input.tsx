import { AllHTMLAttributes, ReactNode } from 'react'

type InputProps = AllHTMLAttributes<HTMLInputElement>

type Props = Pick<InputProps, 'min' | 'step' | 'onBlur' | 'onFocus'> & {
  label: ReactNode
  id: string
  errorMessage?: string
  value: number | null
  onChange: (value: number) => void
}

export function NumberInput({
  label,
  id,
  errorMessage,
  value,
  min,
  step,
  onChange,
  onBlur,
  onFocus,
}: Props): JSX.Element {
  return (
    <>
      <label htmlFor={id}>{label}</label>

      {errorMessage ? <span id={`${id}-error`}>errorMessage</span> : null}
      <input
        id={id}
        type="number"
        value={value ?? ''}
        min={min}
        step={step}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        onChange={(e) => {
          onChange(e.target.valueAsNumber)
        }}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </>
  )
}
