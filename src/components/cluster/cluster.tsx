import { Box, BoxProps } from '..'

import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import { cluster } from './cluster.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = {
  children: ReactNode
  space?: Space
  justify?: 'space-between'
  component?: BoxProps['component']
  align?: BoxProps['alignItems']
}
export function Cluster({
  space,
  justify,
  children,
  component,
  align,
}: Props): JSX.Element {
  const sprinkles = sprinklesFn({ gap: space, justifyContent: justify })

  return (
    <Box
      padding="none"
      className={[cluster, sprinkles]}
      component={component}
      alignItems={align}
    >
      {children}
    </Box>
  )
}
