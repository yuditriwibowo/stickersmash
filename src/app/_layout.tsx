import { NativeTabs } from "expo-router/native-tabs";
import { ThemeProvider, DarkTheme } from "expo-router/react-navigation";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar style="light" />
      <NativeTabs
        backgroundColor="#25292e"
        tintColor="#ffd33d"
        iconColor={{ default: "#fff", selected: "#ffd33d" }}
        labelStyle={{
          default: { color: "#fff" },
          selected: { color: "#ffd33d" },
        }}
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon sf={{ default: "house", selected: "house.fill" }} md="home" />
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Icon sf="info.circle" md="info" />
          <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
