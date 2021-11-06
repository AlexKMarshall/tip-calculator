import { cover, inner } from './cover.css'

import { Box } from '..'
import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = {
  space?: Space
  children: ReactNode
}
export function Cover({ space, children }: Props): JSX.Element {
  const sprinkles = sprinklesFn({
    gap: space,
    paddingTop: { all: space, s: 'none' },
  })
  return (
    <Box className={[cover]} padding="none">
      <Box padding="none" className={[inner, sprinkles]}>
        {children}
      </Box>
    </Box>
  )
}
