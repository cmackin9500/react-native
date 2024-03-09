import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { globalStyles } from "./styles/global";
import Home from "./screens/home";
import About from "./screens/about";
import ReviewDetails from "./screens/reviewDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "rubik-italic": require("./assets/fonts/Rubik-Italic.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Select a player",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerLeft: () => (
              <Button
                title="About"
                color="white"
                onPress={() => alert("there ain't no about")}
              />
            ),
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Review Detail" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
