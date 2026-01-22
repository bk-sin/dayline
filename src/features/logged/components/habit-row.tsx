import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography } from "@/components/common/ui";
import { COLORS } from "@/theme";

export type HabitRowProps = {
  title: string;
  value: string;
  right?: React.ReactNode;
};

const HabitRow = ({ title, value, right }: HabitRowProps) => {
  return (
    <View style={styles.habitCard}>
      <View>
        <Typography variant="label" style={styles.habitLabel}>
          {title}
        </Typography>
        <Typography variant="titleMedium" style={styles.habitValue}>
          {value}
        </Typography>
      </View>
      {right}
    </View>
  );
};

const styles = StyleSheet.create({
  habitCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  habitLabel: {
    color: COLORS["text-secondary"],
    textTransform: "uppercase",
    marginBottom: 4,
  },
  habitValue: {
    color: COLORS["text-primary"],
  },
});

export default HabitRow;
