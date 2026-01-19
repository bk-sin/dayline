import { View, StyleSheet } from "react-native";
import { Screen, Typography } from "@/components/common/ui";

export default function SettingsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Typography variant="titleLarge" color="primary">
          Settings
        </Typography>
        <Typography variant="body" color="muted" style={styles.subtitle}>
          App settings and preferences
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
