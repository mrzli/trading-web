import { type AppEnvParsed, appEnvParsed } from './app-env-parsed';
import type { AppEnvMode } from './app-env-raw-base';

export interface AppEnv {
  readonly mode: AppEnvMode;
  readonly baseUrl: string;
  readonly prod: boolean;
  readonly dev: boolean;
  readonly ssr: boolean;
  readonly exampleVar: string;
  readonly backendBaseUrl: string;
}

export const appEnv = (): AppEnv => {
  const parsed = appEnvParsed();
  return envRawToEnv(parsed);
};

const envRawToEnv = (raw: AppEnvParsed): AppEnv => {
  return {
    mode: raw.MODE,
    baseUrl: raw.BASE_URL,
    prod: raw.PROD,
    dev: raw.DEV,
    ssr: raw.SSR,
    exampleVar: raw.VITE_EXAMPLE_VAR,
    backendBaseUrl: raw.VITE_BACKEND_BASE_URL,
  };
};
