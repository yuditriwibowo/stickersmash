import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type AppButtonVariant = "primary" | "plain";

interface AppButtonProps {
  label: string;
  variant?: AppButtonVariant;
  onPress?: () => void;
}

export default function AppButton({ label, variant = "primary", onPress }: AppButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isPrimary && styles.primary,
        pressed && styles.pressed,
      ]}
    >
      {isPrimary ? <MaterialIcons name="image" size={18} color="#25292e" /> : null}
      <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.plainLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: "#ffd33d",
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    fontSize: 16,
  },
  primaryLabel: {
    color: "#25292e",
    fontWeight: "600",
  },
  plainLabel: {
    color: "#fff",
  },
});
