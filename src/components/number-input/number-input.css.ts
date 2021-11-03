import { sprinklesFn } from 'src/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const input = style([
  sprinklesFn({ fontSize: 'm', backgroundColor: 'input', borderRadius: 's' }),
  {
    minWidth: 0,
    width: '100%',
  },
])
