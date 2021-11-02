import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { resolveScreenMQ, screenSizes, spaceThemeTokens } from './space.css'

import { colorThemeTokens } from './color.css'
import { typographyThemeTokens } from './typography.css'

const properties = defineProperties({
  conditions: {
    all: {},
    s: { '@media': resolveScreenMQ.s },
    m: { '@media': resolveScreenMQ.m },
  },
  defaultCondition: 'all',
  properties: {
    padding: spaceThemeTokens.space,
    paddingInline: spaceThemeTokens.space,
    paddingBlock: spaceThemeTokens.space,
    paddingTop: spaceThemeTokens.space,
    gap: spaceThemeTokens.space,
    fontSize: typographyThemeTokens.typography.size,
    textAlign: ['left', 'center', 'right'],
    justifyContent: ['flex-start', 'flex-end', 'space-between'],
    backgroundColor: colorThemeTokens.background,
  },
})

export const sprinklesFn = createSprinkles(properties)
