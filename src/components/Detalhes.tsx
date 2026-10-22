
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NoticiaStackParamList } from "./ListCards";

type Props = NativeStackScreenProps<NoticiaStackParamList, "Detalhes">;

export default function Detalhes({ route, navigation }: Props) {
  const noticia = route.params.noticia;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.artigo}>
        <View style={{ flexDirection: "row", gap: 20, }}>
          <Pressable style={{ marginBottom:10 }}>
            <Text onPress={() => { navigation.goBack() }}> <Ionicons name="arrow-back" size={24} color="black" /></Text>
          </Pressable>
          <Text style={{fontWeight:"bold"}} >{noticia.categoria}</Text>
        </View>

        <Text style={styles.titulo}>{noticia.titulo}</Text>
        <Text style={styles.resumo}>{noticia.resumo}</Text>
        <Text style={styles.conteudo}>{noticia.conteudo}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  artigo: {
    gap: 12
  },
  titulo: {
    color: "#171717",
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700"
  },
  resumo: {
    color: "#555",
    fontSize: 17,
    lineHeight: 24
  },
  conteudo: {
    color: "#292929",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 8
  },
});
