import clsx, { ClassValue } from 'clsx'

import { ReactNode } from 'react'
import { Space } from 'src/styles/space.css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

type Props = {
  children: ReactNode
  padding?: Space
  className?: ClassValue
}
export function Box({
  padding = 's',
  className,
  children,
}: Props): JSX.Element {
  const userClasses = clsx(className)
  const sprinkles = sprinklesFn({ padding })

  return (
    <div className={`${sprinkles}${userClasses ? userClasses : undefined}`}>
      {children}
    </div>
  )
}
