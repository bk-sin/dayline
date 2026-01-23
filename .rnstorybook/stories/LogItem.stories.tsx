import type { Meta, StoryObj } from "@storybook/react-native";
import { Dumbbell, Code, Beer, Scale } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LogItem } from "../../src/components/common/log-item";

const meta = {
  title: "Components/LogItem",
  component: LogItem,
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof LogItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithToggle: Story = {
  args: {
    icon: Dumbbell,
    title: "Exercise",
    subtitle: "Did you work out today?",
    toggle: true,
    toggleValue: false,
    onToggleChange: () => {},
  },
};

export const WithInput: Story = {
  args: {
    icon: Scale,
    title: "Weight",
    subtitle: "Track your weight",
    input: true,
    inputValue: "",
    inputChange: () => {},
  },
};

const InteractiveToggleComponent = () => {
  const [exercise, setExercise] = useState(false);
  const [sideProject, setSideProject] = useState(true);
  const [alcohol, setAlcohol] = useState(false);

  return (
    <View style={styles.allVariants}>
      <LogItem
        icon={Dumbbell}
        title="Exercise"
        subtitle="Did you work out today?"
        toggle
        toggleValue={exercise}
        onToggleChange={setExercise}
      />

      <LogItem
        icon={Code}
        title="Side Project"
        subtitle="Did you work on your project?"
        toggle
        toggleValue={sideProject}
        onToggleChange={setSideProject}
      />

      <LogItem
        icon={Beer}
        title="Alcohol"
        subtitle="Did you drink today?"
        toggle
        toggleValue={alcohol}
        onToggleChange={setAlcohol}
      />
    </View>
  );
};

export const InteractiveToggle = {
  render: () => <InteractiveToggleComponent />,
};

const InteractiveInputComponent = () => {
  const [weight, setWeight] = useState("82.5");

  return (
    <View style={styles.allVariants}>
      <LogItem
        icon={Scale}
        title="Weight"
        subtitle="Your current weight"
        input
        inputValue={weight}
        inputChange={setWeight}
      />
    </View>
  );
};

export const InteractiveInput = {
  render: () => <InteractiveInputComponent />,
};

const AllTypesComponent = () => {
  const [exercise, setExercise] = useState(true);
  const [weight, setWeight] = useState("82.5");

  return (
    <View style={styles.allVariants}>
      <LogItem
        icon={Dumbbell}
        title="Exercise"
        subtitle="Toggle type"
        toggle
        toggleValue={exercise}
        onToggleChange={setExercise}
      />

      <LogItem
        icon={Scale}
        title="Weight"
        subtitle="Input type"
        input
        inputValue={weight}
        inputChange={setWeight}
      />

      <LogItem
        icon={Code}
        title="Side Project"
        subtitle="Just a card, no interaction"
      />
    </View>
  );
};

export const AllTypes = {
  render: () => <AllTypesComponent />,
};

const styles = StyleSheet.create({
  decorator: {
    padding: 16,
  },
  allVariants: {
    gap: 12,
  },
});
