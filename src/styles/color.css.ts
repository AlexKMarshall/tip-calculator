import { createGlobalTheme } from '@vanilla-extract/css'

export const colorThemeTokens = createGlobalTheme(':root', {
  background: {
    body: 'hsl(185, 41%, 84%)',
    card: 'hsl(0, 0%, 100%)',
    input: 'hsl(203, 50%, 97%)',
    accent: 'hsl(183, 100%, 15%)',
    accentActive: 'hsl(172, 67%, 45%)',
    accentHover: 'hsl(173, 61%, 77%)',
    accentDisabled: 'hsl(183, 79%, 24%)',
  },
})
