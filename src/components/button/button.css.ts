import { colorThemeTokens } from 'src/styles/color.css'
import { spaceThemeTokens } from 'src/styles/space.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  border: 'none',
  outline: '1px solid transparent',
  outlineOffset: '1px',
  borderRadius: spaceThemeTokens.borderRadius.s,

  selectors: {
    '&:hover, &:focus-visible': {
      backgroundColor: colorThemeTokens.background.accentHover,
    },
    '&:disabled': {
      backgroundColor: colorThemeTokens.background.accentDisabled,
    },
  },
})
