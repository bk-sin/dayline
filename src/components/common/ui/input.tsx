import { TextInput, View, TextInputProps } from "react-native";
import { Typography } from "./typography";
import { COLORS } from "@/theme";
import { cn } from "@/utils/cn";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <View className="mb-m w-full">
      {label && (
        <Typography variant="label" className="mb-xs ml-xs">
          {label}
        </Typography>
      )}

      <TextInput
        className={cn(
          "bg-ui-inputBackground border border-border rounded-m px-m py-s text-text-primary font-main text-md h-12",
          error && "border-red-500", // Borde rojo si hay error
          className,
        )}
        placeholderTextColor={COLORS.text.muted} // Usamos tu color del tema
        {...props}
      />

      {error && (
        <Typography variant="caption" color="error" className="mt-xs ml-xs">
          {error}
        </Typography>
      )}
    </View>
  );
};
