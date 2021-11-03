import { colorThemeTokens } from 'src/styles/color.css'
import { styleVariants } from '@vanilla-extract/css'

export const tone = styleVariants(
  {
    ...colorThemeTokens.tone,
  },
  (tone) => ({ color: tone })
)
