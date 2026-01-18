import { cn } from "@/utils/cn";
import { Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {
  variant?: "header" | "title" | "body" | "caption" | "label";
  color?: "primary" | "muted" | "inverse" | "error";
  className?: string; // Para estilos extra
}

export const Typography = ({
  variant = "body",
  color = "primary",
  className,
  style,
  ...props
}: TypographyProps) => {
  // Mapeo de variantes a tus clases de Tailwind
  const baseStyles = "font-main"; // Tu fuente Manrope base

  const variants = {
    header: "text-xxl font-bold",
    title: "text-lg font-medium",
    body: "text-md font-regular",
    label: "text-sm font-medium",
    caption: "text-xs font-bold uppercase tracking-wider",
  };

  const colors = {
    primary: "text-text-primary",
    muted: "text-text-muted",
    inverse: "text-text-inverse",
    error: "text-red-500",
  };

  return (
    <Text
      className={cn(baseStyles, variants[variant], colors[color], className)}
      style={style}
      {...props} // Pasamos props nativas (ej: numberOfLines)
    />
  );
};
