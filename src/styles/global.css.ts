import { globalStyle } from '@vanilla-extract/css'
import { colorThemeTokens } from './color.css'

globalStyle('html, body', {
  fontFamily: "'Space Mono', monospace",
  backgroundColor: colorThemeTokens.background.body,
})
