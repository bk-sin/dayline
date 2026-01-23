import {
  Dumbbell,
  Terminal,
  GlassWater,
  Utensils,
  Scale,
} from "lucide-react-native";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { LogItem } from "@/components/common";
import { Button, Screen } from "@/components/common/ui";
import { useDayHistory } from "@/features/day-tracking/hooks/useDayHistory";

export default function TodayLog() {
  const { saveDay } = useDayHistory();
  const [form, setForm] = useState({
    exercise: false,
    sideProject: true,
    alcohol: false,
    healthyFood: true,
    weight: "",
  });

  const handleSaveDay = () => {
    // Validate weight input
    const weightNum = parseFloat(form.weight);
    if (!form.weight || isNaN(weightNum)) {
      Alert.alert("Validation Error", "Please enter a valid weight.");
      return;
    }

    // Get yesterday's date (since button says "Save Yesterday")
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateISO = yesterday.toISOString().split("T")[0];

    // Create entry
    const entry = {
      id: uuidv4(),
      date: dateISO,
      weight: weightNum,
      didWorkout: form.exercise,
      workedOnProject: form.sideProject,
      ateHealthy: form.healthyFood,
      drankAlcohol: form.alcohol,
    };

    // Save to MMKV
    saveDay(entry);

    // Reset form
    setForm({
      exercise: false,
      sideProject: true,
      alcohol: false,
      healthyFood: true,
      weight: "",
    });

    // Show success feedback
    Alert.alert("Success", "Yesterday's data saved!");
  };

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

        <Button
          title="Save Yesterday"
          style={styles.saveButton}
          onPress={handleSaveDay}
        />
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
