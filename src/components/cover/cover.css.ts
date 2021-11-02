import { globalStyle, style } from '@vanilla-extract/css'

import { resolveScreenMQ } from 'src/styles/space.css'

export const cover = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',

  '@media': {
    [resolveScreenMQ.s]: {
      minHeight: 0,
      marginBlock: 'auto',
    },
  },
})

globalStyle(`${inner} > :nth-child(1)`, {
  marginBlock: 'auto',

  '@media': {
    [resolveScreenMQ.s]: {
      marginBlock: 0,
    },
  },
})

globalStyle(`${inner} > :nth-child(2)`, {
  marginBlockStart: 'auto',

  '@media': {
    [resolveScreenMQ.s]: {
      marginBlockStart: 0,
    },
  },
})
