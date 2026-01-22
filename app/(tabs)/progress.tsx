import { View, StyleSheet } from "react-native";
import { Screen, Typography } from "@/components/common/ui";

export default function ProgressScreen() {
  return (
    <Screen headerTitle="Progress" headerSubtitle="">
      <View style={styles.container}>
        <Typography variant="titleLarge" color="primary">
          Progress
        </Typography>
        <Typography variant="body" color="muted" style={styles.subtitle}>
          Your stats and charts will appear here
        </Typography>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  subtitle: {
    textAlign: "center",
  },
});
