import { spaceThemeTokens } from 'src/styles/space.css'
import { style } from '@vanilla-extract/css'

export const center = style({
  maxWidth: spaceThemeTokens.measure,
  width: '100%',
  marginInline: 'auto',
})
