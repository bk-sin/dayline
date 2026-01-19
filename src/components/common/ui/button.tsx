import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
  StyleSheet,
} from "react-native";
import { Typography } from "./typography";
import { COLORS, RADIUS, SPACING } from "@/theme";

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
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.background,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    marginRight: SPACING.base,
  },
});
