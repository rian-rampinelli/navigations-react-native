import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListCards, { type NoticiaItem, type NoticiaStackParamList } from "../../components/ListCards";
import Detalhes from "../../components/Detalhes";

const Stack = createNativeStackNavigator<NoticiaStackParamList>();

const noticias: NoticiaItem[] = [
  { id: "ia", categoria: "Inteligência artificial", titulo: "Novas ferramentas de IA chegam aos aplicativos", resumo: "Atualizações prometem facilitar tarefas do dia a dia nos celulares.", conteudo: "As novidades de inteligência artificial começam a aparecer em aplicativos populares. Os recursos ajudam a resumir informações, organizar tarefas e encontrar conteúdos com mais rapidez." },
  { id: "celulares", categoria: "Celulares", titulo: "Fabricantes apresentam recursos para novos aparelhos", resumo: "Câmeras e autonomia estão entre os destaques das atualizações.", conteudo: "Os lançamentos deste ano trazem melhorias em câmeras, desempenho e duração da bateria. As fabricantes também destacam novas opções para personalizar a experiência de uso." },
  { id: "seguranca", categoria: "Segurança", titulo: "Dicas simples ajudam a proteger contas online", resumo: "Senhas únicas e verificação em duas etapas reforçam a segurança.", conteudo: "Especialistas recomendam usar senhas diferentes para cada serviço e ativar a verificação em duas etapas sempre que disponível. Manter os aplicativos atualizados também ajuda a reduzir riscos." },
  { id: "baterias", categoria: "Inovação", titulo: "Pesquisadores desenvolvem bateria de carregamento rápido", resumo: "Protótipo busca reduzir o tempo conectado à tomada.", conteudo: "Pesquisadores apresentaram um protótipo de bateria que pode reduzir o tempo de carregamento. A tecnologia ainda passa por testes antes de chegar a produtos comerciais." },
  { id: "robotica", categoria: "Robótica", titulo: "Robôs colaborativos ganham espaço em pequenas empresas", resumo: "Equipamentos ajudam a automatizar tarefas repetitivas.", conteudo: "Robôs colaborativos estão sendo usados por empresas de diferentes portes para automatizar tarefas repetitivas. Os equipamentos foram projetados para trabalhar ao lado de pessoas em processos industriais." },
  { id: "conectividade", categoria: "Conectividade", titulo: "Projeto amplia acesso à internet em áreas rurais", resumo: "Novas antenas devem levar conexão a comunidades afastadas.", conteudo: "Um projeto de conectividade prevê instalar novas antenas em áreas rurais com acesso limitado à internet. A iniciativa pretende apoiar escolas, pequenos negócios e serviços locais." }
];

export function Tecnologia() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lista">
        {(props) => <ListCards {...props} noticias={noticias} />}
      </Stack.Screen>
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}
