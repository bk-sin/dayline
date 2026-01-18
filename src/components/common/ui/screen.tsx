import React from "react";
import {
  View,
  ScrollView,
  type ViewProps,
  type ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface ScreenProps extends ViewProps {
  /**
   * Si true, el contenido será scrolleable
   * @default false
   */
  scroll?: boolean;
  /**
   * Si true, usa SafeAreaView para respetar áreas seguras (notch, barra de estado, etc.)
   * @default true
   */
  safe?: boolean;
  /**
   * Si true, aplica padding horizontal predeterminado
   * @default true
   */
  withPadding?: boolean;
  /**
   * Props adicionales para el ScrollView (solo si scroll=true)
   */
  scrollViewProps?: Omit<ScrollViewProps, "children">;
  /**
   * Si true, ajusta el contenido cuando aparece el teclado
   * @default true en iOS, false en Android
   */
  keyboardAvoiding?: boolean;
  /**
   * Contenido del screen
   */
  children: React.ReactNode;
}

/**
 * Componente base para envolver todas las pantallas de la app.
 *
 * Características:
 * - Maneja SafeAreaView automáticamente
 * - Soporte para scroll opcional
 * - KeyboardAvoidingView en iOS
 * - Padding horizontal configurable
 * - Usa el tema de Tailwind/NativeWind
 *
 * @example
 * ```tsx
 * <Screen>
 *   <Text>Contenido sin scroll</Text>
 * </Screen>
 *
 * <Screen scroll>
 *   <Text>Contenido con scroll</Text>
 * </Screen>
 *
 * <Screen withPadding={false} scroll>
 *   <Text>Sin padding, con scroll</Text>
 * </Screen>
 * ```
 */
export function Screen({
  children,
  scroll = false,
  safe = true,
  withPadding = true,
  scrollViewProps,
  keyboardAvoiding = Platform.OS === "ios",
  className,
  style,
  ...viewProps
}: ScreenProps) {
  // Clases base: fondo + flex
  const baseClasses = "flex-1 bg-background";
  const paddingClasses = withPadding ? "px-l" : "";
  const combinedClasses =
    `${baseClasses} ${paddingClasses} ${className || ""}`.trim();

  // Contenedor interno (con o sin scroll)
  const ContentContainer = scroll ? ScrollView : View;
  const contentProps = scroll
    ? {
        contentContainerStyle: { flexGrow: 1 },
        showsVerticalScrollIndicator: false,
        ...scrollViewProps,
      }
    : { className: "flex-1" };

  // Contenido base
  const content = (
    <ContentContainer {...contentProps}>{children}</ContentContainer>
  );

  // Wrapper con KeyboardAvoidingView si está habilitado
  const keyboardAvoidedContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      {content}
    </KeyboardAvoidingView>
  ) : (
    content
  );

  // Wrapper con SafeAreaView si está habilitado
  if (safe) {
    return (
      <SafeAreaView
        className={combinedClasses}
        style={style}
        edges={["top", "left", "right"]}
        {...viewProps}
      >
        {keyboardAvoidedContent}
      </SafeAreaView>
    );
  }

  // Sin SafeAreaView
  return (
    <View className={combinedClasses} style={style} {...viewProps}>
      {keyboardAvoidedContent}
    </View>
  );
}
