import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { spaceThemeTokens } from './space.css'

const properties = defineProperties({
  properties: {
    padding: spaceThemeTokens.space,
    gap: spaceThemeTokens.space,
  },
})

export const sprinklesFn = createSprinkles(properties)
