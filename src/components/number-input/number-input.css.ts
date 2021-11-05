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
  display: 'flex',

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
    color: 'inherit',
    fontWeight: typographyThemeTokens.typography.weight.strong,
    caretColor: colorThemeTokens.tone.brand,

    ':focus-visible': {
      outline: '1px solid transparent',
      boxShadow: `0 0 0 2px ${colorThemeTokens.tone.brand}`,
    },

    selectors: {
      '&[aria-invalid=true]': {
        outline: '1px solid transparent',
        boxShadow: `0 0 0 2px ${colorThemeTokens.tone.critical}`,
      },
    },
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

export const readInput = style({
  paddingInlineEnd: spaceThemeTokens.space.s,
})

export const icon = style({
  position: 'absolute',
  top: '50%',
  width: '0.75em',
  left: padding,
  transform: 'translateY(-50%)',
  color: colorThemeTokens.text.light.secondary,
  opacity: '0.7',
})
