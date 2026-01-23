import type { Preview } from "@storybook/react-native";
import { View } from "react-native";
import { COLORS } from "../src/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: COLORS.background, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
