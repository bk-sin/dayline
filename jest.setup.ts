/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-native/extend-expect";

// Mock react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const _React = require("react");
  const { View, Text } = require("react-native");

  const Animated = {
    View,
    Text,
    ScrollView: View,
    Image: View,
    createAnimatedComponent: (component: any) => component,
  };

  return {
    default: Animated,
    ...Animated,
    useSharedValue: (value: any) => ({ value }),
    useAnimatedStyle: (callback: () => any) => callback(),
    withTiming: (value: any) => value,
    withSpring: (value: any) => value,
    withDecay: (value: any) => value,
    withRepeat: (value: any) => value,
    withSequence: (...values: any[]) => values[0],
    interpolateColor: (value: any, inputRange: any[], outputRange: string[]) =>
      outputRange[0],
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
    SlideInUp: { duration: () => ({}) },
    SlideOutUp: { duration: () => ({}) },
  };
});

// Mock lucide-react-native
jest.mock("lucide-react-native", () => {
  const React = require("react");
  const { View } = require("react-native");

  return new Proxy(
    {},
    {
      get: (target, prop) => {
        return React.forwardRef((props: any, ref: any) =>
          React.createElement(View, {
            ...props,
            ref,
            testID: `icon-${String(prop)}`,
          }),
        );
      },
    },
  );
});
