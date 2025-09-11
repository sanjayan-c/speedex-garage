const API = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api";

export async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    credentials: "include",
    ...init,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }
  // allow 204
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}
