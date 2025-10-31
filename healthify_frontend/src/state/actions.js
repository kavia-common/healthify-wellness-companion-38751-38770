export const types = {
  UI_TOGGLE_THEME: 'ui/toggleTheme',
  UI_SET_FEATURE_FLAGS: 'ui/setFeatureFlags',
  WORKOUTS_SET: 'workouts/set',
  MEALS_SET: 'meals/set',
  HYDRATION_SET: 'hydration/set',
  SLEEP_SET: 'sleep/set',
  HABITS_SET: 'habits/set',
  MIND_SET: 'mind/set'
};

// PUBLIC_INTERFACE
export const actions = {
  /** Toggle light/dark theme. */
  toggleTheme: () => ({ type: types.UI_TOGGLE_THEME }),

  /** Set feature flags array. */
  setFeatureFlags: (flags) => ({ type: types.UI_SET_FEATURE_FLAGS, payload: flags }),

  /** Domain setters (skeletons). */
  setWorkouts: (items) => ({ type: types.WORKOUTS_SET, payload: items }),
  setMeals: (items) => ({ type: types.MEALS_SET, payload: items }),
  setHydration: (items) => ({ type: types.HYDRATION_SET, payload: items }),
  setSleep: (items) => ({ type: types.SLEEP_SET, payload: items }),
  setHabits: (items) => ({ type: types.HABITS_SET, payload: items }),
  setMind: (items) => ({ type: types.MIND_SET, payload: items })
};
