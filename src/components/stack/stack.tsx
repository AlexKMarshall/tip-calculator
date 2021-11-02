import * as styles from './stack.css'

import { Box, BoxProps } from 'src/components'

import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import clsx from 'clsx'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = Pick<BoxProps, 'component' | 'htmlFor'> & {
  space?: Space
  children: ReactNode
}
export function Stack({ space = 's', children, ...props }: Props): JSX.Element {
  const sprinkles = sprinklesFn({ gap: space })

  return (
    <Box padding="none" className={clsx(sprinkles, styles.stack)} {...props}>
      {children}
    </Box>
  )
}
