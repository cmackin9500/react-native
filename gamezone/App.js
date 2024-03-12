import "react-native-gesture-handler";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: "white" },
        }}
      >
        <Drawer.Screen
          name="Home"
          style={{ flex: 1 }}
          component={HomeStack}
          options={{
            title: "Players",
            headerStyle: {
              backgroundColor: "#8da4f7",
            },
          }}
        />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
