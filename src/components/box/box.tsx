import {
  AllHTMLAttributes,
  ElementType,
  ReactNode,
  createContext,
  useContext,
} from 'react'
import clsx, { ClassValue } from 'clsx'
import { colorThemeTokens, resolveBackgroundTone } from 'src/styles/color.css'

import { Space } from 'src/styles/space.css'
import { invertableTone } from 'src/styles/typography.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type ValidBackground = keyof typeof colorThemeTokens.background

const BackgroundContext = createContext<ValidBackground | undefined>(undefined)
BackgroundContext.displayName = 'BackgroundContext'

export function useBackground() {
  // not currently throwing if undefined as top level box won't have context
  // but maybe we put the body into context
  return useContext(BackgroundContext)
}

function renderBackgroundProvider(
  background: ValidBackground | undefined,
  children: ReactNode | null
) {
  return background ? (
    <BackgroundContext.Provider value={background}>
      {children}
    </BackgroundContext.Provider>
  ) : (
    <>{children}</>
  )
}

export type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, 'className'> & {
  children: ReactNode
  padding?: Space
  paddingInline?: Space
  paddingTop?: Space
  background?: ValidBackground
  className?: ClassValue
  component?: ElementType
}
export function Box({
  padding = 's',
  paddingInline,
  paddingTop,
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
    paddingTop,
    backgroundColor: background,
  })
  const Component = component
  const tone = 'neutral'

  let colorClass: string = ''
  if (background) {
    const backgroundTone = resolveBackgroundTone[background]
    colorClass = invertableTone[tone][backgroundTone]
  }

  return renderBackgroundProvider(
    background,
    <Component className={clsx(userClasses, colorClass, sprinkles)} {...props}>
      {children}
    </Component>
  )
}
