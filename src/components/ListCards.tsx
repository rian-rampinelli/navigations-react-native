import { ScrollView, StyleSheet, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Card from "./Card";

export type NoticiaItem = {
  id: string;
  categoria: string;
  titulo: string;
  resumo: string;
  conteudo: string;
};

export type NoticiaStackParamList = {
  Lista: undefined;
  Detalhes: { noticia: NoticiaItem };
};

type Props = {
  noticias: NoticiaItem[];
  navigation: NativeStackNavigationProp<NoticiaStackParamList, "Lista">;
};

export default function ListCards({ noticias, navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.lista}>
      {noticias.map((noticia) => (
        <Card
          key={noticia.id}
          category={noticia.categoria}
          titulo={noticia.titulo}
          resumo={noticia.resumo}
          onPress={() => navigation.navigate("Detalhes", { noticia })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: { 
    padding: 16, 
    gap: 12 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginBottom: 4 
  },
});
