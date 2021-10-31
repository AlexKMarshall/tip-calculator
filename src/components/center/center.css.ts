import { spaceThemeTokens } from 'src/styles/space.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const center = recipe({
  base: {
    boxSizing: 'content-box',
    maxWidth: spaceThemeTokens.measure,
    width: '100%',
    marginInline: 'auto',
  },

  variants: {
    intrinsic: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
})
