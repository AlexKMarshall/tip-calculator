import * as styles from './number-input.css'

import { AllHTMLAttributes, ReactNode, useState } from 'react'

import clsx from 'clsx'

type InputProps = AllHTMLAttributes<HTMLInputElement>

type Props = Pick<
  InputProps,
  'min' | 'step' | 'onBlur' | 'onFocus' | 'placeholder'
> & {
  id: string
  errorId?: string
  value: number | null
  onChange: (value: number) => void
  icon?: ReactNode
  formatter?: (value: number) => string
}

function defaultFormatter(value: number) {
  return value.toString()
}

export function NumberInput({
  id,
  errorId,
  value,
  min,
  step,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  icon,
  formatter = defaultFormatter,
}: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)

  const formattedValue = value === null ? null : formatter(value)

  const editProps = {
    value: value ?? '',
    type: 'number',
    min,
    step,
  }

  const readProps = {
    type: 'text',
    value: formattedValue ?? '',
    readOnly: true,
  }

  return (
    <div className={styles.wrapper}>
      {icon ? (
        <div className={styles.icon} aria-hidden>
          {icon}
        </div>
      ) : null}
      <input
        className={clsx(
          styles.input({ icon: Boolean(icon) }),
          !isEditing && styles.readInput
        )}
        id={id}
        aria-invalid={Boolean(errorId)}
        aria-describedby={errorId}
        onChange={(e) => {
          onChange(e.target.valueAsNumber)
        }}
        onBlur={(e) => {
          setIsEditing(false)
          onBlur?.(e)
        }}
        onFocus={(e) => {
          setIsEditing(true)
          e.target.select()
          onFocus?.(e)
        }}
        placeholder={placeholder}
        {...(isEditing ? editProps : readProps)}
      />
    </div>
  )
}
