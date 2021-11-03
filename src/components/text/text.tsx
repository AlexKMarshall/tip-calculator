import * as styles from './text.css'

import { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import clsx from 'clsx'
import { colorThemeTokens } from 'src/styles/color.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type AllElementProps = AllHTMLAttributes<HTMLElement>

type TextProps = Pick<AllElementProps, 'id'> & {
  children: ReactNode
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl'
  component?: ElementType
  tone?: keyof typeof colorThemeTokens.tone
}

export function Text({
  size = 's',
  component = 'span',
  tone,
  id,
  children,
}: TextProps): JSX.Element {
  const Component = component
  const toneStyle = tone ? styles.tone[tone] : ''

  return (
    <Component
      className={clsx(sprinklesFn({ fontSize: size }), toneStyle)}
      id={id}
    >
      {children}
    </Component>
  )
}
