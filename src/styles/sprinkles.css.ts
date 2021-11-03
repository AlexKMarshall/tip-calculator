import {
  ConditionalValue,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles'
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
    display: ['block', 'grid', 'flex'],
    backgroundColor: colorThemeTokens.background,
    borderTopLeftRadius: spaceThemeTokens.borderRadius,
    borderTopRightRadius: spaceThemeTokens.borderRadius,
    borderBottomRightRadius: spaceThemeTokens.borderRadius,
    borderBottomLeftRadius: spaceThemeTokens.borderRadius,
  },
  shorthands: {
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    borderRadius: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
})

export const sprinklesFn = createSprinkles(properties)

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof properties,
  Value
>
