import * as styles from './stack.css'

import { Box } from 'src/components'
import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import clsx from 'clsx'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = {
  space?: Space
  children: ReactNode
}
export function Stack({ space = 's', children }: Props): JSX.Element {
  const sprinkles = sprinklesFn({ gap: space })

  return (
    <Box padding="none" className={clsx(sprinkles, styles.stack)}>
      {children}
    </Box>
  )
}
