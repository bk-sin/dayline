import { TrendingDown } from "lucide-react-native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Typography, Button, Screen } from "@/components/common/ui";
import { COLORS } from "@/theme";
import { HabitRow, StreakDots } from "../components";

const LoggedHome = () => {
  return (
    <Screen
      scroll
      headerTitle="Yesterday, Oct 24 - Logged"
      headerSubtitle="Daily Summary & Trends"
      headerOverline="YESTERDAY"
    >
      <View style={styles.container}>
        <View style={styles.performanceCard}>
          <View style={styles.performanceLeft}>
            <TrendingDown size={18} color={COLORS["accent-success"]} />
            <Typography
              variant="titleLarge"
              style={styles.performancePercentage}
            >
              62%
            </Typography>
          </View>
          <View style={styles.divider} />
          <Typography variant="body" style={styles.performanceText}>
            Performance was{" "}
            <Typography variant="body" style={styles.textBoldWhite}>
              62% better
            </Typography>{" "}
            than your 30-day objective trend.
          </Typography>
        </View>

        <View style={styles.sectionContainer}>
          <Typography variant="caption" style={styles.sectionTitle}>
            HABIT STREAKS
          </Typography>

          <HabitRow
            title="Exercise"
            value="3 day streak"
            right={<StreakDots activeCount={3} />}
          />
          <HabitRow
            title="Side Project"
            value="5 day streak"
            right={<StreakDots activeCount={5} />}
          />
          <HabitRow
            title="No Alcohol"
            value="12 day streak"
            right={
              <View style={styles.badge}>
                <Typography variant="body" style={styles.badgeText}>
                  +12
                </Typography>
              </View>
            }
          />
          <HabitRow
            title="Healthy Food"
            value="8 day streak"
            right={<StreakDots activeCount={5} />}
          />
          <HabitRow
            title="Weight Tracking"
            value="82.4 kg"
            right={
              <View style={styles.trendContainer}>
                <TrendingDown size={14} color={COLORS["text-secondary"]} />
                <Typography variant="caption" style={styles.trendText}>
                  -0.2 kg vs avg
                </Typography>
              </View>
            }
          />
        </View>

        <TouchableOpacity style={styles.historyButton} activeOpacity={0.8}>
          <Typography variant="label" style={styles.historyButtonText}>
            View Full History
          </Typography>
        </TouchableOpacity>

        <View style={styles.actionsRow}>
          <Button title="Back to Today" variant="ghost" />
          <Button title="Share" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120,
  },
  performanceCard: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 20,
  },
  performanceLeft: {
    alignItems: "center",
    justifyContent: "center",
  },
  performancePercentage: {
    color: COLORS["text-primary"],
    fontWeight: "800",
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: COLORS.border,
  },
  performanceText: {
    flex: 1,
    color: COLORS["text-secondary"],
  },
  textBoldWhite: {
    color: COLORS["text-primary"],
    fontWeight: "700",
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS["text-secondary"],
    letterSpacing: 1.8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: COLORS["nav-bg"],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: COLORS["text-secondary"],
    fontSize: 12,
  },
  trendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  trendText: {
    color: COLORS["text-secondary"],
    fontSize: 12,
  },
  historyButton: {
    width: "100%",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  historyButtonText: {
    color: COLORS["text-secondary"],
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
  },
});

export default LoggedHome;
