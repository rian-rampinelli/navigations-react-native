import { View, Text, Image } from "react-native"

export default function Perfil() {
    return (
        <View>
            <Text>Sobre</Text>
            <Image
                source={require("../../assets/news.png")}
                style={{ width: 100, height: 100 }}
            />
            <Text>Esse é o mini app de noticias</Text>
            <Text>Você vai praticar diferentes tipos de navegação com react native.</Text>

        </View>
    )
}