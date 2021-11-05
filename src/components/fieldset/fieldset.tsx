import { Stack, Text } from '..'

import { ReactNode } from 'react'

type Props = {
  label: ReactNode
  id: string
  children: ReactNode
}
export function Fieldset({ label, id, children }: Props): JSX.Element {
  const labelId = `${id}-label`
  return (
    <Stack component="section" aria-labelledby={labelId} space="2xs">
      <Text id={labelId} size="xs" weight="strong" tone="secondary">
        {label}
      </Text>
      {children}
    </Stack>
  )
}
