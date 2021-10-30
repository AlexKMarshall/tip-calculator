import { ReactNode } from 'react'
import { sprinklesFn } from 'src/styles/sprinkles.css'

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const

const resolveFontSize = {
  '1': '2xl',
  '2': 'xl',
  '3': 'l',
  '4': 'm',
} as const

type Props = {
  level: '1' | '2' | '3' | '4'
  component?: 'h1' | 'h2' | 'h3' | 'h4'
  children: ReactNode
}
export function Heading({ level, component, children }: Props): JSX.Element {
  const Component = component ?? resolveDefaultComponent[level]
  const fontSize = resolveFontSize[level]
  return <Component className={sprinklesFn({ fontSize })}>{children}</Component>
}
