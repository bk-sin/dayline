import type { Meta, StoryObj } from "@storybook/react-native";
import { Dumbbell, Code, Beer } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Card } from "../../src/components/common/card";
import { Typography } from "../../src/components/common/ui/typography";

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Typography variant="body">Card content</Typography>,
  },
};

export const WithIcon: Story = {
  args: {
    icon: Dumbbell,
    children: (
      <View>
        <Typography variant="titleMedium">Exercise</Typography>
        <Typography variant="caption" color="muted">
          Daily workout
        </Typography>
      </View>
    ),
  },
};

export const Active: Story = {
  args: {
    active: true,
    icon: Code,
    children: (
      <View>
        <Typography variant="titleMedium">Side Project</Typography>
        <Typography variant="caption" color="muted">
          Working on code
        </Typography>
      </View>
    ),
  },
};

export const MultipleCards = {
  render: () => (
    <View style={styles.allVariants}>
      <Card icon={Dumbbell}>
        <View>
          <Typography variant="titleMedium">Exercise</Typography>
          <Typography variant="caption" color="muted">
            Did you work out today?
          </Typography>
        </View>
      </Card>

      <Card icon={Code} active>
        <View>
          <Typography variant="titleMedium">Side Project</Typography>
          <Typography variant="caption" color="muted">
            Active card with outline
          </Typography>
        </View>
      </Card>

      <Card icon={Beer}>
        <View>
          <Typography variant="titleMedium">Alcohol</Typography>
          <Typography variant="caption" color="muted">
            Track your drinking habits
          </Typography>
        </View>
      </Card>

      <Card>
        <View>
          <Typography variant="titleMedium">No Icon Card</Typography>
          <Typography variant="caption" color="muted">
            Simple card without icon
          </Typography>
        </View>
      </Card>
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
