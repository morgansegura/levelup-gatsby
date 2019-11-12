import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  bodyFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyWeight: '400',
  boldWeight: '700',
  headerFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'], 
  headerWeight: '700',
  h1: {
    fontSize: '40px'
  },
  includeNormalize: true, 
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '500',
        '600',
        '700',
        '900',
      ],
    },
  ],  
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const {rhythm} = typography
export const {scale} = typography
