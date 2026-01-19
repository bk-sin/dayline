import { COLORS, RADIUS, SPACING, TEXT_STYLES } from "@/theme";
import { StyleSheet, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
  useSharedValue,
} from "react-native-reanimated";
import { useEffect } from "react";

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const ToggleSwitch = ({ value, onValueChange }: ToggleSwitchProps) => {
  const progress = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(value ? 1 : 0, {
      damping: 8,
      stiffness: 450,
      mass: 0.2,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handlePress = () => {
    onValueChange(!value);
  };

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ["#1f2226", COLORS.primary],
    );

    return {
      backgroundColor,
    };
  });

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(progress.value * 28, {
            damping: 10,
            stiffness: 450,
            overshootClamping: true,
          }),
        },
      ],
    };
  });

  const yesLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(progress.value * 0.9, { duration: 67 }),
    };
  });

  const noLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming((1 - progress.value) * 1, { duration: 67 }),
    };
  });

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.toggleBase, containerStyle]}>
        <Animated.Text
          style={[styles.toggleLabel, styles.yesLabel, yesLabelStyle]}
        >
          YES
        </Animated.Text>
        <Animated.View style={[styles.toggleThumb, thumbStyle]} />
        <Animated.Text
          style={[styles.toggleLabel, styles.noLabel, noLabelStyle]}
        >
          NO
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggleBase: {
    width: 64,
    height: 32,
    borderRadius: RADIUS.full,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    position: "relative",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  toggleThumb: {
    width: SPACING.xl,
    height: SPACING.xl,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.full,
    zIndex: 10,
  },
  toggleLabel: {
    position: "absolute",
    color: COLORS.white,
    ...TEXT_STYLES.caption,
    fontSize: 9,
    fontWeight: "900",
  },
  yesLabel: {
    left: SPACING.base,
  },
  noLabel: {
    right: SPACING.base,
    color: COLORS["text-muted"],
  },
});
