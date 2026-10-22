import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Esporte } from "./noticia/Esporte";
import { Tecnologia } from "./noticia/Tecnologia";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export default function Noticia() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { height: 100 },
            headerStyle: { height: 70 },          
            headerTitleContainerStyle: { paddingTop: 10 },
        }}>
            <Tab.Screen name="Esporte" component={Esporte} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="football" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Tecnologia" component={Tecnologia}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="phone-android" size={size} color={color} />
                    ),
                }} />
        </Tab.Navigator>


    );
}