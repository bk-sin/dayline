import { COLORS, SPACING } from "@/theme";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Circle, Settings, TrendingUp } from "lucide-react-native";
import { Typography } from "@/components/common/ui";
import { View, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={COLORS.background} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS["text-primary"],
          tabBarInactiveTintColor: COLORS["text-muted"],
          tabBarShowLabel: false,
          sceneStyle: { backgroundColor: COLORS.background },
          tabBarIconStyle: {
            padding: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.tabItem}>
                <Circle
                  size={22}
                  color={color}
                  fill={focused ? color : "transparent"}
                />
                <Typography variant="caption" style={{ color }}>
                  TODAY
                </Typography>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="progress"
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.tabItem}>
                <TrendingUp size={22} color={color} />
                <Typography variant="caption" style={{ color }}>
                  PROGRESS
                </Typography>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.tabItem}>
                <Settings size={22} color={color} />
                <Typography variant="caption" style={{ color }}>
                  SETTINGS
                </Typography>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: SPACING.l,
    height: 90,
  },
  tabItem: {
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: SPACING.xs,
    width: 80,
    padding: 0,
  },
});
