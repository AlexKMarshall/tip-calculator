import { AllHTMLAttributes, ReactNode } from 'react'
import { Stack, Text } from 'src/components'
import { sprinklesFn } from 'src/styles/sprinkles.css'
import { input } from './number-input.css'

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
  onFocus: onFocusProp,
}: Props): JSX.Element {
  return (
    <Stack space="2xs">
      <label htmlFor={id}>
        <Text>{label}</Text>
      </label>

      {errorMessage ? <Text id={`${id}-error`}>{errorMessage}</Text> : null}
      <input
        className={input}
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
        onFocus={(e) => {
          e.target.select() // select the field content so we can easily type over it
          onFocusProp?.(e)
        }}
      />
    </Stack>
  )
}
