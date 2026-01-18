// tailwind.config.js

// 1. Importa tus constantes.
// NOTA: Si tienes problemas importando ES Modules aquí,
// puedes definir los objetos directamente en este archivo o usar require().
import {
  COLORS,
  PALETTE,
  SIZES,
  SPACING,
  RADIUS,
  FONTS,
  WEIGHTS,
  SHADOWS,
} from "./src/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 2. Mapeo de Colores Semánticos
      colors: {
        // Mapeo directo de tu objeto COLORS
        primary: COLORS.primary, // class="bg-primary"
        background: COLORS.background, // class="bg-background"
        card: COLORS.card, // class="bg-card"
        border: COLORS.border, // class="border-border"

        // Colores de texto anidados
        // NativeWind aplanará esto a: text-text-primary, text-text-muted
        text: COLORS.text,

        // UI elements
        ui: COLORS.ui,

        // Paleta completa (opcional para uso directo)
        palette: PALETTE,
      },

      // 3. Tipografía
      fontFamily: {
        main: [FONTS.main], // class="font-main"
        system: [FONTS.fallback],
      },
      fontSize: {
        // class="text-xs", "text-xxl"
        xs: [SIZES.xs, { lineHeight: SIZES.xs * 1.5 }],
        sm: [SIZES.sm, { lineHeight: SIZES.sm * 1.5 }],
        md: [SIZES.md, { lineHeight: SIZES.md * 1.5 }],
        lg: [SIZES.lg, { lineHeight: SIZES.lg * 1.2 }],
        xl: [SIZES.xl, { lineHeight: SIZES.xl * 1.2 }],
        xxl: [SIZES.xxl, { lineHeight: SIZES.xxl * 1.1 }],
      },
      fontWeight: {
        // class="font-regular", "font-bold"
        regular: WEIGHTS.regular,
        medium: WEIGHTS.medium,
        bold: WEIGHTS.bold,
        black: WEIGHTS.black,
      },
      letterSpacing: {
        // class="tracking-wider" para captions
        wider: "1px",
      },

      // 4. Espaciado (Padding, Margin, Gap, Width, Height)
      spacing: {
        // class="p-s", "m-xl", "gap-m"
        xs: SPACING.xs,
        s: SPACING.s,
        m: SPACING.m,
        l: SPACING.l,
        xl: SPACING.xl,
        xxl: SPACING.xxl,
      },

      // 5. Bordes
      borderRadius: {
        // class="rounded-s", "rounded-full"
        s: RADIUS.s,
        m: RADIUS.m,
        l: RADIUS.l,
        full: RADIUS.full,
      },

      // 6. Sombras (para componentes como switch thumb)
      boxShadow: {
        // class="shadow-switch-thumb"
        "switch-thumb": `${SHADOWS.switchThumb.shadowOffset.width}px ${SHADOWS.switchThumb.shadowOffset.height}px ${SHADOWS.switchThumb.shadowRadius}px rgba(0, 0, 0, ${SHADOWS.switchThumb.shadowOpacity})`,
      },
    },
  },
  plugins: [],
};
