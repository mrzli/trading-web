import type { ApiConfig } from '../api-config';

export interface ExampleApi {
  readonly offline: () => Promise<string>;
  readonly hello: () => Promise<string>;
}

export const createExampleApi = (config: ApiConfig): ExampleApi => {
  return {
    offline: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`This is an example response. Backend Base URL: ${config.backendBaseUrl}`);
        }, 1000);
      });
    },
    hello: async () => {
      const response = await fetch(
        `${config.backendBaseUrl}/api/example/hello`,
      );
      return response.text();
    },
  };
};
