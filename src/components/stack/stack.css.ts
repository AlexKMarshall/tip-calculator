import { globalStyle, style } from '@vanilla-extract/css'

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
})

export const splitStack = style({})

globalStyle(`${splitStack} > :last-child`, {
  marginBlockStart: 'auto',
})
