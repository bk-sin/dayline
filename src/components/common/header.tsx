import { StyleSheet, View } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { Typography } from "./ui";
import { COLORS, SPACING } from "@/theme";

interface HeaderProps {
  overline: string;
  title: string;
  subtitle: string;
  icon?: LucideIcon;
}

export const Header = ({
  overline,
  title,
  subtitle,
  icon: Icon,
}: HeaderProps) => (
  <View style={styles.header}>
    <View>
      {overline ? (
        <Typography variant="caption" color="slate">
          {overline.toUpperCase()}
        </Typography>
      ) : null}
      {title ? (
        <Typography variant="titleLarge" color="primary">
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography variant="caption" color="slate">
          {subtitle}
        </Typography>
      ) : null}
    </View>
    {Icon && <Icon color={COLORS["slate"]} size={28} />}
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
