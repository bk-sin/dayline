import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "@/theme";

export type StreakDotsProps = {
  activeCount?: number;
  total?: number;
};

const StreakDots = ({ activeCount = 0, total = 5 }: StreakDotsProps) => {
  return (
    <View style={styles.streakContainer}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.streakDot,
            {
              backgroundColor:
                i < activeCount ? COLORS["text-primary"] : COLORS.slate,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  streakContainer: {
    flexDirection: "row",
    gap: 6,
  },
  streakDot: {
    width: 12,
    height: 4,
    borderRadius: 99,
  },
});

export default StreakDots;
