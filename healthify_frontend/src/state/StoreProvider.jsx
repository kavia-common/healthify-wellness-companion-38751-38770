import { createContext, useContext, useMemo, useReducer } from 'react';
import { initialState, rootReducer } from './reducers';

// PUBLIC_INTERFACE
export const StoreContext = createContext(null);

// PUBLIC_INTERFACE
export function StoreProvider({ children }) {
  /**
   * Wraps the app with a global state store.
   * Uses Context + useReducer for predictable updates.
   */
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

// PUBLIC_INTERFACE
export function useStore() {
  /** Hook to access store state and dispatch. */
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
