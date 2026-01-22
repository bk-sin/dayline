import { History } from "lucide-react-native";
import React from "react";
import {
  View,
  ScrollView,
  type ViewProps,
  type ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING } from "@/theme";
import { Header } from "../header";

export interface ScreenProps extends ViewProps {
  scroll?: boolean;
  safe?: boolean;
  withPadding?: boolean;
  scrollViewProps?: Omit<ScrollViewProps, "children">;
  keyboardAvoiding?: boolean;
  children: React.ReactNode;
  headerTitle: string;
  headerSubtitle: string;
  headerOverline?: string;
}

export function Screen({
  children,
  scroll = false,
  safe = true,
  withPadding = true,
  scrollViewProps,
  keyboardAvoiding = Platform.OS === "ios",
  style,
  headerTitle = "",
  headerSubtitle = "",
  headerOverline = "",
  ...viewProps
}: ScreenProps) {
  const ContentContainer = scroll ? ScrollView : View;
  const contentProps = scroll
    ? {
        contentContainerStyle: styles.scrollContent,
        showsVerticalScrollIndicator: false,
        ...scrollViewProps,
      }
    : { style: styles.flex };

  const content = (
    <ContentContainer {...contentProps}>{children}</ContentContainer>
  );

  const keyboardAvoidedContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.flex}
    >
      {content}
    </KeyboardAvoidingView>
  ) : (
    content
  );

  const containerStyle = [
    styles.container,
    withPadding && styles.withPadding,
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView
        style={containerStyle}
        edges={["top", "left", "right"]}
        {...viewProps}
      >
        <Header
          overline={headerOverline}
          title={headerTitle}
          subtitle={headerSubtitle}
          icon={History}
        />
        {keyboardAvoidedContent}
      </SafeAreaView>
    );
  }

  return (
    <View style={containerStyle} {...viewProps}>
      <Header
        overline={headerOverline}
        title={headerTitle}
        subtitle={headerSubtitle}
        icon={History}
      />
      {keyboardAvoidedContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  withPadding: {
    paddingHorizontal: SPACING.xl,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
