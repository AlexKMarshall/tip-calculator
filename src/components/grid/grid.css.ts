import { spaceThemeTokens } from 'src/styles/space.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${spaceThemeTokens.space['3xl']}, 100%), 1fr))`,
  gap: spaceThemeTokens.space['xs'],
})
