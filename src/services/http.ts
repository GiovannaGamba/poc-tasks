export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

const baseUrl = import.meta.env.VITE_API_URL as string | undefined;

if (!baseUrl || typeof baseUrl !== 'string') {
  // Keep a clear error to help setup
  // eslint-disable-next-line no-console
  console.warn('[http] Missing VITE_API_URL. Create a .env.local with VITE_API_URL=https://<mockapi-base-url>');
}

export async function http<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${baseUrl ?? ''}${path}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} ${response.statusText} - ${text}`);
  }

  if (response.status === 204) {
    return undefined as unknown as T;
  }

  return (await response.json()) as T;
}

export const get = <T>(path: string) => http<T>(path, { method: 'GET' });
export const post = <T>(path: string, body?: unknown) => http<T>(path, { method: 'POST', body: JSON.stringify(body ?? {}) });
export const del = <T>(path: string) => http<T>(path, { method: 'DELETE' });
export const put = <T>(path: string, body?: unknown) => http<T>(path, { method: 'PUT', body: JSON.stringify(body ?? {}) });
