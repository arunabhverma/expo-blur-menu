import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      subText: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  let dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      subText: "#B3B3B3",
    },
  };
  let light = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      subText: "#555555",
    },
  };
  const theme = colorScheme === "dark" ? dark : light;

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerLargeTitle: true,
            title: "Blur Menu",
            headerTransparent: true,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
