import { ReactNode } from 'react'
import { padding } from './box.css'

type Props = {
  children: ReactNode
  size?: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
}
export function Box({ size = 's', children }: Props): JSX.Element {
  return <div className={padding({ size })}>{children}</div>
}
