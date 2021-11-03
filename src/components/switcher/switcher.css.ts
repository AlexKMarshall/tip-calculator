import { globalStyle, style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'

export const switcher = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

globalStyle(`${switcher} > *`, {
  flexGrow: 1,
  flexBasis: calc.multiply(calc.subtract('35rem', '100%'), 999),
})
