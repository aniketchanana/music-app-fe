/* eslint-disable @typescript-eslint/no-explicit-any */
type RequestOptions = {
  method: string;
  headers: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
};

class APIWrapper {
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T = any>(
    endpoint: string,
    method: string = 'GET',
    body: any = null,
    headers: Record<string, string> = {},
    signal: AbortSignal | null = null
  ): Promise<T> {
    const url = `${this.baseURL}/${endpoint}`;
    const options: RequestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (signal) {
      options.signal = signal;
    }

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw errorResponse;
      }
      return await response.json();
    } catch (error: any) {
      console.error(`Fetch error: ${error?.message}`);
      throw error;
    }
  }

  async get<T = any>(
    endpoint: string,
    headers: Record<string, string> = {},
    signal: AbortSignal | null = null
  ): Promise<T> {
    return this.request<T>(endpoint, 'GET', null, headers, signal);
  }

  async post<T = any, U = any>(
    endpoint: string,
    body: U,
    headers: Record<string, string> = {},
    signal: AbortSignal | null = null
  ): Promise<T> {
    return this.request<T>(endpoint, 'POST', body, headers, signal);
  }

  async put<T = any, U = any>(
    endpoint: string,
    body: U,
    headers: Record<string, string> = {},
    signal: AbortSignal | null = null
  ): Promise<T> {
    return this.request<T>(endpoint, 'PUT', body, headers, signal);
  }

  async delete<T = any>(
    endpoint: string,
    headers: Record<string, string> = {},
    signal: AbortSignal | null = null
  ): Promise<T> {
    return this.request<T>(endpoint, 'DELETE', null, headers, signal);
  }
}

export const searchAPI = new APIWrapper(
  import.meta.env.VITE_YOUTUBE_SEARCH_BASE_URL
);

export const videoToAudio = new APIWrapper(
  `${import.meta.env.VITE_VIDEO_TO_AUDIO}/song`
);
