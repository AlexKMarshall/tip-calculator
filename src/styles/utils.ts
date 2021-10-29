export const defaultConfig = {
  rootSize: 16,
  scale: 1.25,
  smallBreakpoint: 375,
  largeBreakPoint: 1280,
}

export const fluidFactory =
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
