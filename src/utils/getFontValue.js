export function pxToRem(value) {
  return `${value / 16}rem`; // 16px = 1rem
}

export function remToPx(value) {
  return `${value * 16}px`; // 1rem = 16px
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}
