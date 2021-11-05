import { colorThemeTokens } from 'src/styles/color.css'
import { styleVariants } from '@vanilla-extract/css'
import { typographyThemeTokens } from 'src/styles/typography.css'

export const tone = styleVariants(
  {
    ...colorThemeTokens.tone,
  },
  (tone) => ({ color: tone })
)

export const weight = styleVariants(
  {
    ...typographyThemeTokens.typography.weight,
  },
  (weight) => ({ fontWeight: weight })
)
