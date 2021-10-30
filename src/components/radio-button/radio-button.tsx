import { AllHTMLAttributes } from 'react'
import { Text } from '..'
import * as styles from './radio-button.css'

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
    <div>
      <input
        className={styles.input}
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className={styles.label}>
        <Text size="m">{label}</Text>
      </label>
    </div>
  )
}
