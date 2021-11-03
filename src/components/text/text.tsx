import * as styles from './text.css'

import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import {
  invertableTone,
  typographyThemeTokens,
} from 'src/styles/typography.css'

import clsx from 'clsx'
import { resolveBackgroundTone } from 'src/styles/color.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'
import { useBackground } from '..'

type AllElementProps = AllHTMLAttributes<HTMLElement>

type TextProps = Pick<AllElementProps, 'id'> & {
  children: ReactNode
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl'
  component?: ElementType
  tone?: keyof typeof styles.tone | keyof typeof invertableTone
  weight?: keyof typeof typographyThemeTokens.typography.weight
}

export function Text({
  size = 's',
  component = 'span',
  tone,
  weight,
  id,
  children,
}: TextProps): JSX.Element {
  const background = useBackground()
  let toneClass: string = ''
  if (
    (tone === 'neutral' || tone === 'secondary') &&
    background &&
    background in resolveBackgroundTone
  ) {
    const backgroundTone = resolveBackgroundTone[background]
    toneClass = invertableTone[tone][backgroundTone]
  }
  if (tone === 'brand' || tone === 'critical') {
    toneClass = tone ? styles.tone[tone] : ''
  }

  const Component = component
  const weightStyle = weight ? styles.weight[weight] : ''

  return (
    <Component
      className={clsx(sprinklesFn({ fontSize: size }), toneClass, weightStyle)}
      id={id}
    >
      {children}
    </Component>
  )
}
