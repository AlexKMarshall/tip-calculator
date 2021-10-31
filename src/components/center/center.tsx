import { Box, BoxProps } from 'src/components'
import { ReactNode } from 'react'
import { center } from './center.css'

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
  return (
    <Box
      paddingInline={gutter}
      className={center({ intrinsic })}
      component={component}
    >
      {children}
    </Box>
  )
}
