import { colorThemeTokens } from 'src/styles/color.css'
import { spaceThemeTokens } from 'src/styles/space.css'
import { style } from '@vanilla-extract/css'
import { typographyThemeTokens } from 'src/styles/typography.css'

export const button = style({
  border: 'none',
  outline: '1px solid transparent',
  outlineOffset: '1px',
  borderRadius: spaceThemeTokens.borderRadius.s,
  fontSize: typographyThemeTokens.typography.size.m,
  textTransform: 'uppercase',
  fontWeight: typographyThemeTokens.typography.weight.strong,

  selectors: {
    '&:hover, &:focus-visible': {
      backgroundColor: colorThemeTokens.background.accentHover,
    },
    '&:disabled': {
      backgroundColor: colorThemeTokens.background.accentDisabled,
    },
  },
})
