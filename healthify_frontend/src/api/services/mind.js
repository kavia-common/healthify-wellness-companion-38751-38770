import http from '../http';

// PUBLIC_INTERFACE
export async function listMindActivities() {
  /** Fetch mind activities. */
  const { data } = await http.get('/mind');
  return data;
}
