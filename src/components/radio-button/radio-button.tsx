import * as styles from './radio-button.css'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Text, hiddenVisually } from '..'

import { AllHTMLAttributes } from 'react'

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

type Props<TFieldValues extends FieldValues> = Pick<
  AllHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> &
  UseControllerProps<TFieldValues> & {
    name: string
    label: string
    id: string
  }

export function RadioButton<TFieldValues extends FieldValues>({
  value,
  onChange: onChangeProp,
  name,
  label,
  id,
  control,
}: Props<TFieldValues>): JSX.Element {
  const {
    field: { ref, value: groupValue, onChange, onBlur },
  } = useController({ name, control })

  return (
    <>
      <input
        ref={ref}
        className={hiddenVisually}
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={(e) => {
          onChange(parseInt(e.target.value))
          onChangeProp?.(e)
        }}
        onBlur={onBlur}
        checked={value === groupValue}
      />
      <label htmlFor={id} className={styles.label}>
        <Text size="m" weight="strong">
          {label}
        </Text>
      </label>
    </>
  )
}
