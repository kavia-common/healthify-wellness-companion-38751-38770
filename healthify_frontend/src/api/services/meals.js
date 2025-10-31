import http from '../http';

// PUBLIC_INTERFACE
export async function listMeals() {
  /** Fetch list of meals. */
  const { data } = await http.get('/meals');
  return data;
}
