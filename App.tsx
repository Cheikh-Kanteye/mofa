import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./src/themes/colors";
import { TabNavigator } from "./src/utils/navigation";

SplashScreen.preventAutoHideAsync();
setBackgroundColorAsync(colors.white);

const App = () => {
  const [fontsLoaded] = useFonts({
    "Proxima-Nova-Thin": require("./src/assets/fonts/Proxima-Nova-Thin.otf"),
    "Proxima-Nova-Regular": require("./src/assets/fonts/Proxima-Nova-Regular.otf"),
    "Proxima-Nova-Semibold": require("./src/assets/fonts/Proxima-Nova-Semibold.otf"),
    "Proxima-Nova-Bold": require("./src/assets/fonts/Proxima-Nova-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
