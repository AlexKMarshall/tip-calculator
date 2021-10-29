import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

/* ------- Factory functions  ---------*/
const defaultConfig = {
  rootSize: 16,
  scale: 1.25,
  smallBreakpoint: 375,
  largeBreakPoint: 1280,
}

const scaleFactory =
  ({ base = defaultConfig.rootSize, scale = defaultConfig.scale } = {}) =>
  (step: number) =>
    base * Math.pow(scale, step)

const fluidFactory =
  ({
    smallBreakpoint = defaultConfig.smallBreakpoint,
    largeBreakpoint = defaultConfig.largeBreakPoint,
    rootSize = defaultConfig.rootSize,
  } = {}) =>
  (smallSize: number, largeSize: number) => {
    const xRem =
      (smallSize * largeBreakpoint - largeSize * smallBreakpoint) /
      (rootSize * (largeBreakpoint - smallBreakpoint))
    const yVW =
      (100 * (largeSize - smallSize)) / (largeBreakpoint - smallBreakpoint)

    const smallTerm = smallSize / rootSize
    const largeTerm = largeSize / rootSize
    const middleTerm = { rem: xRem, vw: yVW }

    return `clamp(${smallTerm.toFixed(2)}rem, ${middleTerm.rem.toFixed(
      2
    )}rem + ${middleTerm.vw.toFixed(2)}vw, ${largeTerm.toFixed(2)}rem)`
  }

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

const typographyScale = createGlobalTheme('html', {
  xs: generateFluidStep(-1),
  s: generateFluidStep(0),
  m: generateFluidStep(1),
  l: generateFluidStep(2),
  xl: generateFluidStep(3),
  '2xl': generateFluidStep(4),
})

function getFontSize(key: keyof typeof typographyScale) {
  return {
    fontSize: typographyScale[key],
  }
}

export const fontSize = recipe({
  base: {
    fontSize: typographyScale.s,
  },

  variants: {
    size: {
      xs: getFontSize('xs'),
      s: getFontSize('s'),
      m: getFontSize('m'),
      l: getFontSize('l'),
      xl: getFontSize('xl'),
      '2xl': getFontSize('2xl'),
    },
  },
})
