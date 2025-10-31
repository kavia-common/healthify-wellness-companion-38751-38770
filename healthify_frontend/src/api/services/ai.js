import http from '../http';

// PUBLIC_INTERFACE
export async function getAiInsights() {
  /** Fetch AI insights. */
  const { data } = await http.get('/ai/insights');
  return data;
}
