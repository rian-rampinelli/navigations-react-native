import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
    category: string;
    titulo: string;
    resumo: string;
    onPress: () => void;
};

export default function Card({ category, titulo, resumo, onPress }: Props) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text>{category}</Text>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text  style={styles.resumo}>
                {resumo}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: "white"
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4
    },
    resumo: {
        color: "#555"
    },
});