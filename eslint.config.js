// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", ".github/**"],
  },
  {
    plugins: {
      boundaries: require("eslint-plugin-boundaries"),
      "react-native": require("eslint-plugin-react-native"),
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "app/**" },
        { type: "feature", pattern: "src/features/*/**" },
        { type: "common", pattern: "src/components/common/**" },
        { type: "theme", pattern: "src/theme/**" },
      ],
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            // app puede consumir todo
            { from: "app", allow: ["feature", "common", "theme"] },

            // features pueden consumir otras features, common y theme
            { from: "feature", allow: ["feature", "common", "theme"] },
            { from: "feature", disallow: ["app"] },

            // common es puro (solo common y theme)
            { from: "common", allow: ["common", "theme"] },

            // theme no depende de nada
            { from: "theme", allow: [] },
          ],
        },
      ],
      // Orden claro y consistente
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
          ],
          pathGroups: [{ pattern: "@/**", group: "internal" }],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // React Native anti-patterns
      "react-native/no-inline-styles": "error",
      "react-native/no-color-literals": "error",
      "react-native/no-raw-text": "off", // Deshabilitado: Typography ya maneja esto
      "react-native/split-platform-components": "warn",
      "react-native/no-unused-styles": "error", // Error: todos los estilos deben usarse (usar eslint-disable para dynamic styles)

      // 4️⃣ No restricted imports - enforce "What to Avoid" rules
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-native",
              importNames: ["Text"],
              message:
                "Usá <Typography /> de @/components/common/ui, no Text directo",
            },
            {
              name: "expo/vector-icons",
              message: "Usá lucide-react-native para todos los iconos",
            },
            {
              name: "@expo/vector-icons",
              message: "Usá lucide-react-native para todos los iconos",
            },
          ],
        },
      ],

      // 5️⃣ React Hooks rules (indispensable con Zustand + React Query)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 6️⃣ Unused imports cleanup
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // 7️⃣ Barrel exports obligatorios (importar desde index, no archivos internos)
      "import/no-internal-modules": [
        "error",
        {
          allow: [
            "react-native/**", // Permitir react-native internals
            "expo-router/**", // Permitir expo-router internals
            "expo/metro-config", // Permitir metro config
            "lucide-react-native/**", // Permitir lucide internals
            "@/theme/**", // Permitir theme internals (colors, typography, layout)
            "@/components/common/ui/**", // Permitir UI components directos (Typography, Button, etc)
            "@/components/common/*", // Permitir common components internals (card, log-item, header)
            "@/features/*", // Permitir feature barrels principales (@/features/logged)
            "@/features/*/screens/**", // Permitir screens dentro de features
            "@/features/*/components/**", // Permitir components dentro de features
            "@/features/*/hooks/**", // Permitir hooks dentro de features
            "@/features/*/services/**", // Permitir services dentro de features
            "@/features/*/types/**", // Permitir types dentro de features
            "@/features/*/utils/**", // Permitir utils dentro de features
            "**/ui/*", // Permitir imports de ui/ folders (barrels internos)
            "**/components/*", // Permitir imports de components/ folders
            "**/screens/*", // Permitir imports de screens/ folders
          ],
        },
      ],
    },
  },
  // Override para Typography: permitir Text de react-native
  {
    files: ["src/components/common/ui/typography.tsx"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  // Override para archivos de configuración: permitir imports internos
  {
    files: ["*.config.js", "*.config.ts", "eslint.config.js", "jest.setup.ts"],
    rules: {
      "import/no-internal-modules": "off",
    },
  },
  // Override para Storybook stories: permitir imports internos
  {
    files: [".rnstorybook/**/*.tsx", ".rnstorybook/**/*.ts"],
    rules: {
      "import/no-internal-modules": "off",
      "react-native/no-inline-styles": "off",
    },
  },
  // Override para archivos de test: permitir imports internos y barrel imports
  {
    files: [
      "**/__tests__/**/*.tsx",
      "**/__tests__/**/*.ts",
      "**/*.test.tsx",
      "**/*.test.ts",
    ],
    rules: {
      "import/no-internal-modules": "off",
    },
  },
]);
