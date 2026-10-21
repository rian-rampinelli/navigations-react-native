import { View, Text, Image, StyleSheet } from "react-native"

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>Sobre</Text>
                <Image
                    source={require("../../assets/news.png")}
                    style={{ width: 128, height: 128 }}
                />
            </View>
            <View style={styles.hr}>

            </View>

            <Text>Esse é o mini app de noticias.</Text>
            <Text>Você vai praticar diferentes tipos de navegação com react native.</Text>
            <View style = {styles.lista}>
                <Text>• Drawer (Raiz, Menu lateral)</Text>
                <Text>• Tabs (Tecnologia/Esporte)</Text>
                <Text>• Stack (Listas - Detalhes)</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 50
    },
    title: {
        fontWeight: "bold",
        fontSize: 28
    },
    hr: {
        height: 3,
        backgroundColor: "grey",
        width: "100%",
        marginVertical: 16,
    },
    lista:{
        marginLeft:15
    }
})