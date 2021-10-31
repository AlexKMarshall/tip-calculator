import { defaultConfig, fluidFactory } from './utils'

import { createGlobalTheme, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { colorThemeTokens } from './color.css'

/* ------- Factory functions  ---------*/

const scaleFactory =
  ({ base = defaultConfig.rootSize, scale = defaultConfig.scale } = {}) =>
  (step: number) =>
    base * Math.pow(scale, step)

const fluidStepFactory =
  (
    smallScale: (step: number) => number,
    largeScale: (step: number) => number
  ) =>
  (fluidCalc: (smallSize: number, largeSize: number) => string) =>
  (step: number): string =>
    fluidCalc(smallScale(step), largeScale(step))

/* --- Specific implementation --- */

const smallBase = 16
const smallScale = 1.25
const largeBase = 18
const largeScale = 1.333

const generateFluidStep = fluidStepFactory(
  scaleFactory({ base: smallBase, scale: smallScale }),
  scaleFactory({ base: largeBase, scale: largeScale })
)(fluidFactory())

export const typographyThemeTokens = createGlobalTheme(':root', {
  typography: {
    size: {
      xs: generateFluidStep(-1),
      s: generateFluidStep(0),
      m: generateFluidStep(1),
      l: generateFluidStep(2),
      xl: generateFluidStep(3),
      '2xl': generateFluidStep(4),
    },
  },
})

export const invertableTone = {
  neutral: styleVariants({
    light: {
      color: colorThemeTokens.text.light.neutral,
    },
    dark: {
      color: colorThemeTokens.text.dark.neutral,
    },
  }),
}
