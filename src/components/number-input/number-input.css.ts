import { style } from '@vanilla-extract/css'
import { sprinklesFn } from 'src/styles/sprinkles.css'

export const input = style([
  sprinklesFn({ fontSize: 'm' }),
  {
    minWidth: 0,
    width: '100%',
  },
])
