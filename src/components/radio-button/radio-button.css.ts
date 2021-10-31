import { style } from '@vanilla-extract/css'
import { colorThemeTokens } from 'src/styles/color.css'
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
  backgroundColor: colorThemeTokens.background.accent,
  color: colorThemeTokens.text.dark.neutral,

  ':hover': {
    backgroundColor: colorThemeTokens.background.accentHover,
    color: colorThemeTokens.text.light.neutral,
  },

  selectors: {
    'input:checked + &': {
      backgroundColor: colorThemeTokens.background.accentActive,
      color: colorThemeTokens.text.light.neutral,
    },
    'input:focus-visible + &': {
      backgroundColor: colorThemeTokens.background.accentHover,
      color: colorThemeTokens.text.light.neutral,
    },
  },
})
