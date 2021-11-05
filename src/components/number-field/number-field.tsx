import { AllHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react'
import {
  Cluster,
  NumberFieldValues,
  NumberInput,
  Stack,
  Text,
} from 'src/components'
import { FieldValues, UseControllerProps } from 'react-hook-form'

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

type InputProps = AllHTMLAttributes<HTMLInputElement>

type Props<TFieldValues extends FieldValues> = Pick<
  InputProps,
  'min' | 'step' | 'onFocus' | 'placeholder'
> &
  UseControllerProps<TFieldValues> & {
    label: ReactNode
    id: string
    errorMessage?: string
    // value: number | null
    // onChange: (value: number) => void
    icon?: ReactNode
    formatter?: (value: number) => string
    name: string
  }

function defaultFormatter(value: number) {
  return value.toString()
}

function NumberFieldInner<TFieldValues extends FieldValues>(
  {
    label,
    id,
    errorMessage,
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
        ref={ref}
        icon={icon}
        id={id}
        control={control}
        // value={value}
        min={min}
        step={step}
        errorId={errorMessage ? `${id}-error` : ''}
        // onChange={onChange}
        // onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        formatter={formatter}
        name={name}
      />
    </Stack>
  )
}
export const NumberField = forwardRef(NumberFieldInner)
