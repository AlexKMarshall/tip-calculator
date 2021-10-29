import { recipe } from '@vanilla-extract/recipes'
import { spaceThemeTokens } from 'src/styles/space.css'

function getPadding(size: keyof typeof spaceThemeTokens) {
  return {
    padding: spaceThemeTokens[size],
  }
}

export const padding = recipe({
  base: {
    padding: spaceThemeTokens.s,
  },

  variants: {
    size: {
      '2xs': getPadding('2xs'),
      xs: getPadding('xs'),
      s: getPadding('s'),
      m: getPadding('m'),
      l: getPadding('l'),
      xl: getPadding('xl'),
      '2xl': getPadding('2xl'),
      '3xl': getPadding('3xl'),
    },
  },
})
