import { Button as UIButton, Host, Icon, Row, Text } from "@expo/ui";

export type AppButtonVariant = "primary" | "plain";

export interface AppButtonProps {
  label: string;
  variant?: AppButtonVariant;
  onPress?: () => void;
}

const imageIcon = Icon.select({
  ios: "photo",
  android: import("@expo/material-symbols/photo.xml"),
});

/**
 * iOS (and other fallback platforms): universal @expo/ui button.
 * Android uses its own Jetpack Compose implementation (button.android.tsx)
 * because the universal Button applies its background to a wrapper view,
 * leaving the Material 3 container color (blue) visible inside.
 * Web uses React Native components (button.web.tsx).
 */
export default function AppButton({ label, variant = "primary", onPress }: AppButtonProps) {
  if (variant === "plain") {
    return (
      <Host matchContents>
        <UIButton onPress={onPress} variant="text" testID="plain-button">
          <Text textStyle={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{label}</Text>
        </UIButton>
      </Host>
    );
  }

  return (
    <Host matchContents>
      <UIButton
        onPress={onPress}
        style={{
          backgroundColor: "#ffd33d",
          borderRadius: 12,
          paddingHorizontal: 20,
          paddingVertical: 12,
        }}
        testID="primary-button"
      >
        <Row alignment="center" spacing={8}>
          <Icon name={imageIcon} size={18} color="#25292e" />
          <Text textStyle={{ color: "#25292e", fontSize: 16, fontWeight: "bold" }}>{label}</Text>
        </Row>
      </UIButton>
    </Host>
  );
}
