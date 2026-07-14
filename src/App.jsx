import { useCuido } from './hooks/useCuido';
import View1Registro from './views/View1Registro';
import View2Matriz from './views/View2Matriz';
import View3Dashboard from './views/View3Dashboard';

function App() {
  const cuido = useCuido();
  const { view } = cuido.state;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', background: 'var(--ink-150)' }}>
      <div style={{ width: '100%', maxWidth: 560, minHeight: '100vh', background: 'var(--surface-page)', boxShadow: 'var(--shadow-md)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {view === 'v1' && <View1Registro cuido={cuido} />}
        {view === 'v2' && <View2Matriz cuido={cuido} />}
        {view === 'v3' && <View3Dashboard cuido={cuido} />}
      </div>
    </div>
  );
}

export default App;
