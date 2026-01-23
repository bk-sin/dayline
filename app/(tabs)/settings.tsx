import { useRouter } from "expo-router";
import {
  User,
  Sparkles,
  Database,
  Settings as SettingsIcon,
  Bell,
  ChevronRight,
} from "lucide-react-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "@/components/common";
import { Screen, Typography } from "@/components/common/ui";
import { COLORS, SPACING, RADIUS } from "@/theme";

type SettingsItemProps = {
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  subtitle: string;
  isPremium?: boolean;
  onPress?: () => void;
};

const SettingsItem = ({
  icon: Icon,
  title,
  subtitle,
  isPremium = false,
  onPress,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.settingsCard, isPremium && styles.premiumCard]}
    >
      <View style={styles.cardLeft}>
        {/* Icon Container */}
        <View style={[styles.iconBox, isPremium && styles.premiumIconBox]}>
          <Icon
            size={22}
            color={isPremium ? COLORS["accent-blue"] : COLORS["text-muted"]}
          />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Typography variant="titleMedium" color="primary">
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="muted"
            style={styles.subtitleText}
          >
            {subtitle}
          </Typography>
        </View>
      </View>

      {/* Chevron */}
      <ChevronRight size={24} color={COLORS.slate} />
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <Screen
      scroll
      headerTitle="Settings"
      headerSubtitle="Manage your account and app preferences"
      headerOverline="SETTINGS"
    >
      <View style={styles.content}>
        <SettingsItem
          icon={User}
          title="Profile & Account"
          subtitle="Status: Local-only user"
          onPress={() => {}}
        />

        <SettingsItem
          icon={Sparkles}
          title="Premium Insights"
          subtitle="Unlock pro analytics"
          isPremium={true}
          onPress={() => {}}
        />

        <SettingsItem
          icon={Database}
          title="Data & Privacy"
          subtitle="Export or manage your data"
          onPress={() => {}}
        />

        <SettingsItem
          icon={SettingsIcon}
          title="App Preferences"
          subtitle="Units, calendars, and display"
          onPress={() => {}}
        />

        <SettingsItem
          icon={Bell}
          title="Notifications"
          subtitle="Daily reminders & alerts"
          onPress={() => {}}
        />

        {/* Footer Links */}
        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Typography variant="caption" color="muted" style={styles.link}>
                Privacy Policy
              </Typography>
            </TouchableOpacity>
            <View style={styles.dot} />
            <TouchableOpacity>
              <Typography variant="caption" color="muted" style={styles.link}>
                Terms of Service
              </Typography>
            </TouchableOpacity>
          </View>
          <Typography variant="caption" color="slate" style={styles.version}>
            APP VERSION 1.0.4 (24)
          </Typography>
        </View>

        {/* Dev Mode: Storybook Button */}
        {__DEV__ && (
          <Card style={styles.devCard}>
            <Typography variant="caption" color="muted" style={styles.devLabel}>
              DEVELOPER MODE
            </Typography>
            <TouchableOpacity
              onPress={() => router.push("/storybook")}
              style={styles.storybookButton}
            >
              <Typography variant="titleMedium" color="secondary">
                Open Storybook →
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/onboarding")}
              style={styles.storybookButton}
            >
              <Typography variant="titleMedium" color="secondary">
                View Onboarding →
              </Typography>
            </TouchableOpacity>
          </Card>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  settingsCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.l,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.base,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
    flex: 1,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.base,
    backgroundColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    gap: SPACING.xs,
  },
  subtitleText: {
    marginTop: SPACING.xs,
  },
  premiumCard: {
    backgroundColor: COLORS["nav-bg"],
    borderColor: COLORS.primary,
  },
  premiumIconBox: {
    backgroundColor: COLORS.primary,
  },
  footer: {
    marginTop: SPACING.xl,
    paddingTop: SPACING.xxl,
    gap: SPACING.l,
    alignItems: "center",
  },
  footerLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.l,
  },
  link: {
    fontWeight: "600",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS["text-muted"],
    opacity: 0.5,
  },
  version: {
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  devCard: {
    marginTop: SPACING.xl,
    padding: SPACING.l,
    gap: SPACING.md,
    borderColor: COLORS["accent-blue"],
    borderWidth: 1,
  },
  devLabel: {
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  storybookButton: {
    paddingVertical: SPACING.base,
  },
});
