import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.7,
  bodyFontFamily: [
    "Avenir Next",
    "Merriweather",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "serif",
  ],
  bodyWeight: "400",
  boldWeight: "700",
  headerFontFamily: [
    "Avenir Next",
    "Lato",
    "Lucida Grande",
    "Lucida Sand Unicode",
    "Lucida Sans",
    "Geneva",
    "Arial",
    "sans-serif",
  ],
  headerWeight: "700",
  h1: {
    fontSize: "40px",
  },
  includeNormalize: true,
  // googleFonts: [
  //   {
  //     name: "Lato",
  //     styles: ["300", "400", "700", "900"],
  //   },
  //   {
  //     name: "Merriweather",
  //     styles: ["300", "400", "700", "900"],
  //   },
  // ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const {rhythm} = typography
export const {scale} = typography
