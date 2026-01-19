import { Text, TextProps, StyleSheet } from "react-native";
import { COLORS, TEXT_STYLES } from "@/theme";

interface TypographyProps extends TextProps {
  variant?: "titleLarge" | "titleMedium" | "body" | "caption" | "label";
  color?: "primary" | "secondary" | "muted" | "error" | "slate";
}

export const Typography = ({
  variant = "body",
  color = "primary",
  style,
  ...props
}: TypographyProps) => {
  return <Text style={[styles[variant], styles[color], style]} {...props} />;
};

const styles = StyleSheet.create({
  ...TEXT_STYLES,
  primary: {
    color: COLORS["white"],
  },
  secondary: {
    color: COLORS["text-secondary"],
  },
  muted: {
    color: COLORS["text-muted"],
  },
  slate: {
    color: COLORS["slate"],
  },
  error: {
    color: COLORS["state-error"],
  },
});
