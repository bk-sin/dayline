import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
  StyleSheet,
} from "react-native";
import { COLORS, RADIUS, SPACING } from "@/theme";
import { Typography } from "./typography";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  title,
  variant = "primary",
  isLoading,
  icon,
  disabled,
  style,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        (disabled || isLoading) && styles.disabled,
        style,
      ]}
      disabled={isLoading || disabled}
      activeOpacity={0.8}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Typography variant="titleMedium" color="primary">
            {title}
          </Typography>
        </>
      )}
    </TouchableOpacity>
  );
};

/* eslint-disable react-native/no-unused-styles */
// Los estilos primary/secondary/outline/ghost están usados dinámicamente via styles[variant]
const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.base,
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.md,
  },
  primary: {
    backgroundColor: COLORS.white,
  },
  secondary: {
    backgroundColor: COLORS.slate,
  },
  outline: {
    borderWidth: 1,
    borderColor: COLORS["text-muted"],
    backgroundColor: COLORS.transparent,
  },
  ghost: {
    backgroundColor: COLORS.transparent,
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    marginRight: SPACING.base,
  },
});
