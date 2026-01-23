import type { Meta, StoryObj } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";
import { Typography } from "../../src/components/common/ui/typography";

const meta = {
  title: "UI/Typography",
  component: Typography,
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
      options: ["titleLarge", "titleMedium", "body", "caption", "label"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "muted", "error", "slate"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    children: "Title Large",
    variant: "titleLarge",
  },
};

export const TitleMedium: Story = {
  args: {
    children: "Title Medium",
    variant: "titleMedium",
  },
};

export const Body: Story = {
  args: {
    children: "Body text - Lorem ipsum dolor sit amet",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "CAPTION TEXT",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "Label Text",
    variant: "label",
  },
};

export const ColorSecondary: Story = {
  args: {
    children: "Secondary color",
    variant: "body",
    color: "secondary",
  },
};

export const ColorMuted: Story = {
  args: {
    children: "Muted color",
    variant: "body",
    color: "muted",
  },
};

export const ColorError: Story = {
  args: {
    children: "Error color",
    variant: "body",
    color: "error",
  },
};

export const AllVariants = {
  render: () => (
    <View style={styles.allVariants}>
      <Typography variant="titleLarge">Title Large</Typography>
      <Typography variant="titleMedium">Title Medium</Typography>
      <Typography variant="body">Body Text</Typography>
      <Typography variant="caption">CAPTION TEXT</Typography>
      <Typography variant="label">Label Text</Typography>
    </View>
  ),
};

export const AllColors = {
  render: () => (
    <View style={styles.allVariants}>
      <Typography color="primary">Primary (White)</Typography>
      <Typography color="secondary">Secondary</Typography>
      <Typography color="muted">Muted</Typography>
      <Typography color="slate">Slate</Typography>
      <Typography color="error">Error</Typography>
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    padding: 16,
  },
  allVariants: {
    gap: 12,
  },
});
