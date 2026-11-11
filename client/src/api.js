// All requests to the backend go through here.
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function submitForm(endpoint, data) {
  let res
  try {
    res = await fetch(BASE + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch {
    throw new Error('Cannot reach the server. Please try again in a moment.')
  }
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || 'Something went wrong. Please try again.')
  return json
}
