import type { Meta, StoryObj } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";
import { Input } from "../../src/components/common/ui/input";

const meta = {
  title: "UI/Input",
  component: Input,
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    error: "Password is required",
  },
};

export const AllStates = {
  render: () => (
    <View style={styles.allVariants}>
      <Input placeholder="Default input" />
      <Input label="With Label" placeholder="Enter text" />
      <Input
        label="With Error"
        placeholder="Enter text"
        error="This field is required"
      />
      <Input label="Email" placeholder="email@example.com" />
      <Input label="Password" placeholder="••••••••" secureTextEntry />
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    padding: 16,
  },
  allVariants: {
    gap: 16,
  },
});
