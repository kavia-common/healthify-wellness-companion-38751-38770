import http from '../http';

// PUBLIC_INTERFACE
export async function listSleep() {
  /** Fetch sleep records. */
  const { data } = await http.get('/sleep');
  return data;
}
