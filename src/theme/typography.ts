import { StyleSheet } from "react-native";

export const FONTS = {
  main: "Manrope",
  fallback: "System",
};

export const TEXT_STYLES = StyleSheet.create({
  titleLarge: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Manrope_600SemiBold",
  },
  titleMedium: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Manrope_500Medium",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Manrope_400Regular",
  },
  caption: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Manrope_500Medium",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Manrope_500Medium",
  },
});
