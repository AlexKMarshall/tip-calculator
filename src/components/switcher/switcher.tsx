import { Box, BoxProps } from '..'

import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'
import { switcher } from './switcher.css'

type Props = Pick<BoxProps, 'component'> & {
  space?: Space
  children: ReactNode
}
export function Switcher({
  space = 'm',
  children,
  ...props
}: Props): JSX.Element {
  const sprinkles = sprinklesFn({ gap: space })
  return (
    <Box className={[switcher, sprinkles]} {...props}>
      {children}
    </Box>
  )
}
