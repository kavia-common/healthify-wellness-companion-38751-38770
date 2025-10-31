import { useEffect } from 'react';
import { useStore } from './state/StoreProvider';
import NavBar from './components/NavBar';
import TabNav from './components/TabNav';
import AppRoutes from './routes/AppRoutes';
import RetroDecor from './components/RetroDecor';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * App root for Healthify.
   * Applies theme to document element and renders navigation + routes.
   */
  const { state } = useStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.ui.theme);
  }, [state.ui.theme]);

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="retro-decor" aria-hidden="true" />
      <NavBar />
      <TabNav />
      <main className="container page">
        <AppRoutes />
      </main>
      <RetroDecor />
    </div>
  );
}
