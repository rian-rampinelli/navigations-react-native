import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListCards, { type NoticiaItem, type NoticiaStackParamList } from "../../components/ListCards";
import Detalhes from "../../components/Detalhes";

const Stack = createNativeStackNavigator<NoticiaStackParamList>();

const noticias: NoticiaItem[] = [
  { id: "futebol", categoria: "Futebol", titulo: "Times se preparam para a rodada do fim de semana", resumo: "Treinos finais e ajustes táticos movimentam os clubes antes dos próximos jogos.", conteudo: "As equipes concluíram mais uma semana de preparação e agora concentram os esforços nos últimos ajustes para a rodada. Os treinadores devem definir as escalações momentos antes das partidas, que prometem disputa intensa e arquibancadas cheias." },
  { id: "basquete", categoria: "Basquete", titulo: "Campeonato entra em fase decisiva", resumo: "A disputa pelas primeiras posições promete jogos equilibrados nesta semana.", conteudo: "A reta decisiva do campeonato começa com confrontos importantes para a classificação. As equipes se preparam para uma sequência intensa em que cada resultado pode alterar a tabela." },
  { id: "corrida", categoria: "Corrida", titulo: "Atletas aceleram preparação para a prova", resumo: "Organização espera grande participação na corrida deste domingo.", conteudo: "Os participantes entram na semana final de preparação para a prova. A organização recomenda atenção à hidratação, ao descanso e às orientações divulgadas para o percurso." },
  { id: "volei", categoria: "Vôlei", titulo: "Seleção intensifica treinos para próximos desafios", resumo: "Comissão técnica aproveita a semana para testar novas formações.", conteudo: "A seleção aproveita os treinos desta semana para testar formações e dar ritmo ao grupo. A comissão técnica acompanha o desempenho dos atletas antes de definir a equipe para os próximos compromissos." },
  { id: "tenis", categoria: "Tênis", titulo: "Jovens talentos avançam no torneio nacional", resumo: "Partidas equilibradas marcaram a rodada desta terça-feira.", conteudo: "A nova geração do tênis brasileiro ganhou destaque na rodada, com partidas decididas nos detalhes. Os classificados voltam à quadra nos próximos dias em busca de uma vaga na final." },
  { id: "atletismo", categoria: "Atletismo", titulo: "Circuito abre inscrições para nova etapa", resumo: "Provas de pista e campo terão categorias para diferentes idades.", conteudo: "O circuito abre inscrições para sua próxima etapa, que reunirá provas de pista e campo. A programação terá categorias para diferentes idades e níveis de experiência." }
];

export function Esporte() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lista">
        {(props) => <ListCards {...props} noticias={noticias} />}
      </Stack.Screen>
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}
