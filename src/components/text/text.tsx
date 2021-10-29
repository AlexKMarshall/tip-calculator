import { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { fontSize } from 'src/styles/typography.css'

type AllElementProps = AllHTMLAttributes<HTMLElement>

type TextProps = Pick<AllElementProps, 'id'> & {
  children: ReactNode
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl'
  component?: ElementType
}

export function Text({
  size = 's',
  component = 'span',
  id,
  children,
}: TextProps): JSX.Element {
  const Component = component

  return (
    <Component className={fontSize({ size })} id={id}>
      {children}
    </Component>
  )
}
