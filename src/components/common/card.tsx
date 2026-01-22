import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { COLORS, RADIUS, SPACING } from "@/theme";

interface CardProps extends ViewProps {
  children: ReactNode;
  active?: boolean;
  icon?: LucideIcon;
}

export const Card = ({
  children,
  style,
  active,
  icon: Icon,
  ...props
}: CardProps) => (
  <View style={[styles.card, active && styles.active, style]} {...props}>
    {Icon && (
      <View style={styles.iconContainer}>
        <Icon size={20} color="#94a3b8" />
      </View>
    )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.l,
    borderRadius: RADIUS.base,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  active: {
    outlineColor: COLORS["accent-blue"],
    outlineWidth: 2,
  },
  iconContainer: {
    width: SPACING.xxl,
    height: SPACING.xxl,
    backgroundColor: COLORS["nav-bg"],
    borderRadius: RADIUS.base,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
});
