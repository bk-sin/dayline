import { StyleSheet, TextInput, View } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";
import { ToggleSwitch, Typography } from "./ui";
import { Card } from "./card";
import { COLORS, SPACING, TEXT_STYLES } from "@/theme";

interface LogItemProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  toggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  input?: boolean;
  inputValue?: string;
  inputChange?: (text: string) => void;
}

export const LogItem = ({
  icon,
  title,
  subtitle,
  toggle,
  toggleValue,
  onToggleChange,
  input,
  inputValue,
  inputChange,
}: LogItemProps) => (
  <Card style={styles.container} icon={icon}>
    <View>
      <Typography variant="titleMedium" color="primary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="caption" color="muted">
          {subtitle}
        </Typography>
      )}
    </View>
    {toggle && toggleValue !== undefined && onToggleChange && (
      <View style={{ marginLeft: "auto" }}>
        <ToggleSwitch value={toggleValue} onValueChange={onToggleChange} />
      </View>
    )}
    {input && inputValue !== undefined && inputChange && (
      <View style={styles.weightInputContainer}>
        <TextInput
          style={styles.weightInput}
          placeholder="00.0"
          placeholderTextColor={COLORS["text-muted"]}
          keyboardType="decimal-pad"
          value={inputValue}
          onChangeText={inputChange}
        />
        <Typography variant="caption" color="muted">
          kg
        </Typography>
      </View>
    )}
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  weightInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.base,
    marginLeft: "auto",
  },
  weightInput: {
    ...TEXT_STYLES.titleMedium,
    color: "#FFF",
    textAlign: "right",
    width: 60,
    padding: 0,
  },
});
