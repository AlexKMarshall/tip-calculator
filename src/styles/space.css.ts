import { createGlobalTheme } from '@vanilla-extract/css'
import { fluidFactory } from './utils'

const resolveSpaceMultiplier = {
  '2xs': 0.5,
  xs: 0.75,
  s: 1,
  m: 1.5,
  l: 2,
  xl: 3,
  '2xl': 4,
  '3xl': 6,
}

type TShirtSize = keyof typeof resolveSpaceMultiplier

const smallBase = 16
const largeBase = 18

const getFluidSpace = (size: TShirtSize) =>
  fluidFactory()(
    resolveSpaceMultiplier[size] * smallBase,
    resolveSpaceMultiplier[size] * largeBase
  )

export const spaceThemeTokens = createGlobalTheme(':root', {
  space: {
    '2xs': getFluidSpace('2xs'),
    xs: getFluidSpace('xs'),
    s: getFluidSpace('s'),
    m: getFluidSpace('m'),
    l: getFluidSpace('l'),
    xl: getFluidSpace('xl'),
    '2xl': getFluidSpace('2xl'),
    '3xl': getFluidSpace('3xl'),
    none: '0',
  },
  measure: '70ch',
  borderRadius: {
    none: '0px',
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '16px',
    xl: '24px',
    full: '999px',
    circle: '50%',
  },
})

export type Space = keyof typeof spaceThemeTokens.space

export const screenSizes = {
  s: 640,
  m: 768,
}

export const resolveScreenMQ = {
  s: `screen and (min-width: ${screenSizes.s}px)`,
  m: `screen and (min-width: ${screenSizes.m}px)`,
}
