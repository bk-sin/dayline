import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Dumbbell,
  Terminal,
  GlassWater,
  Utensils,
  Scale,
} from "lucide-react-native";
import { LogItem } from "@/components/common";
import { Button, Screen } from "@/components/common/ui";

export default function TodayLog() {
  const [form, setForm] = useState({
    exercise: false,
    sideProject: true,
    alcohol: false,
    healthyFood: true,
    weight: "",
  });

  return (
    <Screen
      scroll
      headerTitle="Today's Log"
      headerSubtitle="Record your stats for today"
      headerOverline="TODAY, OCT 24"
    >
      <View style={styles.scrollContent}>
        <LogItem
          icon={Dumbbell}
          title="Exercise"
          toggle
          toggleValue={form.exercise}
          onToggleChange={(val) => setForm({ ...form, exercise: val })}
        />

        <LogItem
          icon={Terminal}
          title="Side Project"
          toggle
          toggleValue={form.sideProject}
          onToggleChange={(val) => setForm({ ...form, sideProject: val })}
        />

        <LogItem
          icon={GlassWater}
          title="Alcohol"
          subtitle="Did you drink yesterday?"
          toggle
          toggleValue={form.alcohol}
          onToggleChange={(val) => setForm({ ...form, alcohol: val })}
        />

        <LogItem
          icon={Utensils}
          title="Healthy Food"
          toggle
          toggleValue={form.healthyFood}
          onToggleChange={(val) => setForm({ ...form, healthyFood: val })}
        />

        <LogItem
          icon={Scale}
          title="Weight"
          subtitle="Avg 7d: 83.1 kg"
          input
          inputChange={(val) => setForm({ ...form, weight: val })}
          inputValue={form.weight}
        />

        <Button title="Save Yesterday" style={styles.saveButton} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    gap: 12,
    paddingBottom: 40,
  },
  saveButton: {
    marginTop: 20,
  },
});
