import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import { sprinklesFn } from 'src/styles/sprinkles.css'

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
    <Component className={sprinklesFn({ fontSize: size })} id={id}>
      {children}
    </Component>
  )
}
