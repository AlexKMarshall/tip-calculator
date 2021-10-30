import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { spaceThemeTokens } from './space.css'
import { typographyThemeTokens } from './typography.css'

const properties = defineProperties({
  properties: {
    padding: spaceThemeTokens.space,
    gap: spaceThemeTokens.space,
    fontSize: typographyThemeTokens.typography.size,
  },
})

export const sprinklesFn = createSprinkles(properties)
