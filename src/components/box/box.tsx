import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'
import { colorThemeTokens } from 'src/styles/color.css'

export type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, 'className'> & {
  children: ReactNode
  padding?: Space
  paddingInline?: Space
  background?: keyof typeof colorThemeTokens.background
  className?: ClassValue
  component?: ElementType
}
export function Box({
  padding = 's',
  paddingInline,
  background,
  className,
  children,
  component = 'div',
  ...props
}: BoxProps): JSX.Element {
  const userClasses = clsx(className)
  const sprinkles = sprinklesFn({
    padding,
    paddingInline,
    backgroundColor: background,
  })
  const Component = component

  return (
    <Component className={clsx(userClasses, sprinkles)} {...props}>
      {children}
    </Component>
  )
}
