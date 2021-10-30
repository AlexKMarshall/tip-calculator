import { ReactNode } from 'react'
import { Box } from 'src/components'
import { grid } from './grid.css'

type Props = { children: ReactNode }
export function Grid({ children }: Props): JSX.Element {
  return <Box className={grid}>{children}</Box>
}
