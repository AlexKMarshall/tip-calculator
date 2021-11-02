import { AllHTMLAttributes, ReactNode } from 'react'
import { Cluster, Stack, Text } from 'src/components'

import { input } from './number-input.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type InputProps = AllHTMLAttributes<HTMLInputElement>

type Props = Pick<
  InputProps,
  'min' | 'step' | 'onBlur' | 'onFocus' | 'placeholder'
> & {
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
  placeholder,
}: Props): JSX.Element {
  return (
    <Stack space="2xs">
      <Cluster justify="space-between">
        <label htmlFor={id}>
          <Text>{label}</Text>
        </label>

        {errorMessage ? <Text id={`${id}-error`}>{errorMessage}</Text> : null}
      </Cluster>
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
        placeholder={placeholder}
      />
    </Stack>
  )
}
