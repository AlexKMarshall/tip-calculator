import * as styles from './stack.css'

import { Box, BoxProps } from 'src/components'

import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = Pick<BoxProps, 'component' | 'htmlFor'> & {
  space?: Space
  split?: boolean
  children: ReactNode
}
export function Stack({
  space = 's',
  split,
  children,
  ...props
}: Props): JSX.Element {
  const sprinkles = sprinklesFn({ gap: space })

  return (
    <Box
      padding="none"
      className={[sprinkles, styles.stack, split ? styles.splitStack : '']}
      {...props}
    >
      {children}
    </Box>
  )
}
