import { cn } from "@/utils/cn";
import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Typography } from "./typography";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  icon?: React.ReactNode; // Para pasar íconos SVG opcionalmente
}

export const Button = ({
  title,
  variant = "primary",
  isLoading,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = "flex-row items-center justify-center rounded-l px-l py-m";

  const variants = {
    primary: "bg-primary",
    secondary: "bg-card",
    outline: "bg-transparent border border-border",
    ghost: "bg-transparent",
  };

  // Lógica para el color del texto según el botón
  const getTextColor = () => {
    if (variant === "primary") return "inverse"; // Texto blanco sobre fondo oscuro
    if (variant === "outline") return "primary";
    return "primary";
  };

  return (
    <TouchableOpacity
      className={cn(
        baseStyles,
        variants[variant],
        (isLoading || disabled) && "opacity-50", // Estilo visual si está deshabilitado
        className,
      )}
      disabled={isLoading || disabled}
      activeOpacity={0.8}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          {icon && <View className="mr-s">{icon}</View>}
          <Typography
            variant="label"
            color={getTextColor()}
            className="font-bold text-center"
          >
            {title}
          </Typography>
        </>
      )}
    </TouchableOpacity>
  );
};
