import Card from '../components/Card';
import { getEnvInfo } from '../api/config';
import { useStore } from '../state/StoreProvider';
import { actions } from '../state/actions';

// PUBLIC_INTERFACE
export default function Settings() {
  /** Settings page shows env info and theme toggle. */
  const env = getEnvInfo();
  const { state, dispatch } = useStore();
  const nextTheme = state.ui.theme === 'light' ? 'dark' : 'light';

  return (
    <div className="grid cols-2">
      <Card title="Appearance">
        <p>Current theme: <strong>{state.ui.theme}</strong></p>
        <button
          type="button"
          className="theme-btn"
          onClick={() => dispatch(actions.toggleTheme())}
        >
          Switch to {nextTheme} mode
        </button>
      </Card>

      <Card title="Environment">
        <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
          <li>API Base: <code>{env.apiBase || '(not set)'}</code></li>
          <li>Backend URL: <code>{env.backendUrl || '(not set)'}</code></li>
          <li>WebSocket URL: <code>{env.wsUrl || '(not set)'}</code></li>
          <li>Feature Flags: <code>{(env.featureFlags || []).join(', ') || '(none)'}</code></li>
          <li>Node Env: <code>{env.nodeEnv || '(not set)'}</code></li>
          <li>Port: <code>{env.port || '3000'}</code></li>
        </ul>
      </Card>
    </div>
  );
}
