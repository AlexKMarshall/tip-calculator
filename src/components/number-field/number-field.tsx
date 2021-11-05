import { AllHTMLAttributes, ReactNode } from 'react'
import { Cluster, NumberInput, Stack, Text } from 'src/components'

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

export function NumberField({
  label,
  id,
  errorMessage,
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
      <NumberInput
        icon={icon}
        id={id}
        value={value}
        min={min}
        step={step}
        errorId={errorMessage ? `${id}-error` : ''}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        formatter={formatter}
      />
    </Stack>
  )
}
