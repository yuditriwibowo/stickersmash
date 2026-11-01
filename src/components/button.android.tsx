import { Host } from "@expo/ui";
import { Button as ComposeButton, Icon, Row, Shape, Text } from "@expo/ui/jetpack-compose";

import type { AppButtonProps } from "./button";

const imageIcon = require("@expo/material-symbols/photo.xml");

/**
 * Android: direct Jetpack Compose implementation.
 * The universal Button maps `style.backgroundColor` to a wrapper view, so the
 * Material 3 default container color (blue) would still show. The Compose
 * Button takes `colors.containerColor`/`contentColor` directly.
 */
export default function AppButton({ label, variant = "primary", onPress }: AppButtonProps) {
  if (variant === "plain") {
    return (
      <Host matchContents>
        <ComposeButton
          onClick={onPress}
          colors={{ containerColor: "transparent", contentColor: "#fff" }}
          contentPadding={{ start: 20, top: 12, end: 20, bottom: 12 }}
        >
          <Text color="#fff" style={{ fontSize: 16, fontWeight: "500" }}>
            {label}
          </Text>
        </ComposeButton>
      </Host>
    );
  }

  return (
    <Host matchContents>
      <ComposeButton
        onClick={onPress}
        colors={{ containerColor: "#ffd33d", contentColor: "#25292e" }}
        contentPadding={{ start: 20, top: 12, end: 20, bottom: 12 }}
        shape={Shape.RoundedCorner({
          cornerRadii: { topStart: 12, topEnd: 12, bottomStart: 12, bottomEnd: 12 },
        })}
      >
        <Row verticalAlignment="center" horizontalArrangement={{ spacedBy: 8 }}>
          <Icon source={imageIcon} tint="#25292e" size={18} />
          <Text color="#25292e" style={{ fontSize: 16, fontWeight: "bold" }}>
            {label}
          </Text>
        </Row>
      </ComposeButton>
    </Host>
  );
}
