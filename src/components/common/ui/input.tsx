import { TextInput, View, TextInputProps, StyleSheet } from "react-native";
import { COLORS, RADIUS, SPACING, TEXT_STYLES } from "@/theme";
import { Typography } from "./typography";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, style, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      {label && (
        <Typography variant="label" style={styles.label}>
          {label}
        </Typography>
      )}

      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={COLORS["text-muted"]}
        {...props}
      />

      {error && (
        <Typography variant="caption" color="error" style={styles.errorText}>
          {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.l,
    width: "100%",
  },
  label: {
    marginBottom: SPACING.xs,
    marginLeft: SPACING.xs,
  },
  input: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.base,
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.md,
    color: COLORS["text-primary"],
    ...TEXT_STYLES.titleMedium,
  },
  inputError: {
    borderColor: COLORS["state-error"],
  },
  errorText: {
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs,
  },
});
