import { Box, BoxProps } from 'src/components'

import { ReactNode } from 'react'
import { center } from './center.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = {
  children: ReactNode
  component?: 'div' | 'main'
  gutter?: BoxProps['padding']
  intrinsic?: boolean
}
export function Center({
  component = 'div',
  children,
  gutter = 'none',
  intrinsic,
}: Props): JSX.Element {
  const sprinkles = sprinklesFn({ paddingInline: { s: gutter } })

  return (
    <Box
      padding="none"
      // paddingInline={gutter}
      className={[center({ intrinsic }), sprinkles]}
      component={component}
    >
      {children}
    </Box>
  )
}
