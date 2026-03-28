import type { ApiConfig } from './api-config';
import { createExampleApi, type ExampleApi } from './parts';

export interface AppApi {
  readonly example: ExampleApi;
}

export const createAppApi = (config: ApiConfig): AppApi => {
  return {
    example: createExampleApi(config),
  };
};
