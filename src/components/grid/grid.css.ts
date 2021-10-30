import { style } from '@vanilla-extract/css'
import { spaceThemeTokens } from 'src/styles/space.css'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: spaceThemeTokens.space['xs'],
})
