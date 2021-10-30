import { ReactNode } from 'react'
import { hiddenVisually } from './hidden-visually.css'

type Props = {
  children: ReactNode
}
export function HiddenVisually({ children }: Props): JSX.Element {
  return <span className={hiddenVisually}>{children}</span>
}
