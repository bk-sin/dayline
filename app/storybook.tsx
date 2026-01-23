import { View, StyleSheet } from "react-native";
import { COLORS } from "@/theme";
import StorybookUIRoot from "../.rnstorybook";

// Wrapper para evitar errores de contexto de Expo Router dentro de Storybook
export default function StorybookScreen() {
  return (
    <View style={styles.container}>
      <StorybookUIRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
