import { createVar, style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'
import { colorThemeTokens } from 'src/styles/color.css'
import { recipe } from '@vanilla-extract/recipes'
import { spaceThemeTokens } from 'src/styles/space.css'
import { typographyThemeTokens } from 'src/styles/typography.css'

const padding = createVar()
const iconSize = createVar()

export const wrapper = style({
  position: 'relative',
  fontSize: typographyThemeTokens.typography.size.m,

  vars: {
    [padding]: '0.5em',
    [iconSize]: '0.75em',
  },
})

export const input = recipe({
  base: {
    backgroundColor: colorThemeTokens.background.input,
    borderRadius: spaceThemeTokens.borderRadius.s,
    minWidth: 0,
    width: '100%',
    textAlign: 'right',
    border: 'none',
  },

  variants: {
    icon: {
      true: {
        paddingLeft: calc.add(iconSize, calc.multiply(padding, 2)),
      },
      false: {},
    },
  },
})

export const icon = style({
  position: 'absolute',
  top: '50%',
  width: '0.75em',
  left: padding,
  transform: 'translateY(-50%)',
})
