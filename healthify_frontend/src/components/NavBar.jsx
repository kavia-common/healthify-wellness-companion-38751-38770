import { useStore } from '../state/StoreProvider';
import { actions } from '../state/actions';

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Top navbar with theme toggle and brand title. */
  const { state, dispatch } = useStore();
  const nextTheme = state.ui.theme === 'light' ? 'dark' : 'light';

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <div className="brand" aria-label="Healthify brand">
          <span className="brand-badge">H</span>
          <span style={{ fontSize: 18 }}>Healthify</span>
        </div>

        <button
          type="button"
          className="theme-btn"
          onClick={() => dispatch(actions.toggleTheme())}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          {state.ui.theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}
