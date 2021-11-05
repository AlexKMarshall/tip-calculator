import * as styles from './number-input.css'

import {
  AllHTMLAttributes,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import clsx from 'clsx'

type InputProps = AllHTMLAttributes<HTMLInputElement>

export type NumberFieldValues = {
  [x: string]: number | null
}

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

type Props<TFieldValues extends FieldValues> = Pick<
  InputProps,
  'min' | 'step' | 'onFocus' | 'placeholder'
> &
  UseControllerProps<TFieldValues> & {
    id: string
    errorId?: string
    // value: number | null
    // onChange: (value: number) => void
    icon?: ReactNode
    formatter?: (value: number) => string
  }

function defaultFormatter(value: number) {
  return value.toString()
}

function NumberInputInner<TFieldValues extends FieldValues>(
  {
    id,
    errorId,
    // value,
    min,
    step,
    // onChange,
    // onBlur,
    onFocus,
    placeholder,
    icon,
    formatter = defaultFormatter,
    name,
    control,
  }: Props<TFieldValues>,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const {
    field: { onChange, onBlur, value },
  } = useController({ name, control })
  const [isEditing, setIsEditing] = useState(false)

  const formattedValue = typeof value === 'number' ? formatter(value) : null

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
        ref={ref}
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
          onBlur()
        }}
        onFocus={(e) => {
          setIsEditing(true)
          e.target.select()
          onFocus?.(e)
        }}
        placeholder={placeholder}
        name={name}
        {...(isEditing ? editProps : readProps)}
      />
    </div>
  )
}

export const NumberInput = forwardRef(NumberInputInner)
