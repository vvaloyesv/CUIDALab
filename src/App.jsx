import { useCuido } from './hooks/useCuido';
import { useIsDesktop } from './hooks/useIsDesktop';
import View1Registro from './views/View1Registro';
import View2Matriz from './views/View2Matriz';
import View3Dashboard from './views/View3Dashboard';
import View1RegistroDesktop from './views/View1Registro.desktop';
import View2MatrizDesktop from './views/View2Matriz.desktop';
import View3DashboardDesktop from './views/View3Dashboard.desktop';
import DesktopHeader from './components/ds/DesktopHeader';

function App() {
  const cuido = useCuido();
  const { view } = cuido.state;
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    const step = view === 'v1' ? 1 : view === 'v2' ? 2 : 3;
    return (
      <div style={{ minHeight: '100vh', background: 'var(--ink-150)' }}>
        <DesktopHeader step={step} />
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 40px' }}>
          {view === 'v1' && <View1RegistroDesktop cuido={cuido} />}
          {view === 'v2' && <View2MatrizDesktop cuido={cuido} />}
          {view === 'v3' && <View3DashboardDesktop cuido={cuido} />}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', background: 'var(--ink-150)' }}>
      <div className="cuido-shell" style={{ minHeight: '100vh', background: 'var(--surface-page)', boxShadow: 'var(--shadow-md)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {view === 'v1' && <View1Registro cuido={cuido} />}
        {view === 'v2' && <View2Matriz cuido={cuido} />}
        {view === 'v3' && <View3Dashboard cuido={cuido} />}
      </div>
    </div>
  );
}

export default App;
