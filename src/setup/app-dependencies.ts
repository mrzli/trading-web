import { type AppApi, createAppApi } from '../api';
import type { AppEnv } from './env';

export interface AppDependencies {
  readonly api: AppApi;
}

export const createAppDependencies = (env: AppEnv): AppDependencies => {
  const api = createAppApi({
    backendBaseUrl: env.backendBaseUrl,
  });

  return {
    api,
  };
};
