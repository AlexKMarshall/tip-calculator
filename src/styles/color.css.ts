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
  text: {
    light: {
      neutral: 'hsl(183, 100%, 15%)',
      secondary: 'hsl(186, 14%, 43%)',
    },
    dark: {
      neutral: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(184, 14%, 56%)',
    },
  },
})

export const resolveBackgroundTone: Record<
  keyof typeof colorThemeTokens['background'],
  'light' | 'dark'
> = {
  body: 'light',
  card: 'light',
  accent: 'dark',
  accentActive: 'light',
  accentHover: 'light',
  accentDisabled: 'light',
  input: 'light',
}
