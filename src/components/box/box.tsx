import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = Omit<AllHTMLAttributes<HTMLElement>, 'className'> & {
  children: ReactNode
  padding?: Space
  className?: ClassValue
  component?: ElementType
}
export function Box({
  padding = 's',
  className,
  children,
  component = 'div',
  ...props
}: Props): JSX.Element {
  const userClasses = clsx(className)
  const sprinkles = sprinklesFn({ padding })
  const Component = component

  return (
    <Component className={clsx(userClasses, sprinkles)} {...props}>
      {children}
    </Component>
  )
}
