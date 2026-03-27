import type { AppEnvRawBase } from './app-env-raw-base';

export interface AppEnvRawExplicit {
  readonly VITE_EXAMPLE_VAR: string;
  readonly VITE_BACKEND_BASE_URL: string;
}

export type AppEnvRaw = AppEnvRawExplicit & AppEnvRawBase;

export const APP_ENV_RAW: AppEnvRaw = {
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
  SSR: import.meta.env.SSR,
  VITE_EXAMPLE_VAR: import.meta.env.VITE_EXAMPLE_VAR,
  VITE_BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
};
