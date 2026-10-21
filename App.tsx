import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "./src/app/Sobre";
import Perfil from "./src/app/Perfil";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sobre" screenOptions={{ headerTitleAlign: "left" }}>
        <Drawer.Screen name="Sobre" component={Sobre}  />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}