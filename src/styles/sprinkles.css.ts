import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { colorThemeTokens } from './color.css'

import { spaceThemeTokens } from './space.css'
import { typographyThemeTokens } from './typography.css'

const properties = defineProperties({
  properties: {
    padding: spaceThemeTokens.space,
    paddingInline: spaceThemeTokens.space,
    paddingBlock: spaceThemeTokens.space,
    gap: spaceThemeTokens.space,
    fontSize: typographyThemeTokens.typography.size,
    textAlign: ['left', 'center', 'right'],
    backgroundColor: colorThemeTokens.background,
  },
})

export const sprinklesFn = createSprinkles(properties)
