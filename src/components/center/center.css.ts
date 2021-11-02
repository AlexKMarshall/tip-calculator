import { recipe } from '@vanilla-extract/recipes'

export const center = recipe({
  base: {
    boxSizing: 'content-box',
    maxWidth: '1020px',
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
