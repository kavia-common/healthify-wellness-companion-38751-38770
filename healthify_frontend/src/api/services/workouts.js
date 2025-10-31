import http from '../http';

// PUBLIC_INTERFACE
export async function listWorkouts() {
  /** Fetch list of workouts. */
  const { data } = await http.get('/workouts');
  return data;
}
