import type { Meta, StoryObj } from "@storybook/react-native";
import { Home } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Button } from "../../src/components/common/ui/button";
import { COLORS, SPACING } from "../../src/theme";

const meta = {
  title: "UI/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    title: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost Button",
    variant: "ghost",
  },
};

export const WithIcon = {
  render: () => (
    <Button
      title="With Icon"
      variant="primary"
      icon={<Home size={20} color={COLORS.background} />}
    />
  ),
};

export const Loading: Story = {
  args: {
    title: "Loading...",
    variant: "primary",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    variant: "primary",
    disabled: true,
  },
};

export const AllVariants = {
  render: () => (
    <View style={styles.allVariants}>
      <Button title="Primary" variant="primary" />
      <Button title="Secondary" variant="secondary" />
      <Button title="Outline" variant="outline" />
      <Button title="Ghost" variant="ghost" />
      <Button
        title="With Icon"
        variant="primary"
        icon={<Home size={20} color={COLORS.background} />}
      />
      <Button title="Loading" variant="primary" isLoading />
      <Button title="Disabled" variant="primary" disabled />
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    padding: SPACING.md,
    gap: SPACING.md,
  },
  allVariants: {
    gap: SPACING.md,
  },
});
