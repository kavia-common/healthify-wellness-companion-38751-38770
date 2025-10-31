import http from '../http';

// PUBLIC_INTERFACE
export async function listHabits() {
  /** Fetch habit entries. */
  const { data } = await http.get('/habits');
  return data;
}
