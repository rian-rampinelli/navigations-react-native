import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "./src/app/Sobre";
import { Ionicons } from "@expo/vector-icons";
import Noticia from "./src/app/Noticia";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Notícias" screenOptions={{ headerTitleAlign: "center", headerTitleContainerStyle: { marginLeft:-30 } }}>

          <Drawer.Screen name="Notícias" component={Noticia} options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }} />

          <Drawer.Screen name="Sobre" component={Sobre}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="information-circle-outline" size={size} color={color} />
              ),
            }} />


        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}