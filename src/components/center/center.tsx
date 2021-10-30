import { Box } from 'src/components'
import { ReactNode } from 'react'
import { center } from './center.css'

type Props = {
  children: ReactNode
  component?: 'div' | 'main'
}
export function Center({ component = 'div', children }: Props): JSX.Element {
  return (
    <Box padding="none" className={center} component={component}>
      {children}
    </Box>
  )
}
