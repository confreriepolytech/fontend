import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { COLORS } from "../constants/theme";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { FONTS } from "../constants/fonts";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(FONTS);
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }
 
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.background },
        animation: 'fade',
      }}
    >
      <Stack.Screen 
        name="index"
        options={{ 
          headerShown: false,
          animation: 'none',
        }}
      />
      <Stack.Screen 
        name="sign-up" 
        options={{ 
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="(root)/(tabs)" 
        options={{ 
          headerShown: false,
        }}
      />
    </Stack>
  );
}