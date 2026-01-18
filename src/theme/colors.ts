export const PALETTE = {
  // Base Colors
  slate50: "#fafafa",
  slate100: "#E6E8EB", // text-primary
  slate400: "#9CA3AF",
  slate500: "#6B7280", // text-muted
  slate900: "#0a0b0c", // background-dark

  // Brand
  blueGray: "#2e3f57", // primary
  darkGray: "#16181a", // card-dark
  borderGray: "#232529", // border-dark
  navBlack: "#15171C", // nav-bg
  navBorder: "#2A2E38",

  // Utility
  white: "#FFFFFF",
  whiteAlpha5: "rgba(255, 255, 255, 0.05)",
  whiteAlpha40: "rgba(255, 255, 255, 0.40)",
  toggleOff: "#1f2226",
};

export const COLORS = {
  // Semantic names (Nombres por uso)
  primary: PALETTE.blueGray,
  background: PALETTE.slate900,
  card: PALETTE.darkGray,
  border: PALETTE.borderGray,

  text: {
    primary: PALETTE.slate100,
    muted: PALETTE.slate500,
    inverse: PALETTE.white,
    nav: PALETTE.slate500,
    navActive: PALETTE.slate100,
  },

  ui: {
    toggleOff: PALETTE.toggleOff,
    navBackground: PALETTE.navBlack,
    navBorder: PALETTE.navBorder,
    iconBackground: PALETTE.whiteAlpha5,
  },
};
