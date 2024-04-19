import { ProvedorEstadoGlobal } from "./src/hooks/EstadoGlobal";
import ListaTarefas from "./src/components/ListaTarefas";
import { NativeBaseProvider, View } from "native-base";
import AdicionarTarefa from "./src/components/AdicionarTarefa";

export default function App() {
  return (

    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={{ flex: 1 }}>
          {/* Componente para adicionar tarefas */}
          <AdicionarTarefa />
          {/* Componente que lista as tarefas */}
          <ListaTarefas />
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
}