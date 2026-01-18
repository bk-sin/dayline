import { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Input } from "@/components/common/ui";
import { Screen } from "@/components/common/ui/screen";
import { Typography } from "@/components/common/ui/typography";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePress = (variant: string) => {
    Alert.alert("Button Pressed", `Pressed ${variant} button`);
  };

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Screen scroll>
      {/* Header */}
      <View className="mb-xl mt-m">
        <Typography variant="header" className="mb-xs">
          Component Showroom
        </Typography>
        <Typography color="muted">
          Todas las variantes de componentes UI
        </Typography>
      </View>

      {/* Typography Section */}
      <View className="mb-xl">
        <Typography variant="title" className="mb-m">
          Typography
        </Typography>

        <View className="gap-m bg-card p-m rounded-l">
          <Typography variant="header">Header - Bold XXL</Typography>
          <Typography variant="title">Title - Medium LG</Typography>
          <Typography variant="body">Body - Regular MD (Default)</Typography>
          <Typography variant="label">Label - Medium SM</Typography>
          <Typography variant="caption">Caption - Bold XS</Typography>

          {/* Colors */}
          <View className="border-t border-border pt-m mt-m">
            <Typography variant="label" className="mb-s">
              Colors:
            </Typography>
            <Typography color="primary">Primary Color</Typography>
            <Typography color="muted">Muted Color</Typography>
            <Typography color="inverse">Inverse Color (White)</Typography>
            <Typography color="error">Error Color (Red)</Typography>
          </View>
        </View>
      </View>

      {/* Button Section */}
      <View className="mb-xl">
        <Typography variant="title" className="mb-m">
          Buttons
        </Typography>

        <View className="gap-m">
          <Button
            title="Primary Button"
            variant="primary"
            onPress={() => handlePress("primary")}
          />

          <Button
            title="Secondary Button"
            variant="secondary"
            onPress={() => handlePress("secondary")}
          />

          <Button
            title="Outline Button"
            variant="outline"
            onPress={() => handlePress("outline")}
          />

          <Button
            title="Ghost Button"
            variant="ghost"
            onPress={() => handlePress("ghost")}
          />

          <Button
            title="Loading Button"
            variant="primary"
            isLoading={loading}
            onPress={simulateLoading}
          />

          <Button
            title="Disabled Button"
            variant="primary"
            disabled
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Input Section */}
      <View className="mb-xl">
        <Typography variant="title" className="mb-m">
          Inputs
        </Typography>

        <View className="gap-m">
          <Input
            placeholder="Basic input"
            value={inputValue}
            onChangeText={setInputValue}
          />

          <Input
            label="Input with label"
            placeholder="Enter your name..."
            value={inputValue}
            onChangeText={setInputValue}
          />

          <Input
            label="Input with error"
            placeholder="example@email.com"
            error="This field is required"
          />

          <Input
            label="Disabled input"
            placeholder="Can't edit this"
            value="Disabled value"
            editable={false}
          />

          <Input
            label="Multiline input"
            placeholder="Enter a long text..."
            multiline
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: "top" }}
          />
        </View>
      </View>

      {/* Screen Variants Info */}
      <View className="mb-xl">
        <Typography variant="title" className="mb-m">
          Screen Component
        </Typography>

        <View className="bg-card p-m rounded-l gap-s">
          <Typography variant="label">Props disponibles:</Typography>
          <Typography color="muted" className="text-xs">
            • scroll: Contenido scrolleable
          </Typography>
          <Typography color="muted" className="text-xs">
            • safe: SafeAreaView automático
          </Typography>
          <Typography color="muted" className="text-xs">
            • withPadding: Padding horizontal (px-l)
          </Typography>
          <Typography color="muted" className="text-xs">
            • keyboardAvoiding: Ajuste para teclado
          </Typography>
        </View>
      </View>

      {/* Color Palette */}
      <View className="mb-xxl">
        <Typography variant="title" className="mb-m">
          Color Palette
        </Typography>

        <View className="gap-s">
          <View className="bg-primary p-m rounded-l">
            <Typography color="inverse">Primary (#2e3f57)</Typography>
          </View>

          <View className="bg-background p-m rounded-l border border-border">
            <Typography>Background (#0a0b0c)</Typography>
          </View>

          <View className="bg-card p-m rounded-l">
            <Typography>Card (#16181a)</Typography>
          </View>

          <View className="bg-ui-navBackground p-m rounded-l border border-ui-navBorder">
            <Typography>Nav Background (#15171C)</Typography>
          </View>
        </View>
      </View>
    </Screen>
  );
}
