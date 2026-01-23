import type { Meta, StoryObj } from "@storybook/react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ToggleSwitch } from "../../src/components/common/ui/toggle-switch";
import { Typography } from "../../src/components/common/ui/typography";

const meta = {
  title: "UI/ToggleSwitch",
  component: ToggleSwitch,
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    value: true,
    onValueChange: () => {},
  },
};

export const Off: Story = {
  args: {
    value: false,
    onValueChange: () => {},
  },
};

const InteractiveComponent = () => {
  const [value, setValue] = useState(false);
  return (
    <View style={styles.interactive}>
      <Typography variant="body">Toggle is {value ? "ON" : "OFF"}</Typography>
      <ToggleSwitch value={value} onValueChange={setValue} />
    </View>
  );
};

export const Interactive = {
  render: () => <InteractiveComponent />,
};

const MultipleComponent = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(true);

  return (
    <View style={styles.allVariants}>
      <View style={styles.row}>
        <Typography variant="body">Exercise</Typography>
        <ToggleSwitch value={toggle1} onValueChange={setToggle1} />
      </View>
      <View style={styles.row}>
        <Typography variant="body">Side Project</Typography>
        <ToggleSwitch value={toggle2} onValueChange={setToggle2} />
      </View>
      <View style={styles.row}>
        <Typography variant="body">Alcohol</Typography>
        <ToggleSwitch value={toggle3} onValueChange={setToggle3} />
      </View>
    </View>
  );
};

export const Multiple = {
  render: () => <MultipleComponent />,
};

const styles = StyleSheet.create({
  decorator: {
    padding: 16,
  },
  interactive: {
    gap: 12,
    alignItems: "center",
  },
  allVariants: {
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
