import { types } from './actions';

export const initialState = {
  ui: {
    theme: 'light',
    featureFlags: []
  },
  workouts: { items: [] },
  meals: { items: [] },
  hydration: { items: [] },
  sleep: { items: [] },
  habits: { items: [] },
  mind: { items: [] }
};

// PUBLIC_INTERFACE
export function rootReducer(state, action) {
  /** Root reducer handling all slices. */
  switch (action.type) {
    case types.UI_TOGGLE_THEME: {
      const next = state.ui.theme === 'light' ? 'dark' : 'light';
      return { ...state, ui: { ...state.ui, theme: next } };
    }
    case types.UI_SET_FEATURE_FLAGS:
      return { ...state, ui: { ...state.ui, featureFlags: action.payload || [] } };

    case types.WORKOUTS_SET:
      return { ...state, workouts: { items: action.payload || [] } };
    case types.MEALS_SET:
      return { ...state, meals: { items: action.payload || [] } };
    case types.HYDRATION_SET:
      return { ...state, hydration: { items: action.payload || [] } };
    case types.SLEEP_SET:
      return { ...state, sleep: { items: action.payload || [] } };
    case types.HABITS_SET:
      return { ...state, habits: { items: action.payload || [] } };
    case types.MIND_SET:
      return { ...state, mind: { items: action.payload || [] } };

    default:
      return state;
  }
}
