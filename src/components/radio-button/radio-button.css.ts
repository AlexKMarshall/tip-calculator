import { style } from '@vanilla-extract/css'
import { spaceThemeTokens } from 'src/styles/space.css'
import { typographyThemeTokens } from 'src/styles/typography.css'

export const input = style({
  appearance: 'none',
})

export const label = style({
  display: 'inline-block',
  padding: spaceThemeTokens.space['xs'],
  lineHeight: 1,
  textAlign: 'center',
})
