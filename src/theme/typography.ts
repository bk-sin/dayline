export const FONTS = {
  // Si no has cargado Manrope, usa System
  main: "Manrope",
  fallback: "System",
};

export const WEIGHTS = {
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900", // Usado en los labels pequeños del switch
};

export const SIZES = {
  xs: 10, // Captions, Nav Labels
  sm: 11, // Subtitles small
  md: 14, // Units
  lg: 18, // Card Titles
  xl: 20, // Input numbers
  xxl: 24, // Header Title
};

export const TEXT_STYLES = {
  headerTitle: {
    fontFamily: FONTS.main,
    fontSize: SIZES.xxl,
    fontWeight: WEIGHTS.bold,
    color: "white", // Se sobreescribe con theme
  },
  cardTitle: {
    fontFamily: FONTS.main,
    fontSize: SIZES.lg,
    fontWeight: WEIGHTS.medium,
  },
  caption: {
    fontFamily: FONTS.main,
    fontSize: SIZES.xs,
    textTransform: "uppercase",
    letterSpacing: 1, // tracking-wider
    fontWeight: WEIGHTS.bold,
  },
};
