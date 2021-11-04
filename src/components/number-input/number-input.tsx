import * as styles from './number-input.css'

import { AllHTMLAttributes, ReactNode, useState } from 'react'
import { Cluster, Stack, Text } from 'src/components'

import clsx from 'clsx'

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
  icon?: ReactNode
  formatter?: (value: number) => string
}

function defaultFormatter(value: number) {
  return value.toString()
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
  icon,
  formatter = defaultFormatter,
}: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)

  const formattedValue = value === null ? null : formatter(value)

  return (
    <Stack space="2xs">
      <Cluster justify="space-between" align="baseline">
        <label htmlFor={id}>
          <Text size="xs" weight="strong" tone="secondary">
            {label}
          </Text>
        </label>

        {errorMessage ? (
          <Text id={`${id}-error`} tone="critical" size="xs" weight="strong">
            {errorMessage}
          </Text>
        ) : null}
      </Cluster>
      <div className={styles.wrapper}>
        {icon ? (
          <div className={styles.icon} aria-hidden>
            {icon}
          </div>
        ) : null}
        {isEditing ? (
          <input
            className={styles.input({ icon: Boolean(icon) })}
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
            onBlur={(e) => {
              setIsEditing(false)
              onBlur?.(e)
            }}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={clsx(
              styles.input({ icon: Boolean(icon) }),
              styles.formattedInput
            )}
            id={id}
            type="text"
            value={formattedValue ?? ''}
            readOnly
            aria-invalid={Boolean(errorMessage)}
            aria-describedby={errorMessage ? `${id}-error` : undefined}
            onFocus={(e) => {
              setIsEditing(true)
              e.target.select()
              onFocusProp?.(e)
            }}
            placeholder={placeholder}
          />
        )}
      </div>
    </Stack>
  )
}
