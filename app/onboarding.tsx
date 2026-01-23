import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  TrendingUp,
  Dumbbell,
  BookOpen,
  Wine,
  Utensils,
  Scale,
  ChevronLeft,
  ChevronRight,
} from "lucide-react-native";
import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "@/components/common/ui";
import { COLORS, SPACING, RADIUS } from "@/theme";

const { width } = Dimensions.get("window");

const SLIDES = [
  { id: "1", type: "promise" as const },
  { id: "2", type: "mechanics" as const },
  { id: "3", type: "manifesto" as const },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Finalizar onboarding
      router.replace("/(tabs)");
    }
  };

  // Slide 1: The Promise
  const RenderPromise = () => (
    <View style={styles.slideContainer}>
      <View style={styles.contentCenter}>
        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TrendingUp size={32} color={COLORS["accent-success"]} />
            <Typography variant="titleLarge" style={styles.cardBigNumber}>
              62%
            </Typography>
          </View>
          <Typography variant="caption" color="secondary">
            better than 30-day average
          </Typography>

          {/* Progress bars */}
          <View style={styles.progressRow}>
            <View style={[styles.progressBar, styles.progressBarLight]} />
            <View style={[styles.progressBar, styles.progressBarMedium]} />
            <View style={[styles.progressBar, styles.progressBarStrong]} />
            <View style={[styles.progressBar, styles.progressBarFull]} />
          </View>
        </View>

        <Typography variant="titleLarge" style={styles.title}>
          ¿Estás mejorando?
        </Typography>
        <Typography variant="body" color="secondary" style={styles.description}>
          Registra 5 cosas al día. Mira si vas mejor que antes.
        </Typography>
      </View>
    </View>
  );

  // Slide 2: Mechanics
  const RenderMechanics = () => {
    const habits = [
      { icon: Dumbbell, label: "Ejercicio" },
      { icon: BookOpen, label: "Trabajo personal" },
      { icon: Wine, label: "Alcohol" },
      { icon: Utensils, label: "Comida" },
      { icon: Scale, label: "Peso" },
    ];

    return (
      <View style={styles.slideContainer}>
        <View style={styles.headerTop}>
          <Typography variant="titleLarge" style={styles.titleLeft}>
            30 segundos al día
          </Typography>
          <Typography
            variant="body"
            color="muted"
            style={styles.descriptionLeft}
          >
            Cada día marcas: Ejercicio, Trabajo personal, Alcohol, Comida y
            Peso. La app se encarga del resto.
          </Typography>
        </View>

        <View style={styles.listContainer}>
          {habits.map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <item.icon size={28} color={COLORS["text-muted"]} />
              <Typography
                variant="caption"
                color="muted"
                style={styles.listLabel}
              >
                {item.label}
              </Typography>
            </View>
          ))}
        </View>
      </View>
    );
  };

  // Slide 3: Manifesto
  const RenderManifesto = () => (
    <View style={styles.slideContainer}>
      <View style={styles.contentCenter}>
        {/* Abstract Graphic */}
        <View style={styles.graphicContainer}>
          <View style={styles.graphicLineVertical} />
          <ChevronLeft
            size={60}
            color={COLORS["text-secondary"]}
            style={styles.chevronLeft}
          />
          <ChevronRight
            size={60}
            color={COLORS["text-secondary"]}
            style={styles.chevronRight}
          />
        </View>

        <View style={styles.manifestoContent}>
          <Typography variant="titleLarge" style={styles.title}>
            Lo que NO es
          </Typography>
          <Typography variant="body" style={styles.descriptionLg}>
            Esto no es motivación. No es coaching. No es redes.
          </Typography>
          <View style={{ height: SPACING.md }} />
          <Typography variant="body" style={styles.descriptionLg}>
            Es un espejo honesto de tus días.
          </Typography>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: (typeof SLIDES)[0] }) => {
    if (item.type === "promise") return <RenderPromise />;
    if (item.type === "mechanics") return <RenderMechanics />;
    if (item.type === "manifesto") return <RenderManifesto />;
    return null;
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="light" backgroundColor={COLORS.background} />

      {/* Carousel */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        style={styles.flatList}
      />

      {/* Footer (Dots + Button) */}
      <View style={styles.footer}>
        {/* Dots Indicators */}
        <View style={styles.dotsContainer}>
          {SLIDES.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  isActive && styles.dotActive,
                  isActive && index === 2 && styles.dotActiveLarge,
                ]}
              />
            );
          })}
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            currentIndex === 1 ? styles.buttonWhite : styles.buttonBlue,
          ]}
          onPress={handleNext}
          activeOpacity={0.9}
        >
          <Typography
            variant="titleMedium"
            style={[
              styles.buttonText,
              currentIndex === 1 ? styles.textBlack : styles.textWhite,
            ]}
          >
            {currentIndex === 2 ? "Empezar" : "Continuar"}
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatList: {
    flex: 1,
  },
  slideContainer: {
    width: width,
    flex: 1,
    paddingHorizontal: SPACING.xxl,
    justifyContent: "center",
    paddingBottom: 100,
  },
  contentCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: SPACING.md,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 260,
  },
  descriptionLg: {
    textAlign: "center",
    lineHeight: 28,
  },

  // Slide 1 Styles
  card: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.base,
    padding: SPACING.xxl,
    alignItems: "center",
    width: "100%",
    marginBottom: 48,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.base,
    marginBottom: SPACING.base,
  },
  cardBigNumber: {
    fontSize: 40,
    letterSpacing: -1,
  },
  progressRow: {
    flexDirection: "row",
    gap: SPACING.xs,
    marginTop: SPACING.xl,
    width: "100%",
    justifyContent: "center",
  },
  progressBar: {
    height: 4,
    width: 32,
    borderRadius: RADIUS.full,
  },
  progressBarLight: {
    backgroundColor: COLORS["accent-success"],
    opacity: 0.2,
  },
  progressBarMedium: {
    backgroundColor: COLORS["accent-success"],
    opacity: 0.4,
  },
  progressBarStrong: {
    backgroundColor: COLORS["accent-success"],
    opacity: 0.6,
  },
  progressBarFull: {
    backgroundColor: COLORS["accent-success"],
  },

  // Slide 2 Styles
  headerTop: {
    marginBottom: 40,
    marginTop: SPACING.l,
  },
  titleLeft: {
    fontSize: 32,
    marginBottom: SPACING.md,
    lineHeight: 38,
  },
  descriptionLeft: {
    fontSize: 17,
    lineHeight: 26,
  },
  listContainer: {
    gap: SPACING.xxl,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.l,
  },
  listLabel: {
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  // Slide 3 Styles
  graphicContainer: {
    marginBottom: 64,
    opacity: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  graphicLineVertical: {
    width: 1,
    height: 80,
    backgroundColor: COLORS["text-primary"],
    position: "absolute",
  },
  chevronLeft: {
    opacity: 0.3,
    marginRight: -20,
  },
  chevronRight: {
    opacity: 0.3,
    marginLeft: -20,
  },
  manifestoContent: {
    maxWidth: 280,
    alignItems: "center",
  },

  // Footer & Navigation
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.xxl,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: SPACING.xxl,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    backgroundColor: COLORS["accent-blue"],
  },
  dotActiveLarge: {
    width: 16,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: RADIUS.base,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBlue: {
    backgroundColor: COLORS["accent-blue"],
  },
  buttonWhite: {
    backgroundColor: COLORS.white,
  },
  buttonText: {
    fontSize: 18,
  },
  textWhite: {
    color: COLORS["text-primary"],
  },
  textBlack: {
    color: COLORS.background,
  },
});
