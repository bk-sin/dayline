import { Lock } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  type ViewStyle,
  View,
} from "react-native";
import { Card } from "@/components/common";
import { Typography } from "@/components/common/ui";
import { useProgressData } from "@/features/progress/hooks";
import type { RangeKey, WeeklyRow } from "@/features/progress/types";
import { COLORS, RADIUS, SPACING } from "@/theme";

function getTrendColor(trend: WeeklyRow["trend"]) {
  // Keep it muted like the design sample (no strong red/green)
  return trend === "=" ? COLORS["text-muted"] : COLORS.slate;
}

function getSegmentLabel(range: RangeKey) {
  switch (range) {
    case "7d":
      return "7 DAYS";
    case "30d":
      return "30 DAYS";
    case "90d":
      return "90 DAYS";
  }
}

function SegmentedControl({
  value,
  onChange,
}: {
  value: RangeKey;
  onChange: (next: RangeKey) => void;
}) {
  const items = useMemo(
    () =>
      [
        { key: "7d" as const, locked: false },
        { key: "30d" as const, locked: true },
        { key: "90d" as const, locked: true },
      ] as const,
    [],
  );

  return (
    <View style={styles.segmentedControl}>
      {items.map((item) => {
        const active = item.key === value;
        const disabled = item.locked;

        return (
          <Pressable
            key={item.key}
            accessibilityRole="button"
            accessibilityState={{ selected: active, disabled }}
            onPress={() => {
              if (!disabled) {
                onChange(item.key);
              }
            }}
            style={({ pressed }) => {
              const pressedStyle: ViewStyle | null =
                pressed && !disabled ? styles.segmentPressed : null;

              return [
                styles.segmentBtn,
                active && styles.segmentBtnActive,
                disabled && styles.segmentBtnDisabled,
                pressedStyle,
              ];
            }}
          >
            <Typography
              variant="caption"
              color={active ? "primary" : "muted"}
              style={active ? styles.segmentTextActive : styles.segmentText}
            >
              {getSegmentLabel(item.key)}
            </Typography>
            {disabled ? (
              <Lock
                size={12}
                color={COLORS["text-muted"]}
                style={styles.segmentLockIcon}
              />
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
}

export default function ProgressScreen() {
  const [range, setRange] = useState<RangeKey>("7d");
  const { weeklyData } = useProgressData();

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Typography variant="titleLarge" color="primary" style={styles.title}>
            Progress
          </Typography>

          <SegmentedControl value={range} onChange={setRange} />

          <View style={styles.insightCard}>
            <Typography
              variant="body"
              color="secondary"
              style={styles.insightText}
            >
              This week ranked better than{" "}
              <Typography
                variant="body"
                color="primary"
                style={styles.boldInline}
              >
                62%
              </Typography>{" "}
              of your last 30 days.
            </Typography>
          </View>
        </View>

        <Typography variant="caption" color="muted" style={styles.sectionTitle}>
          DAILY LOG (7D)
        </Typography>

        <View style={styles.listContainer}>
          {weeklyData.map((item, index) => (
            <View
              key={`${item.day}-${index}`}
              style={[styles.listItem, index > 0 && styles.borderTop]}
            >
              <Typography
                variant="body"
                color="secondary"
                style={styles.dayText}
              >
                {item.day}
              </Typography>

              <View style={styles.rightContent}>
                <Typography
                  variant="body"
                  color="primary"
                  style={styles.weightText}
                >
                  {item.weight}
                </Typography>
                <Typography
                  variant="body"
                  color="muted"
                  style={[
                    styles.trendSymbol,
                    { color: getTrendColor(item.trend) },
                  ]}
                >
                  {item.trend}
                </Typography>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.streaksSection}>
          <Typography
            variant="caption"
            color="muted"
            style={styles.sectionTitle}
          >
            CURRENT STREAKS
          </Typography>
          <View style={styles.streakList}>
            <Typography
              variant="body"
              color="secondary"
              style={styles.streakText}
            >
              Daily weigh-in: 12 days
            </Typography>
            <Typography
              variant="body"
              color="secondary"
              style={styles.streakText}
            >
              Training consistency: 4 days
            </Typography>
          </View>
        </View>

        {/* Spacer so the scroll can breathe above the tab bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {range !== "7d" ? (
        <View style={styles.lockedHintWrap}>
          <Card active>
            <Typography variant="body" color="secondary">
              30/90 day views are locked for now.
            </Typography>
          </Card>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.l,
  },
  header: {
    gap: SPACING.l,
    paddingBottom: SPACING.l,
  },
  title: {
    letterSpacing: -0.5,
  },

  segmentedControl: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.base + 4,
    padding: SPACING.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  segmentBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: RADIUS.base,
  },
  segmentBtnActive: {
    backgroundColor: COLORS["toggle-off"],
  },
  segmentBtnDisabled: {
    opacity: 0.9,
  },
  segmentPressed: {
    opacity: 0.85,
  },
  segmentText: {
    letterSpacing: 1.2,
  },
  segmentTextActive: {
    letterSpacing: 1.2,
  },
  segmentLockIcon: {
    marginLeft: SPACING.xs,
  },

  insightCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.base + 4,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.l,
  },
  insightText: {
    lineHeight: 20,
  },
  boldInline: {
    fontWeight: "700",
  },

  sectionTitle: {
    letterSpacing: 2,
    marginBottom: SPACING.md,
    marginLeft: SPACING.xs,
  },

  listContainer: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.base + 4,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  dayText: {
    opacity: 0.95,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.l,
  },
  weightText: {
    fontWeight: "700",
  },
  trendSymbol: {
    width: 14,
    textAlign: "center",
    fontWeight: "700",
  },

  streaksSection: {
    marginTop: SPACING.xxl,
    paddingHorizontal: SPACING.xs,
  },
  streakList: {
    gap: SPACING.base,
  },
  streakText: {
    opacity: 0.95,
  },

  bottomSpacer: {
    height: SPACING.xxl,
  },
  lockedHintWrap: {
    position: "absolute",
    left: SPACING.xl,
    right: SPACING.xl,
    bottom: SPACING.l,
  },
});
