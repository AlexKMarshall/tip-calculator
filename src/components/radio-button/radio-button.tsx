import * as styles from './radio-button.css'

import { Text, hiddenVisually } from '..'

import { AllHTMLAttributes } from 'react'

type Props = Pick<
  AllHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'checked'
> & {
  name: string
  label: string
  id: string
}

export function RadioButton({
  value,
  name,
  onChange,
  checked,
  label,
  id,
}: Props): JSX.Element {
  return (
    <>
      <input
        className={hiddenVisually}
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className={styles.label}>
        <Text size="m" weight="strong">
          {label}
        </Text>
      </label>
    </>
  )
}
