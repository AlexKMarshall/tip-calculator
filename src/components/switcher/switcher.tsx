import { Box, BoxProps } from '..'

import { ReactNode } from 'react'
import { switcher } from './switcher.css'

type Props = Pick<BoxProps, 'component'> & { children: ReactNode }
export function Switcher({ children, ...props }: Props): JSX.Element {
  return (
    <Box className={switcher} {...props}>
      {children}
    </Box>
  )
}
