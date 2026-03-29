import type { ApiConfig } from '../api-config';

export interface JsonPlaceholderPost {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

export interface ExampleApi {
  readonly offline: () => Promise<string>;
  readonly jsonPlaceholder: (id: number) => Promise<JsonPlaceholderPost>;
  readonly hello: () => Promise<string>;
}

export const createExampleApi = (config: ApiConfig): ExampleApi => {
  return {
    offline: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            `This is an example response. Backend Base URL: ${config.backendBaseUrl}`,
          );
        }, 1000);
      });
    },
    jsonPlaceholder: async (id: number) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      return response.json() as Promise<JsonPlaceholderPost>;
    },
    hello: async () => {
      const response = await fetch(
        `${config.backendBaseUrl}/api/example/hello`,
      );
      return response.text();
    },
  };
};
