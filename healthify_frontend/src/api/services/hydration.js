import http from '../http';

// PUBLIC_INTERFACE
export async function listHydration() {
  /** Fetch hydration entries. */
  const { data } = await http.get('/hydration');
  return data;
}
