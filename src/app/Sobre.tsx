import { View, Text, Image, StyleSheet, Button } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Sobre</Text>
                    <Image
                        source={require("../../assets/news.png")}
                        style={{ width: 128, height: 128 }}
                    />
                </View>
                <View style={styles.hr}></View>
                <View style={{ flex: 1 }}>
                    <Text>Esse é o mini app de noticias.</Text>
                    <Text>Você vai praticar diferentes tipos de navegação com react native.</Text>
                    <View style={styles.lista}>
                        <Text>• Drawer (Raiz, Menu lateral)</Text>
                        <Text>• Tabs (Tecnologia/Esporte)</Text>
                        <Text>• Stack (Listas - Detalhes)</Text>
                    </View>
                </View>

                <View >
                    <Button onPress={() => navigation.navigate("Notícias" as never)} title="Voltar">

                    </Button>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop:32,
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 10
    },
    hr: {
        height: 3,
        backgroundColor: "grey",
        width: "100%",
        marginVertical: 16,
    },
    lista: {
        marginLeft: 15
    }
})