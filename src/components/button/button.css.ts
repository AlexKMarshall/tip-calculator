import { style } from '@vanilla-extract/css'
import { colorThemeTokens } from 'src/styles/color.css'

export const button = style({
  border: 'none',
  outline: '1px solid transparent',
  outlineOffset: '1px',

  selectors: {
    '&:hover, &:focus-visible': {
      backgroundColor: colorThemeTokens.background.accentHover,
    },
    '&:disabled': {
      backgroundColor: colorThemeTokens.background.accentDisabled,
    },
  },
})
