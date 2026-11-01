import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import AppButton from "@/components/button";

const placeholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
    // Cancelled → do nothing, keep the currently displayed image
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageUri ? { uri: imageUri } : placeholderImage}
        style={styles.image}
        contentFit="cover"
      />
      <View style={styles.buttonContainer}>
        <AppButton variant="primary" label="Choose a photo" onPress={pickImageAsync} />
        <AppButton variant="plain" label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonContainer: {
    alignItems: "center",
    gap: 12,
  },
});
